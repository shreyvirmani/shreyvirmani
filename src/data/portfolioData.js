export const portfolioData = {
  personal: {
    name: "Shrey Virmani",
    title: "AI/ML Engineer | AI Applications Developer",
    tagline: "Building AI/ML systems, NLP pipelines, and practical AI applications.",
    positioning: "Software & AI Engineering student focused on building production-oriented applications across Generative AI, Machine Learning, backend systems, and modern web development. Experienced with Python, FastAPI, React/Next.js, LLMs, RAG pipelines, multi-agent systems, and ML workflows, with hands-on experience deploying full-stack AI products.",
    bio: "I am a Software & AI Engineering student focused on building production-oriented applications across Generative AI, Machine Learning, backend systems, and modern web development. My work spans the complete AI/ML lifecycle - data processing, feature engineering, model training, NLP, retrieval systems, and deploying AI/ML-powered products. Experienced with Python, FastAPI, React/Next.js, LLMs, RAG pipelines, multi-agent systems, and ML workflows, with hands-on experience deploying full-stack AI products.",
    location: "New Delhi, India",
    phone: "+91 9625465588",
    email: "shreyvirmani1905@gmail.com",
    github: "https://github.com/shreyvirmani",
    githubUsername: "shreyvirmani",
    linkedin: "https://www.linkedin.com/in/shrey-virmani",
    instagram: "https://www.instagram.com/shrey_virmani",
    resume: "/resume.pdf",
  },
  
  stats: [
    { label: "Core Focus", value: "AI/ML, NLP & AI Systems" },
    { label: "Additional Strength", value: "GenAI, RAG & Agents" },
    { label: "Current B.Tech CGPA", value: "8.2/10" },
    { label: "Leadership Role", value: "VP @ ISTE MSIT" },
  ],

  projects: [
    {
      id: "hackmind-ai",
      title: "HackMind AI Copilot - Multi-Agent AI Platform",
      subtitle: "Full-Stack Multi-Agent Generative AI Platform",
      flagship: true,
      category: "Agentic AI",
      liveDemo: "https://hackmind-ai-copilot.vercel.app/",
      github: "https://github.com/shreyvirmani/HackMind-AI",
      tech: ["Google Gemini", "Next.js", "React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "WebSockets", "REST APIs", "Agent Orchestration", "Python", "Razorpay", "Vercel", "Railway"],
      summary: "Multi-agent AI platform used by 30-50 users to transform hackathon problem statements into structured ideas, plans, research, judging insights, and pitch content.",
      description: `Built and deployed a multi-agent AI platform used by 30-50 users to transform hackathon problem statements into structured ideas, plans, research, judging insights, and pitch content. Engineered the full-stack system with 6 specialized AI agents (Idea Generation, Planner, Research, Judge, Pitch, and LLM Prompt Generation), REST APIs, WebSockets, authentication, usage limits, project history, PDF/PPT generation, and Gemini-based generation with fallback handling.`,
      highlights: [
        "Built and deployed a multi-agent AI platform used by 30-50 users to transform hackathon problem statements into structured ideas, plans, research, judging insights, and pitch content.",
        "Engineered the full-stack system with 6 specialized AI agents, REST APIs, WebSockets, authentication, usage limits, project history, PDF/PPT generation, and Gemini-based generation with fallback handling.",
        "6-Agent Sequential Workflow: Idea Generation → Planner → Research → Judge → Pitch → LLM Prompt Generation.",
        "Multi-Agent AI architecture with Gemini/LLM integration and LangGraph-inspired orchestration pattern.",
        "AI-based project judging with weakness detection, scoring, and actionable improvements.",
        "Integrated conversational AI chatbot for contextual project assistance and Razorpay payment integration."
      ],
      agents: [
        {
          name: "Idea Generation Agent",
          role: "Generates and refines hackathon ideas based on problem statements, domains, and requirements."
        },
        {
          name: "Planner Agent",
          role: "Converts an idea into a structured project plan - features, architecture, tech stack, roadmap, and team roles."
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
      id: "tracera",
      title: "Tracera - Website Risk Assessment Platform",
      subtitle: "Security Scanning & AI/ML-Based Risk Scoring",
      flagship: true,
      category: "AI/ML Systems",
      status: "In development",
      github: "https://github.com/shreyvirmani/Tracera",
      tech: ["Python", "scikit-learn", "FastAPI", "Next.js", "PostgreSQL"],
      summary: "Website analysis platform that detects security/configuration issues including insecure cookies, missing security headers, and HTTP/TLS misconfigurations, producing severity-based risk reports and remediation guidance.",
      description: `Built a website analysis platform that detects security/configuration issues including insecure cookies, missing security headers, and HTTP/TLS misconfigurations, producing severity-based risk reports and remediation guidance. Developed a deterministic scanning and feature-extraction pipeline with 15 registered security rules and a 17-feature ML schema, alongside an experimental Isolation Forest anomaly-detection workflow.`,
      highlights: [
        "Built a website analysis platform that detects security/configuration issues including insecure cookies, missing security headers, and HTTP/TLS misconfigurations, producing severity-based risk reports and remediation guidance.",
        "Developed a deterministic scanning and feature-extraction pipeline with 15 registered security rules and a 17-feature ML schema, alongside an experimental Isolation Forest anomaly-detection workflow.",
        "15 deterministic rule-based security checks covering headers, cookies, configuration disclosure, CORS, and performance.",
        "FastAPI backend with Next.js frontend, scan history, and remediation reporting.",
        "In development - no live demo deployed; source code public."
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
      tech: ["Python", "LangChain", "FAISS", "Google Gemini", "Hugging Face Embeddings", "Streamlit"],
      summary: "Retrieval-Augmented Generation pipeline that ingests, chunks, embeds, and indexes documents in FAISS for semantic retrieval before supplying relevant context to Gemini.",
      description: `Built a Retrieval-Augmented Generation pipeline that ingests, chunks, embeds, and indexes documents in FAISS for semantic retrieval before supplying relevant context to Gemini. Tested the end-to-end retrieval and question-answering workflow across 20-25 PDFs through a Streamlit interface for document upload and grounded Q&A.`,
      highlights: [
        "Built a Retrieval-Augmented Generation pipeline that ingests, chunks, embeds, and indexes documents in FAISS for semantic retrieval before supplying relevant context to Gemini.",
        "Tested the end-to-end retrieval and question-answering workflow across 20-25 PDFs through a Streamlit interface for document upload and grounded Q&A.",
        "Ingests and parses complex PDF documents with recursive character text chunking.",
        "Dense vector representations generated with Hugging Face Embeddings and indexed in FAISS.",
        "Semantic similarity retrieval and context injection into Google Gemini prompts with grounded source citations."
      ]
    },
    {
      id: "pdf2ml-dataprep",
      title: "PDF2ML DataPrep - PDF-to-ML Data Pipeline",
      subtitle: "PDF Table Extraction to AI/ML-Ready Datasets",
      flagship: true,
      category: "Data Engineering",
      liveDemo: "https://pdf2ml.streamlit.app/",
      github: "https://github.com/shreyvirmani/PDF2ML",
      tech: ["Python", "FastAPI", "Streamlit", "Camelot", "pandas", "Celery", "Redis", "Docker", "pytest"],
      summary: "Data-preparation platform that extracts tables/text from PDFs and converts them into cleaned, ML-ready CSV/XLSX datasets with automated cleaning and schema inference.",
      description: `Built a data-preparation platform that extracts tables/text from PDFs and converts them into cleaned, ML-ready CSV/XLSX datasets with automated cleaning and schema inference. Applied the pipeline to clean 4 datasets containing 200+ PDFs for SIF Sentinel, an SIH project developed for Oil India, using asynchronous FastAPI/Celery processing and Streamlit-based workflows.`,
      highlights: [
        "Built a data-preparation platform that extracts tables/text from PDFs and converts them into cleaned, ML-ready CSV/XLSX datasets with automated cleaning and schema inference.",
        "Applied the pipeline to clean 4 datasets containing 200+ PDFs for SIF Sentinel, an SIH project developed for Oil India, using asynchronous FastAPI/Celery processing and Streamlit-based workflows.",
        "Multi-engine PDF extraction using Camelot, Tabula, and pdfminer for structured tables and text.",
        "Configurable data cleaning and automated schema inference with pandas.",
        "FastAPI backend with Celery/Redis async job processing, S3-compatible storage, Docker, and pytest test suite."
      ]
    },
    {
      id: "sih-team-matcher",
      title: "SIH Team Matcher",
      subtitle: "Teammate-Discovery & Collaboration Platform",
      flagship: true,
      category: "Full-Stack AI & Web",
      liveDemo: "https://sih-team-matcher.vercel.app/",
      githubUnavailable: "Private repository - live demo available.",
      tech: ["Next.js", "React", "JavaScript", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS"],
      summary: "Teammate-discovery platform used by 100-120 logged-in users, allowing participants to find teammates based on stated requirements and send or receive collaboration requests.",
      description: `Built a teammate-discovery platform used by 100-120 logged-in users, allowing participants to find teammates based on their stated requirements and send or receive collaboration requests. Implemented a user-controlled request workflow where participants can accept or reject teammate requests, enabling flexible team formation instead of forced matching.`,
      highlights: [
        "Built a teammate-discovery platform used by 100-120 logged-in users, allowing participants to find teammates based on their stated requirements and send or receive collaboration requests.",
        "Implemented a user-controlled request workflow where participants can accept or reject teammate requests, enabling flexible team formation instead of forced matching.",
        "Skill-based matchmaking logic and compatibility scoring between candidate profiles and problem statement requirements.",
        "FastAPI backend with Supabase PostgreSQL, Row Level Security (RLS), and responsive Next.js/React frontend.",
        "Backed by leadership experience coordinating candidate screening and team formation at MSIT."
      ]
    },
    {
      id: "clinguard-ai",
      title: "ClinGuard AI - Healthcare AI Safety Evaluation Prototype",
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
        "No live model calls; not clinically validated - educational prototype only.",
        "Streamlit dashboard, audit exports, and 109-test pytest suite."
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
      category: "Languages",
      description: "Core programming languages for AI systems, backend, and web",
      skills: ["Python", "C++", "C", "JavaScript", "TypeScript"]
    },
    {
      category: "AI & Machine Learning",
      description: "Core AI/ML modeling, feature engineering, and evaluation",
      skills: ["scikit-learn", "PyTorch", "NLP", "Deep Learning", "Feature Engineering", "Anomaly Detection", "Model Evaluation", "pandas", "NumPy", "TensorFlow", "Text Classification"]
    },
    {
      category: "Generative AI",
      description: "Multi-agent workflows, prompt design, and model orchestration",
      skills: ["LLMs", "Google Gemini", "RAG", "LangChain", "AI Agents", "Prompt Engineering", "FAISS", "Hugging Face Embeddings", "Multi-Agent Systems", "LangGraph", "AI Orchestration"]
    },
    {
      category: "Frontend",
      description: "Modern web applications and reactive user interfaces",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Streamlit", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      description: "Scalable APIs, asynchronous task queues, and services",
      skills: ["FastAPI", "REST APIs", "WebSockets", "Celery", "SQLAlchemy", "Async AI Workflows", "API Integration", "Pydantic"]
    },
    {
      category: "Databases",
      description: "Relational, document, and high-dimensional vector stores",
      skills: ["PostgreSQL", "Supabase", "SQLAlchemy", "MongoDB", "MySQL", "FAISS Vector DB"]
    },
    {
      category: "Tools & Deployment",
      description: "Containerization, testing, CI/CD, and cloud hosting",
      skills: ["Git", "GitHub", "Docker", "pytest", "Vercel", "Railway", "Streamlit Cloud", "Camelot", "Razorpay Payments", "ReportLab PDF Engine", "VS Code", "Google Colab"]
    }
  ],

  experience: [
    {
      title: "Web Development and SEO Intern",
      organization: "WEBSETGRAM",
      location: "Remote",
      period: "15 Jun 2026 - 31 Jul 2026",
      type: "Industry Experience",
      points: [
        "Completed a 6-week remote internship focused on web development and SEO, contributing to practical website development and optimization tasks.",
        "Applied frontend/web development skills in a professional environment while working on website-related requirements and SEO-oriented development practices."
      ]
    },
    {
      title: "Influencer Marketing Intern",
      organization: "MAD Influence",
      location: "Noida, India",
      period: "13 Jun 2025 - 13 Aug 2025",
      type: "Industry Experience",
      points: [
        "Executed Instagram influencer campaigns end-to-end and built a 500+ influencer database, analyzing engagement and ROI metrics."
      ]
    },
    {
      title: "Influencer Marketing Intern",
      organization: "BuzzOne",
      location: "Delhi, India",
      period: "15 Apr 2024 - 31 Jul 2024",
      type: "Industry Experience",
      points: [
        "Managed Instagram campaigns involving 200+ creators, coordinating sourcing, execution, deliverables, and performance tracking."
      ]
    },
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
    }
  ],

  education: {
    institution: "Maharaja Surajmal Institute of Technology",
    location: "New Delhi, India",
    degree: "B.Tech, Electronics & Communication Engineering",
    cgpa: "8.2/10",
    graduationYear: "2028",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Machine Learning Fundamentals", "Database Management Systems", "Signals & Systems"]
  }
};
