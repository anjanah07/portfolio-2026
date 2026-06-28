export const profile = {
  name: "Anjana Thandassery",
  role: "Full Stack Engineer",
  location: "Bengaluru, India",
  email: "thanjana7@gmail.com",
  linkedin: "https://www.linkedin.com/in/anjanaharidas/",
  github: "https://github.com/anjanah07",
  summary:
    "Full Stack Engineer with 3 years of experience building scalable enterprise applications using Python backend systems and React/TypeScript frontends. Experienced in REST APIs, microfrontend architectures, real-time notifications, caching layers, cloud-native deployments, and AI integrations including autonomous agents, RAG, semantic search, vector embeddings, and prompt-driven workflow automation.",
};

export const highlights = [
  "AI agents with Google ADK, Claude, and AWS Bedrock",
  "RAG knowledge retrieval with OpenSearch and vector embeddings",
  "Microfrontend campaign platform serving 800+ daily users",
  "35% API response-time reduction using Redis caching",
  "Real-time notification systems with WebSockets and Kafka",
  "Cloud-native microservices on AWS ECS Fargate",
];

export const experiences = [
  {
    company: "JP Morgan Chase and Co.",
    role: "Software Engineer",
    location: "Bengaluru, India",
    period: "June 2023 — Present",
    description:
      "Founding engineer on the campaign platform team, building scalable full-stack systems and AI-powered workflow automation for enterprise marketing platforms.",
    bullets: [
      "Architected autonomous AI agents using Google Agent Development Kit and Claude models via AWS Bedrock.",
      "Created sub-agents for workflow automation, multi-turn reasoning, and task execution.",
      "Built a scalable RAG-based knowledge base using OpenSearch, vector embeddings, and semantic search.",
      "Integrated Postgres as long-term memory for AI agents, enabling persistent context and session-aware reasoning.",
      "Applied prompt engineering and LLM APIs for grammar correction, content validation, compliance checks, and creative comparison.",
      "Designed and built a React/TypeScript microfrontend campaign creation platform serving 800+ daily active users.",
      "Implemented FastAPI and Pydantic backend services for ticketing workflows.",
      "Used Redis caching for offer and product data, reducing average API response time by approximately 35%.",
      "Built real-time notifications using WebSockets and Kafka for campaign lifecycle updates.",
      "Deployed containerized services on AWS ECS Fargate, Aurora Postgres, and OpenSearch.",
      "Managed frontend state using Recoil, Redux, and Context.",
      "Authored frontend tests using React Testing Library and Jest, and backend tests using Pytest.",
      "Mentored interns and contributed to design reviews across the platform team.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Pydantic",
      "AWS Bedrock",
      "Google ADK",
      "Claude",
      "OpenSearch",
      "Postgres",
      "Redis",
      "Kafka",
      "WebSockets",
      "AWS ECS",
      "Terraform",
    ],
  },
  {
    company: "JP Morgan Chase and Co.",
    role: "Software Engineer Intern",
    location: "Bengaluru, India",
    period: "Feb 2023 — June 2023",
    description:
      "Built full-stack features for a game-character management application with real-time event-driven communication.",
    bullets: [
      "Built a game-character management app with a React frontend and Java Spring Boot backend.",
      "Designed REST APIs and integrated WebSockets for event-driven messaging.",
      "Used PostgreSQL for structured data storage and optimized schema design for dynamic character data.",
    ],
    stack: [
      "React",
      "Java",
      "Spring Boot",
      "REST APIs",
      "WebSockets",
      "PostgreSQL",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages & AI",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "Google ADK",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "Vector Embeddings",
      "Semantic Search",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "NPM",
      "Recoil",
      "Jotai",
      "Redux",
      "AG-Grid",
      "Webpack",
      "React Testing Library",
    ],
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Pydantic",
      "asyncio",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "REST APIs",
      "GraphQL",
      "JWT/OAuth",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS ECS",
      "AWS S3",
      "Aurora Postgres",
      "OpenSearch",
      "AWS Bedrock",
      "Terraform",
      "CI/CD",
      "GitHub",
      "Bitbucket",
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      "Pytest",
      "Jest",
      "Mocha",
      "GitHub Copilot",
      "Claude Code",
      "ESLint",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Cloud Practitioner",
    meta: "Nov 2023",
    linkLabel: "Certificate Link",
    href: "#",
  },
];

export const achievements = [
  "Recognized as Goal Achiever for Q3 and Q4 2025 at JP Morgan Chase.",
  "Among top 5 teams at Unfold’22 Hackathon by CoinDCX x Devfolio.",
];

export const education = {
  institution: "VIT Bhopal University",
  degree: "B.Tech in Computer Science and Engineering",
  period: "June 2019 — June 2023",
  gpa: "8.97",
};

export const projects = [
  {
    name: "Autonomous AI Marketing Agents",
    description:
      "Agentic AI system using Google ADK, Claude via AWS Bedrock, long-term Postgres memory, and sub-agent orchestration for marketing workflow automation.",
    tags: ["AI Agents", "AWS Bedrock", "Google ADK", "Claude", "Postgres"],
  },
  {
    name: "RAG Knowledge Retrieval Platform",
    description:
      "Semantic retrieval layer powered by OpenSearch, vector embeddings, and domain-specific knowledge indexing for accurate campaign information lookup.",
    tags: ["RAG", "OpenSearch", "Embeddings", "Semantic Search"],
  },
  {
    name: "Campaign Microfrontend Platform",
    description:
      "Enterprise campaign creation platform built with React and TypeScript, serving 800+ daily active users with modular microfrontend architecture.",
    tags: ["React", "TypeScript", "Microfrontends", "Recoil"],
  },
  {
    name: "Real-time Campaign Notifications",
    description:
      "Event-driven notification service using WebSockets and Kafka for campaign status updates and lifecycle visibility.",
    tags: ["Kafka", "WebSockets", "FastAPI", "Real-time"],
  },
];
