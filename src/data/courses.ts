export type Course = {
  slug: string;
  title: string;
  summary: string;
  level: string;
  duration: string;
  tags: string[];
  outcomes: string[];
  curriculum: string[];
  // Optional richer syllabus: shown instead of `curriculum` when present.
  modules?: { title: string; topics: string[] }[];
  audience?: string;
  prerequisites?: string[];
};

// Edit this list to add or change courses. Placeholder content: replace with your own.
export const courses: Course[] = [
  {
    slug: "ai-product-management",
    title: "AI Product Management",
    summary:
      "Learn to take AI products from vague idea to shipped outcome: scoping, specs, prototypes, evals and stakeholder delivery. No coding required.",
    level: "Intermediate",
    // PLACEHOLDER: set your own schedule.
    duration: "16 weeks (weekend sessions)",
    tags: ["Product Management", "LLMs", "Agents", "Evals", "Prototyping"],
    audience:
      "Product managers, business analysts, consultants and engineers moving into AI product roles.",
    prerequisites: [
      "A bachelor's degree or equivalent experience in any field",
      "No programming background needed; prototypes are built with AI tools",
    ],
    outcomes: [
      "Turn a vague 'we need AI' request into a well-defined product problem",
      "Explain how LLMs and agents work well enough to spec them for engineers",
      "Write PRDs and AI-friendly specs that agents and developers can act on",
      "Build clickable and vibe-coded prototypes without writing production code",
      "Design evals, guardrails and autonomy levels for non-deterministic products",
      "Estimate token costs and build the ROI case for an AI feature",
      "Lead delivery with stakeholders, from kickoff to handover",
    ],
    curriculum: [],
    modules: [
      {
        title: "The AI-Native PM Role",
        topics: [
          "From backlog owner to outcome owner",
          "How AI changes the product development lifecycle",
          "A phased framework from framing to shipping",
          "Choosing where to go deep for your context",
        ],
      },
      {
        title: "LLMs and Agents for Product People",
        topics: [
          "How large language models work, without the math",
          "Prompt engineering that holds up in production",
          "How agents work: tools, memory, loops",
          "When AI is the wrong answer and a simpler fix wins",
          "Automating your own PM workflow with AI",
        ],
      },
      {
        title: "Context, Data and Privacy",
        topics: [
          "Context engineering and retrieval (RAG) at PM level",
          "AI-assisted user and market discovery",
          "Connecting data sources and tools to agents",
          "Data residency, privacy and compliance levels",
        ],
      },
      {
        title: "Specs and Documentation",
        topics: [
          "The set of documents an AI product needs",
          "Choosing between a full PRD and a lightweight one",
          "Writing specs that LLMs can read and follow",
          "Turning a PRD into an actionable build spec",
        ],
      },
      {
        title: "Prototyping and Proofs of Concept",
        topics: [
          "A repeatable prototyping flow",
          "Vibe coding: methods and pitfalls",
          "UI mockups with AI design tools",
          "A proof of concept that travels with the PRD",
          "Demoing so stakeholders say yes",
        ],
      },
      {
        title: "Evals, Autonomy and Cost",
        topics: [
          "Evaluating fuzzy outputs: test sets and rubrics",
          "Guardrails and levels of autonomy",
          "Token economics and cost estimation",
          "Deciding 'agent or not' with clear qualifying metrics",
        ],
      },
      {
        title: "Delivery and Client-Facing Practice",
        topics: [
          "Working embedded with a team or client",
          "Consulting skills for AI engagements",
          "ROI and the business case",
          "Managing stakeholders and expectations",
          "Leading the build and the handover",
        ],
      },
      {
        title: "Case Study: Retrieval and Recommendations",
        topics: [
          "Framing the problem and choosing an architecture",
          "Building a working assistant live",
          "Evaluating a product with fuzzy answers",
          "ROI and guardrails",
        ],
      },
      {
        title: "Case Study: Agentic Customer Support",
        topics: [
          "Finding repeating issues in support data",
          "Designing the agent workflow and its trust boundary",
          "Building the workflow live",
          "Rollout plan and reporting results",
        ],
      },
      {
        title: "Capstone: Ship an AI Product End to End",
        topics: [
          "Discovery on a given product idea",
          "Spec and prototype",
          "Evals, economics and outcome review",
          "Final panel review",
        ],
      },
    ],
  },
  {
    slug: "forward-deployed-engineering",
    title: "Forward Deployed Engineering with AI Agents",
    summary:
      "Build AI agents and ship them to production on Google Cloud: from client discovery and RAG to evals, security, monitoring and ownership after launch.",
    level: "Advanced",
    // PLACEHOLDER: set your own schedule.
    duration: "24 weeks (weekday evenings + weekend builds)",
    tags: ["AI Agents", "RAG", "Python", "GCP", "Cloud Run", "Evals", "Docker"],
    audience:
      "Software engineers, data scientists and ML practitioners who want to deploy AI systems inside real organizations and own the outcome.",
    prerequisites: [
      "Comfortable writing Python and basic SQL",
      "Basic familiarity with APIs, Git and the command line",
      "Some exposure to ML or LLMs through coursework or projects",
      "A free Google Cloud account (credits cover course work)",
    ],
    outcomes: [
      "Diagnose a client's real problem and decide whether AI is the right fix",
      "Build tool-using, multi-step agents with open-source frameworks",
      "Ship retrieval (RAG) systems with citations, filtering and quality checks",
      "Package, deploy and scale services on Google Cloud with CI/CD and infrastructure as code",
      "Test and monitor non-deterministic systems with evals, tracing and cost tracking",
      "Apply security, privacy and compliance controls to production AI",
      "Run delivery end to end: scoping, handover, adoption and iteration",
    ],
    curriculum: [],
    modules: [
      {
        title: "The Forward Deployed Engineer",
        topics: [
          "What the role is and how it differs from a standard software or ML job",
          "The delivery cycle: understand, define, design, build, deploy, own",
          "Problem diagnosis and client discovery",
          "Choosing between AI, automation and plain software",
        ],
      },
      {
        title: "Production Python and APIs",
        topics: [
          "Project structure, typing, testing and packaging",
          "Building services with FastAPI",
          "Async work, queues and background jobs",
          "Integrating third-party and client APIs reliably",
        ],
      },
      {
        title: "Data and Storage",
        topics: [
          "Relational design with PostgreSQL",
          "Vector search with pgvector and Qdrant",
          "Caching and rate limiting",
          "Data pipelines and ingestion of messy documents",
        ],
      },
      {
        title: "Working with LLMs",
        topics: [
          "Model landscape: hosted APIs, Vertex AI models and local open models",
          "Prompting, structured outputs and function calling",
          "Context management and cost control",
          "Fine-tuning versus prompting versus retrieval",
        ],
      },
      {
        title: "Retrieval-Augmented Generation in Production",
        topics: [
          "Chunking, embeddings and hybrid search",
          "Reranking, citations and answer grounding",
          "Hallucination checks and PII filtering",
          "Multi-tenant data isolation",
        ],
      },
      {
        title: "Building AI Agents",
        topics: [
          "Agent patterns: ReAct, planning, tool use and memory",
          "Orchestration with LangGraph and similar open-source frameworks",
          "Multi-agent systems and human-in-the-loop steps",
          "Failure handling, retries and loop limits",
        ],
      },
      {
        title: "Containers and Google Cloud Foundations",
        topics: [
          "Docker for AI services",
          "GCP projects, IAM, service accounts and billing guardrails",
          "Artifact Registry and Cloud Build",
          "Secrets and configuration with Secret Manager",
        ],
      },
      {
        title: "Deploying on Google Cloud",
        topics: [
          "Running services on Cloud Run, including scaling and cold starts",
          "Managed databases with Cloud SQL and storage with Cloud Storage",
          "Event-driven flows with Pub/Sub and Cloud Tasks",
          "Using Vertex AI for model serving and embeddings",
          "Infrastructure as code with Terraform",
        ],
      },
      {
        title: "Evals, Observability and Reliability",
        topics: [
          "Building test sets and evaluating agent behavior",
          "Tracing and logging with OpenTelemetry and Cloud Logging",
          "Dashboards, alerts and incident response",
          "Latency, throughput and cost optimization",
        ],
      },
      {
        title: "Security, Privacy and Compliance",
        topics: [
          "Prompt injection and tool-abuse defenses",
          "Guardrails and content safety",
          "Data residency, encryption and audit logs",
          "Handling regulated data, for example in healthcare and finance",
        ],
      },
      {
        title: "Consulting and Delivery Skills",
        topics: [
          "Scoping, estimating and writing the business case",
          "Stakeholder communication and technical writing for non-technical clients",
          "Change management and driving adoption",
          "Handover, support models and success metrics",
        ],
      },
      {
        title: "Case Studies",
        topics: [
          "Support ticket triage and routing agent",
          "Document extraction and reconciliation pipeline",
          "Internal knowledge assistant over company documents",
          "Real-time fraud scoring service with a strict latency budget",
        ],
      },
      {
        title: "Capstone: Deploy an Agent System for a Real Use Case",
        topics: [
          "Client brief and discovery",
          "Architecture and build",
          "Deployment on GCP with CI/CD, monitoring and evals",
          "Demo, handover document and panel review",
        ],
      },
    ],
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    summary: "Build real products with LLMs: prompting, assistants, RAG and automation.",
    level: "Beginner to Advanced",
    duration: "10 weeks",
    tags: ["LLMs", "Prompting", "RAG", "APIs"],
    outcomes: [
      "Write reliable prompts and evaluate outputs",
      "Build a custom AI assistant",
      "Add retrieval over your own documents",
      "Ship an end-to-end AI project",
    ],
    curriculum: [
      "Foundations of generative AI",
      "Prompt engineering",
      "Working with LLM APIs",
      "Retrieval-augmented generation",
      "Workflow automation",
      "Capstone project",
    ],
  },
  {
    slug: "python-data-science",
    title: "Python for Data Science",
    summary: "Python, data wrangling and modelling from the ground up.",
    level: "Beginner",
    duration: "12 weeks",
    tags: ["Python", "Pandas", "NumPy", "SQL"],
    outcomes: [
      "Write clean Python",
      "Analyse and visualise data",
      "Query data with SQL",
      "Train and evaluate a first model",
    ],
    curriculum: [
      "Python essentials",
      "Pandas and NumPy",
      "SQL for analysts",
      "Visualisation",
      "Intro to machine learning",
      "Capstone project",
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    summary: "Classical ML and deep learning with hands-on projects.",
    level: "Intermediate",
    duration: "12 weeks",
    tags: ["Scikit-learn", "Deep Learning", "NLP"],
    outcomes: [
      "Choose and tune ML models",
      "Build neural networks",
      "Work with text data",
      "Deploy a model behind an API",
    ],
    curriculum: [
      "Supervised learning",
      "Model evaluation",
      "Neural networks",
      "NLP basics",
      "Model deployment",
      "Capstone project",
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
