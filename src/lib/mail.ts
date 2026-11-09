import nodemailer from "nodemailer";

type Notice = { subject: string; text: string };

export async function notify({ subject, text }: Notice) {
  const to = process.env.NOTIFY_TO;
  const host = process.env.SMTP_HOST;
  if (!host || !to) {
    console.log(`[mail disabled] ${subject}\n${text}`);
    return;
  }
  const port = Number(process.env.SMTP_PORT ?? 587);
  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
  });
  await transport.sendMail({
    from: process.env.MAIL_FROM ?? to,
    to,
    subject,
    text,
  });
}
