export const portfolioData = {
  personal: {
    name: "Shrey Virmani",
    title: "AI & Machine Learning Engineer | Product Builder",
    tagline: "Building intelligent systems from neural pipelines to production-grade products.",
    positioning: "AI/ML Engineer focused on Generative AI, NLP, RAG, LLM applications, and multi-agent systems, with experience turning AI prototypes into full-stack, deployable products.",
    bio: "I am an AI/ML-focused engineer and product builder with hands-on experience building Generative AI, NLP, RAG, and full-stack AI applications. My work spans the complete AI application lifecycle, including data processing, NLP, embeddings, retrieval systems, LLM integration, prompt engineering, multi-agent workflows, backend API development, database integration, deployment, and productization.",
    location: "New Delhi, India",
    phone: "+91 9625465588",
    email: "shreyvirmani1905@gmail.com",
    github: "https://github.com/shreyvirmani",
    githubUsername: "shreyvirmani",
    linkedin: "https://www.linkedin.com/in/shrey-virmani",
    instagram: "https://www.instagram.com/shrey_virmani",
  },
  
  stats: [
    { label: "Core AI Focus", value: "GenAI, RAG & Agents" },
    { label: "Production Platforms", value: "Full-Stack AI" },
    { label: "Current B.Tech CGPA", value: "8.197" },
    { label: "Leadership Role", value: "VP @ ISTE MSIT" },
  ],

  projects: [
    {
      id: "hackmind-ai",
      title: "HACKMIND AI",
      subtitle: "Full-Stack Multi-Agent Generative AI Platform",
      flagship: true,
      category: "Agentic AI",
      liveDemo: "https://hackmind-ai-copilot.vercel.app/",
      github: "https://github.com/shreyvirmani",
      tech: ["Google Gemini", "LLM Integration", "LangGraph", "Agent Orchestration", "FastAPI", "WebSockets", "Next.js", "TypeScript", "Supabase/PostgreSQL", "Python", "Razorpay", "Vercel", "Railway"],
      summary: "A full-stack Multi-Agent Generative AI platform for hackathon ideation, research, evaluation, prompt engineering, and project development — orchestrating 6 specialized AI agents that take a raw problem statement from first idea to investor-ready pitch.",
      description: `HACKMIND AI is an agentic AI product/workflow platform built as a full-stack SaaS. It orchestrates six specialized AI agents (Idea Generator, Planner, Research, Judge, Pitch, and LLM Prompt Generation) through a sequential, context-aware workflow powered by Google Gemini and LangGraph concepts. The platform also ships HackMind AI Copilot, an integrated conversational AI chatbot that lets users interact with their evolving project and receive contextual assistance throughout the entire development lifecycle. Production features include Next.js/TypeScript on Vercel, FastAPI on Railway, Supabase PostgreSQL, real-time workflow updates over WebSockets, automated PDF/PPT generation, and Razorpay-based SaaS monetization.`,
      highlights: [
        "6-Agent Sequential Workflow: Idea Generator -> Planner -> Research -> Judge -> Pitch -> LLM Prompt Generation.",
        "Multi-Agent AI architecture with Gemini/LLM integration and LangGraph-style orchestration.",
        "Agentic, context-aware AI workflows that carry project context across every stage.",
        "Idea generation from problem statements, domains, and requirements; research & competitive analysis.",
        "AI-based project judging with weakness detection, scoring, and actionable improvements.",
        "Automated pitch generation and optimized task-specific LLM prompts for implementation.",
        "HackMind AI Copilot: integrated conversational AI chatbot for contextual project assistance.",
        "PDF/PPT generation, real-time WebSocket workflow updates, and Razorpay SaaS monetization."
      ],
      agents: [
        {
          name: "Idea Generator Agent",
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
      id: "rag-pdf-assistant",
      title: "RAG PDF Assistant",
      subtitle: "Document Intelligence & Semantic Q&A System",
      flagship: false,
      category: "RAG & NLP",
      liveDemo: "https://pdf-app-rag.streamlit.app/",
      github: "https://github.com/shreyvirmani",
      tech: ["Python", "LangChain", "FAISS", "Hugging Face Embeddings", "Google Gemini API", "Streamlit"],
      summary: "End-to-end Retrieval-Augmented Generation application enabling natural language interrogation of PDF documents with grounded source citations.",
      description: `Constructed a comprehensive RAG pipeline encompassing document parsing, recursive text chunking, dense vector embeddings via Hugging Face, high-speed similarity search in FAISS, and context-injected prompt synthesis with Google Gemini for zero-hallucination document intelligence.`,
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
      github: "https://github.com/shreyvirmani",
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
      github: "https://github.com/shreyvirmani",
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
      category: "ML Systems",
      liveDemo: "https://spam-detection-appp.streamlit.app/",
      github: "https://github.com/shreyvirmani",
      tech: ["Python", "scikit-learn", "NLP", "Text Preprocessing", "Supervised Learning"],
      summary: "Traditional NLP and machine learning pipeline for high-precision text classification and spam filtration.",
      description: `Demonstrates foundational ML and NLP expertise including text normalization, tokenization, TF-IDF vectorization, feature engineering, classification model training with scikit-learn, and rigorous evaluation using confusion matrices, precision, recall, and ROC-AUC.`,
      highlights: [
        "End-to-end data preprocessing, tokenization, and TF-IDF feature extraction.",
        "Trained and benchmarked supervised classifiers using scikit-learn.",
        "Comprehensive model evaluation with cross-validation, precision/recall, and F1 scoring."
      ]
    }
  ],

  skillsMatrix: [
    {
      category: "Generative AI & LLMs",
      description: "Multi-agent workflows, prompt design, and model orchestration",
      skills: ["Google Gemini", "LLMs", "Prompt Engineering", "LangChain", "LangGraph", "AI Agents", "Multi-Agent Systems", "Structured LLM Workflows", "AI Orchestration"]
    },
    {
      category: "RAG & NLP",
      description: "Semantic search, vector indexing, and information extraction",
      skills: ["Retrieval-Augmented Generation (RAG)", "Hugging Face Embeddings", "FAISS", "Vector Search", "Semantic Search", "Document Processing", "Text Chunking", "Information Extraction", "NLP"]
    },
    {
      category: "AI / Machine Learning",
      description: "Data modeling, deep learning fundamentals, and statistical ML",
      skills: ["Python", "PyTorch", "scikit-learn", "Machine Learning", "Deep Learning fundamentals", "Text Classification", "Data Preprocessing", "Feature Extraction", "Model Evaluation"]
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
      skills: ["Git & GitHub", "Vercel", "Railway", "Streamlit Cloud", "Razorpay Payments", "ReportLab PDF Engine", "VS Code", "Google Colab"]
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
    cgpa: "8.197 (till 4th semester)",
    graduationYear: "2028",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Machine Learning Fundamentals", "Database Management Systems", "Signals & Systems"]
  }
};

