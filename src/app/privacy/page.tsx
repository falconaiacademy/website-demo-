export const metadata = { title: "Privacy Policy" };

// TEMPLATE ONLY: have this reviewed against India's DPDP Act (and PIPEDA/CCPA if you serve those users).
export default function Privacy() {
  return (
    <article className="mx-auto max-w-2xl space-y-4 px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p>
        When you register we collect your name, email address, phone number and (optionally) your
        college or company. We use this only to contact you about the course you chose.
      </p>
      <p>We do not sell your data. We store it in our database and our email provider processes the notification.</p>
      <p>To access or delete your data, email us at the support address shown on this site.</p>
    </article>
  );
}
