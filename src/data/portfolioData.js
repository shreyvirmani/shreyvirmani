export const portfolioData = {
  personal: {
    name: "Shrey Virmani",
    title: "AI/ML Engineer | AI Applications Developer",
    tagline: "Building AI/ML systems, NLP pipelines, and practical AI applications.",
    positioning: "AI/ML Engineer focused on machine learning, NLP, and practical AI applications, with additional experience in Generative AI, RAG, and multi-agent systems.",
    bio: "I am an AI/ML engineer with hands-on experience building machine learning systems, NLP pipelines, and practical AI applications. My work spans the complete AI/ML lifecycle — data processing, feature engineering, model training, NLP, retrieval systems, and deploying AI/ML-powered products. I also have experience with Generative AI, RAG pipelines, LLM integration, prompt engineering, multi-agent workflows, backend API development, and full-stack deployment.",
    location: "New Delhi, India",
    phone: "+91 9625465588",
    email: "shreyvirmani1905@gmail.com",
    github: "https://github.com/shreyvirmani",
    githubUsername: "shreyvirmani",
    linkedin: "https://www.linkedin.com/in/shrey-virmani",
    instagram: "https://www.instagram.com/shrey_virmani",
  },
  
  stats: [
    { label: "Core Focus", value: "AI/ML, NLP & AI Systems" },
    { label: "Additional Strength", value: "GenAI, RAG & Agents" },
    { label: "Current B.Tech CGPA", value: "8.2/10" },
    { label: "Leadership Role", value: "VP @ ISTE MSIT" },
  ],

  projects: [
    {
      id: "tracera",
      title: "Tracera — Website Risk Assessment",
      subtitle: "Security Scanning & AI/ML-Based Risk Scoring",
      flagship: true,
      category: "AI/ML Systems",
      status: "In development",
      github: "https://github.com/shreyvirmani/Tracera",
      tech: ["Python", "scikit-learn", "FastAPI", "Next.js", "PostgreSQL"],
      summary: "Scans websites for security misconfigurations including insecure cookies, missing security headers, and HTTP/TLS issues, then produces severity-based risk scores and remediation reports.",
      description: `Tracera combines a deterministic scanning engine with 15 registered rule-based checks and a 17-feature ML schema (MLFeaturesV1) used for model training to detect security misconfigurations. An experimental Isolation Forest anomaly detector was prototyped on synthetic data but has not been evaluated on labeled real-world data. The FastAPI backend integrates with a Next.js frontend for scan history and reporting workflows. No deployed demo is available; the source code is public.`,
      highlights: [
        "15 deterministic rule-based security checks covering headers, cookies, configuration disclosure, CORS, and performance.",
        "17-feature ML schema with scikit-learn training (logistic regression, random forest, XGBoost) alongside a rule-based scoring baseline.",
        "Experimental Isolation Forest anomaly detector (synthetic-data experiment; not evaluated on labeled real-world data).",
        "FastAPI backend with Next.js frontend, scan history, and remediation reporting.",
        "In development — no live demo deployed; source code public."
      ]
    },
    {
      id: "pdf2ml-dataprep",
      title: "PDF2ML DataPrep — PDF-to-AI/ML Converter",
      subtitle: "PDF Table Extraction to AI/ML-Ready Datasets",
      flagship: true,
      category: "Data Engineering",
      liveDemo: "https://pdf2ml.streamlit.app/",
      github: "https://github.com/shreyvirmani/PDF2ML",
      tech: ["Python", "FastAPI", "Streamlit", "Camelot", "pandas", "Celery"],
      summary: "Extracts tables and text from PDFs using Camelot, Tabula, and pdfminer and converts them into cleaned, AI/ML-ready CSV/XLSX datasets.",
      description: `PDF2ML DataPrep extracts structured data from PDFs using Camelot, Tabula, and pdfminer, then applies configurable cleaning and schema inference with pandas to produce AI/ML-ready datasets. Built with a FastAPI backend, Celery/Redis background jobs, S3-compatible storage, a Streamlit interface, Docker, and pytest.`,
      highlights: [
        "Multi-engine PDF extraction: Camelot, Tabula, and pdfminer for tables and text.",
        "Configurable data cleaning and schema inference with pandas.",
        "FastAPI backend with Celery/Redis async job processing.",
        "S3-compatible storage, Docker containerization, and pytest test suite.",
        "Streamlit interface for interactive conversion workflows."
      ]
    },
    {
      id: "hackmind-ai",
      title: "HackMind AI Copilot",
      subtitle: "Full-Stack Multi-Agent Generative AI Platform",
      flagship: true,
      category: "Agentic AI",
      liveDemo: "https://hackmind-ai-copilot.vercel.app/",
      github: "https://github.com/shreyvirmani/HackMind-AI",
      tech: ["Google Gemini", "LLM Integration", "Agent Orchestration", "FastAPI", "WebSockets", "Next.js", "TypeScript", "Supabase/PostgreSQL", "Python", "Razorpay", "Vercel", "Railway"],
      summary: "A full-stack Multi-Agent Generative AI platform for hackathon ideation, research, evaluation, prompt engineering, and project development — orchestrating 6 specialized AI agents that take a raw problem statement from first idea to a structured project pitch.",
      description: `HackMind AI Copilot is an agentic AI product/workflow platform built as a full-stack SaaS. It orchestrates six specialized AI agents (Idea Generation, Planner, Research, Judge, Pitch, and LLM Prompt Generation) through a sequential, context-aware workflow powered by Google Gemini with a LangGraph-inspired orchestration pattern. The platform also ships an integrated conversational AI chatbot that lets users interact with their evolving project and receive contextual assistance throughout the entire development lifecycle. Features include Next.js/TypeScript on Vercel, a FastAPI backend, Supabase PostgreSQL, real-time workflow updates over WebSockets, automated PDF/PPT generation, and Razorpay-based payment integration.`,
      highlights: [
        "6-Agent Sequential Workflow: Idea Generation → Planner → Research → Judge → Pitch → LLM Prompt Generation.",
        "Multi-Agent AI architecture with Gemini/LLM integration and LangGraph-inspired orchestration pattern.",
        "Agentic, context-aware AI workflows that carry project context across every stage.",
        "Idea generation from problem statements, domains, and requirements; research & competitive analysis.",
        "AI-based project judging with weakness detection, scoring, and actionable improvements.",
        "Automated pitch generation and optimized task-specific LLM prompts for implementation.",
        "HackMind AI Copilot: integrated conversational AI chatbot for contextual project assistance.",
        "PDF/PPT generation, real-time WebSocket workflow updates, and Razorpay payment integration."
      ],
      agents: [
        {
          name: "Idea Generation Agent",
          role: "Generates and refines hackathon ideas based on problem statements, domains, and requirements."
        },
        {
          name: "Planner Agent",
          role: "Converts an idea into a structured project plan — features, architecture, tech stack, roadmap, and team roles."
        },
        {
          name: "Research Agent",
          role: "Researches competitors, existing solutions, APIs, and technologies; surfaces risks and differentiation."
        },
        {
          name: "Judge Agent",
          role: "Evaluates the project like a hackathon judge, identifies weaknesses, scores the solution, and provides actionable improvements."
        },
        {
          name: "Pitch Agent",
          role: "Transforms the final validated project into structured pitch and presentation content."
        },
        {
          name: "LLM Prompt Generation Agent",
          role: "Generates optimized, task-specific prompts to implement or improve different parts of the project with any LLM."
        }
      ]
    },
    {
      id: "clinguard-ai",
      title: "ClinGuard AI — Healthcare AI Safety Evaluation Prototype",
      subtitle: "Deterministic Safety Benchmark & Rule-Based Safeguards",
      flagship: true,
      category: "AI Safety",
      liveDemo: "https://clinguard-ai.streamlit.app/",
      github: "https://github.com/shreyvirmani/clinguard-ai",
      tech: ["Python", "Streamlit", "Plotly", "pytest"],
      summary: "Deterministic, fixture-based educational prototype using a 29-case fictional benchmark, a rule-based evaluator, and a five-safeguard regex safety layer whose output is re-evaluated.",
      description: `ClinGuard AI is an educational prototype for healthcare AI safety evaluation. It uses a 29-case fictional benchmark with a rule-based evaluator and a five-safeguard regex safety layer. Does not call or evaluate a live model and is not clinically validated. On demo fixtures, passing cases increased from 10/29 to 21/29 with one benign-case regression. Includes a Streamlit dashboard, audit exports, and a 109-test pytest suite.`,
      highlights: [
        "29-case fictional benchmark with deterministic rule-based evaluation.",
        "Five-safeguard regex safety layer with re-evaluation of outputs.",
        "Passing cases improved from 10/29 to 21/29 on fixtures (one benign-case regression).",
        "No live model calls; not clinically validated — educational prototype only.",
        "Streamlit dashboard, audit exports, and 109-test pytest suite."
      ]
    },
    {
      id: "rag-pdf-assistant",
      title: "RAG PDF Assistant",
      subtitle: "Document Intelligence & Semantic Q&A System",
      flagship: true,
      category: "RAG & NLP",
      liveDemo: "https://pdf-app-rag.streamlit.app/",
      github: "https://github.com/shreyvirmani/PDF-QA-RAG",
      tech: ["Python", "LangChain", "FAISS", "Hugging Face Embeddings", "Google Gemini API", "Streamlit"],
      summary: "End-to-end Retrieval-Augmented Generation application enabling natural language interrogation of PDF documents with grounded source citations.",
      description: `Constructed a RAG pipeline encompassing document parsing, recursive text chunking, dense vector embeddings via Hugging Face, similarity search in FAISS, and context-injected prompt synthesis with Google Gemini, with retrieved source passages displayed alongside answers so responses stay grounded in the source document.`,
      highlights: [
        "Ingests and parses complex PDF documents with recursive character text chunking.",
        "Dense vector representations generated with Hugging Face Embeddings and indexed in FAISS.",
        "Semantic similarity retrieval and context injection into Google Gemini prompts.",
        "Deployed with an intuitive interactive UI using Streamlit Cloud."
      ]
    },
    {
      id: "ai-resume-analyzer",
      title: "AI Resume Analyzer",
      subtitle: "Intelligent ATS Resume & Career Assessment Engine",
      flagship: false,
      category: "Generative AI",
      liveDemo: "https://artificial-intelligence-resume-analyzer.streamlit.app/",
      github: "https://github.com/shreyvirmani/AI-Resume-Analyzer",
      tech: ["Python", "Google Gemini", "NLP", "Prompt Engineering", "Streamlit", "ReportLab"],
      summary: "AI system designed to extract unstructured resume information, evaluate ATS compatibility, generate targeted interview questions, and provide career-oriented improvement feedback.",
      description: `Built an intelligent career copilot that parses resumes, identifies skill gaps, computes ATS compatibility scores, generates tailored technical interview questions based on candidate profile, and exports downloadable PDF diagnostic reports.`,
      highlights: [
        "Unstructured text extraction and NLP-driven skill identification.",
        "Automated ATS score evaluation with actionable improvement feedback.",
        "Role-tailored interview question generator based on candidate profile.",
        "Automated PDF feedback report generation using ReportLab."
      ]
    },
    {
      id: "sih-team-matcher",
      title: "SIH Team Matcher",
      subtitle: "Intelligent Skill-Based Hackathon Teammate Matching Platform",
      flagship: false,
      category: "Full-Stack AI",
      liveDemo: "https://sih-team-matcher.vercel.app/",
      githubUnavailable: "No public repository — source is private.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "RLS"],
      summary: "Smart India Hackathon intelligent team-building platform that matches students based on complementary skill matrices and problem statements.",
      description: `Designed and architected a full-stack platform to solve student team formation challenges for Smart India Hackathon. Uses skill-based matching logic, compatibility scoring, and identification of missing technical roles. Connected to real-world outreach as Vice President of ISTE at MSIT.`,
      highlights: [
        "Recommendation & compatibility scoring between candidate skills and problem requirements.",
        "Role discovery, team requests, automated notifications, and gap identification.",
        "Secure database architecture using Supabase PostgreSQL with Row Level Security (RLS).",
        "Backed by leadership experience coordinating student candidate screening and team formation at MSIT."
      ]
    },
    {
      id: "spam-detection",
      title: "Spam Detection & Classification",
      subtitle: "Supervised Machine Learning & NLP Pipeline",
      flagship: false,
      category: "AI/ML Systems",
      liveDemo: "https://spam-detection-appp.streamlit.app/",
      github: "https://github.com/shreyvirmani/Spam-Detection",
      tech: ["Python", "scikit-learn", "NLTK", "Naive Bayes", "Streamlit"],
      summary: "NLP and machine learning pipeline for text classification and spam filtering using TF-IDF vectorization and a Naive Bayes classifier.",
      description: `Demonstrates foundational AI/ML and NLP workflow including text normalization, tokenization, TF-IDF vectorization, and a Naive Bayes classifier trained with scikit-learn. The project notebook reports about 99.69% test accuracy, and the trained model and vectorizer are serialized for reuse by the Streamlit demo app.`,
      highlights: [
        "End-to-end data preprocessing, tokenization, and TF-IDF feature extraction.",
        "Naive Bayes classifier trained with scikit-learn; notebook reports about 99.69% test accuracy.",
        "Serialized model assets (spam_model.pkl, tfidf_vectorizer.pkl) with a deployed Streamlit demo."
      ]
    }
  ],

  skillsMatrix: [
    {
      category: "Machine Learning & NLP",
      description: "Core AI/ML modeling, feature engineering, and text processing",
      skills: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "Machine Learning", "Deep Learning fundamentals", "NLP", "Text Classification", "Data Preprocessing", "Feature Extraction", "Model Evaluation", "NumPy"]
    },
    {
      category: "Generative AI & LLMs",
      description: "Multi-agent workflows, prompt design, and model orchestration",
      skills: ["Google Gemini", "LLMs", "Prompt Engineering", "LangChain", "LangGraph", "AI Agents", "Multi-Agent Systems", "Structured LLM Workflows", "AI Orchestration"]
    },
    {
      category: "RAG & NLP",
      description: "Semantic search, vector indexing, and information extraction",
      skills: ["Retrieval-Augmented Generation (RAG)", "Hugging Face Embeddings", "FAISS", "Vector Search", "Semantic Search", "Document Processing", "Text Chunking", "Information Extraction"]
    },
    {
      category: "AI Backend & Engineering",
      description: "Scalable APIs, asynchronous tasks, and database integration",
      skills: ["FastAPI", "REST APIs", "WebSockets", "Async AI Workflows", "API Integration", "AI Backend Architecture", "Pydantic"]
    },
    {
      category: "Full-Stack Development",
      description: "Modern web applications and reactive user interfaces",
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Databases & Storage",
      description: "Relational, document, and high-dimensional vector stores",
      skills: ["Supabase", "PostgreSQL", "MongoDB", "MySQL", "FAISS Vector DB"]
    },
    {
      category: "Product & Deployment",
      description: "SaaS monetization, cloud hosting, and developer tooling",
      skills: ["Git & GitHub", "Vercel", "Railway", "Streamlit Cloud", "Razorpay Payments", "ReportLab PDF Engine", "VS Code", "Google Colab", "Docker"]
    }
  ],

  experience: [
    {
      title: "Vice President",
      organization: "ISTE MSIT (Indian Society for Technical Education)",
      location: "New Delhi, India",
      period: "Present",
      type: "Leadership & Community",
      points: [
        "Lead technical initiatives, student coordination, and hackathon preparation across the college community.",
        "Managed Smart India Hackathon (SIH) team formation, candidate screening, technical interviews, and platform outreach.",
        "Mentored student developers on AI/ML project ideation, architectural design, and presentation pitching."
      ]
    },
    {
      title: "Influencer Marketing Intern",
      organization: "MAD Influence",
      location: "Noida, India",
      period: "Jun 2025 – Aug 2025",
      type: "Industry Experience",
      points: [
        "Executed Instagram influencer marketing campaigns from strategic planning to post-campaign performance analytics.",
        "Developed and maintained a 500+ influencer database and managed creator partnerships.",
        "Analyzed campaign metrics to optimize engagement rates and project ROI."
      ]
    },
    {
      title: "Influencer Marketing Intern",
      organization: "BuzzOne",
      location: "Delhi, India",
      period: "Apr 2024 – Jul 2024",
      type: "Industry Experience",
      points: [
        "Managed end-to-end influencer campaigns with 200+ creators from talent sourcing to campaign execution.",
        "Coordinated campaign delivery schedules and analyzed performance data to drive higher audience engagement."
      ]
    }
  ],

  education: {
    institution: "Maharaja Surajmal Institute of Technology (MSIT)",
    location: "New Delhi, India",
    degree: "Bachelor of Technology (B.Tech) in Electronics & Communication Engineering",
    cgpa: "8.2/10",
    graduationYear: "2028",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Machine Learning Fundamentals", "Database Management Systems", "Signals & Systems"]
  }
};