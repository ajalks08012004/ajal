export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullCaseStudy?: string;
  tags: string[];
  image: string;
  category: string;
  year: string;
  impact: string;
  features: string[];
  link?: string;
  github?: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: string;
  year: string;
  tech: string[];
  link: string;
}

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "cyberguardian",
    number: "01",
    title: "CYBERGUARDIAN",
    subtitle: "AI-Powered Cyber-Awareness & Sentiment Intelligence",
    description: "An AI-powered cyber-awareness and online safety application focused on detecting and mitigating harmful online communication, cyberbullying, and toxic interactions using natural language processing and real-time sentiment scoring.",
    fullCaseStudy: "CyberGuardian was designed to address the growing epidemic of digital toxicity and cyber harassment. By orchestrating transformer-based sentiment classifiers and toxic speech detection models via a lightweight FastAPI backend and React dashboard, it provides real-time threat telemetry, proactive intervention prompts, and safety reporting.",
    tags: ["Python", "NLP / Transformers", "React", "FastAPI", "TailwindCSS"],
    image: "/src/assets/images/cyberguardian_project_1791946401581.jpg",
    category: "AI & Cybersecurity",
    year: "2024",
    impact: "Achieved 98.7% classification precision with sub-250ms neural inference on threat streams.",
    features: [
      "Real-time semantic toxicity classification across chat & social inputs",
      "Interactive threat radar and sentiment trajectory telemetry",
      "Automated safety intervention guides for at-risk users",
      "Role-based administrative moderation console"
    ],
    github: "https://github.com/ajalks08012004",
    link: "https://github.com/ajalks08012004"
  },
  {
    id: "walkme-dap",
    number: "02",
    title: "WALKME DIGITAL ADOPTION",
    subtitle: "Enterprise In-App Guidance & Workflow Usability",
    description: "Professional enterprise digital adoption architecture at DigitizeNow. Engineered comprehensive WalkMe implementations, interactive Smart Walk-Thrus, task validation launchers, and analytics funnels that eliminate user friction.",
    fullCaseStudy: "Enterprise software adoption often suffers from steep learning curves and high support ticket volumes. As a WalkMe Builder Associate Engineer, I engineered in-depth guidance architectures across enterprise CRM and ERP portals, using custom DOM-level selectors, conditional branch logic, and automated action bots.",
    tags: ["WalkMe DAP", "Enterprise Architecture", "JavaScript", "DOM Injection", "CSS"],
    image: "/src/assets/images/walkme_adoption_project_1791946402345.jpg",
    category: "Digital Adoption",
    year: "2024–Present",
    impact: "Certified WalkMe Builder Level I & Level II; drove an onboarding completion rate of 91% for key workflows.",
    features: [
      "Dynamic in-app Smart Walk-Thrus with conditional branching",
      "Targeted validation launchers & real-time input sanity checkers",
      "Funnel analytics to detect drop-off friction points",
      "Cross-platform responsive guidance for enterprise web applications"
    ],
    link: "https://www.digitizenow.com"
  },
  {
    id: "discovery-coins",
    number: "03",
    title: "DISCOVERY COINS",
    subtitle: "Gamification & Milestone Progression Framework",
    description: "A gamification concept involving learning progress, feature discovery, missions, rewards, and digital adoption. Incentivizes user mastery by rewarding users with discovery coins upon completing advanced system tasks.",
    fullCaseStudy: "Rather than forcing users to read manuals, Discovery Coins applies behavioral gamification to enterprise software. Users embark on bite-sized missions, discover high-value overlooked features, and earn unlockable badges and coins that represent tangible digital fluency.",
    tags: ["Gamification", "WalkMe ActionBot", "UI/UX Architecture", "React", "TypeScript"],
    image: "/src/assets/images/discovery_coins_project_1791946402965.jpg",
    category: "Product Gamification",
    year: "2024",
    impact: "Boosted exploratory feature adoption velocity by 45% across pilot user cohorts.",
    features: [
      "Tiered discovery quest system with interactive progress meters",
      "Dynamic reward badge issuance upon milestone verification",
      "Customizable mission parameters for enterprise admins",
      "Seamless integration with in-app DAP notification layers"
    ],
    github: "https://github.com/ajalks08012004"
  },
  {
    id: "ai-nlp",
    number: "04",
    title: "AI AND NLP ENGINES",
    subtitle: "Semantic Intelligence & Document Processing",
    description: "Intelligent natural language processing and machine learning projects, including semantic resume matching, contextual information retrieval, and sentiment parsing engines for high-volume text data.",
    fullCaseStudy: "Explored state-of-the-art NLP models to build semantic parsing pipelines. The engine breaks down unstructured text into structured entity graphs, computes cosine similarity over vector embeddings, and outputs explainable match rankings.",
    tags: ["Python", "PyTorch", "Hugging Face", "Vector Embeddings", "FastAPI"],
    image: "/src/assets/images/cyberguardian_project_1791946401581.jpg",
    category: "Machine Learning",
    year: "2023–2024",
    impact: "Reduced candidate profile screening time by 70% with semantic match precision.",
    features: [
      "Vector embeddings and similarity search using cosine distance",
      "Automated skill taxonomy mapping and gap analysis",
      "RESTful inference APIs with batched request handling",
      "Intuitive web interface for comparing candidate-to-role fit"
    ],
    github: "https://github.com/ajalks08012004"
  },
  {
    id: "web-dev",
    number: "05",
    title: "WEB DEVELOPMENT",
    subtitle: "Modern Frontend Engineering & Enterprise Platforms",
    description: "Relevant frontend and software engineering projects focusing on scalable architectures, design systems, modern responsive interfaces, and interactive client-side web experiences.",
    fullCaseStudy: "Developing robust web platforms requires a balance between architectural rigor, speed, and refined human interaction. Built modern React and TypeScript applications with strict state management, component reusability, and accessible design principles.",
    tags: ["React 19", "TypeScript", "TailwindCSS", "Node.js", "Express"],
    image: "/src/assets/images/walkme_adoption_project_1791946402345.jpg",
    category: "Full-Stack Development",
    year: "2023–2026",
    impact: "Delivered sub-second load times, 100% Lighthouse accessibility scores, and responsive layouts across all devices.",
    features: [
      "Custom design systems with reusable atomic components",
      "High-performance client-side rendering with Vite and TypeScript",
      "Secure API proxy and authentication workflows",
      "Cross-browser and mobile-first responsive execution"
    ],
    github: "https://github.com/ajalks08012004"
  }
];

export const ARCHIVE_PROJECTS: ArchiveItem[] = [
  {
    id: "arch-1",
    title: "WalkMe Enterprise Guidance Rollout",
    category: "Digital Adoption",
    year: "2024",
    tech: ["WalkMe", "JavaScript", "Enterprise DAP"],
    link: "https://www.digitizenow.com"
  },
  {
    id: "arch-2",
    title: "CyberGuardian AI Threat Detector",
    category: "Machine Learning",
    year: "2024",
    tech: ["Python", "FastAPI", "NLP", "React"],
    link: "https://github.com/ajalks08012004"
  },
  {
    id: "arch-3",
    title: "Discovery Coins Gamification Prototype",
    category: "Product Design",
    year: "2024",
    tech: ["React", "TypeScript", "DAP Actions"],
    link: "https://github.com/ajalks08012004"
  },
  {
    id: "arch-4",
    title: "Saintgits Academic Portal Module",
    category: "Web Engineering",
    year: "2023",
    tech: ["React", "PostgreSQL", "Node.js"],
    link: "https://github.com/ajalks08012004"
  },
  {
    id: "arch-5",
    title: "Semantic Text Extraction Pipeline",
    category: "Data Science",
    year: "2023",
    tech: ["Python", "NLTK", "Scikit-Learn"],
    link: "https://github.com/ajalks08012004"
  },
  {
    id: "arch-6",
    title: "Personal Editorial Motion System",
    category: "Creative Technology",
    year: "2026",
    tech: ["React", "GSAP", "TailwindCSS"],
    link: "https://github.com/ajalks08012004"
  }
];

export const ABOUT_ACCORDIONS: AccordionItem[] = [
  {
    id: "q1",
    question: "WHAT DO YOU DO AT DIGITIZENOW?",
    answer: "At DigitizeNow, I serve as a WalkMe Builder Associate Engineer. My day-to-day focus is on architecting and delivering high-impact Digital Adoption Platform (DAP) solutions for enterprise clients. I build interactive Smart Walk-Thrus, dynamic launchers, task validation rules, and automated ActionBots that guide users through complex enterprise software, significantly lowering drop-off rates and accelerating digital competency."
  },
  {
    id: "q2",
    question: "WHAT IS YOUR EXPERIENCE WITH WALKME?",
    answer: "I hold both WalkMe Builder Level I and WalkMe Builder Level II certifications. I have hands-on experience designing end-to-end user journeys, configuring jQuery/DOM-level selectors, handling single-page application route transitions, setting up segmentation rules based on user roles, and analyzing WalkMe Insights data to optimize user onboarding funnels."
  },
  {
    id: "q3",
    question: "WHAT TECHNOLOGIES DO YOU WORK WITH?",
    answer: "My core technical stack spans Digital Adoption Platforms (WalkMe DAP, Insights, ActionBot), Frontend Engineering (React, TypeScript, JavaScript ES6+, TailwindCSS, HTML5/CSS3), Backend Systems (Node.js, Express, Python, FastAPI), Machine Learning / NLP (Hugging Face, Scikit-Learn, PyTorch basics), and Database Systems (PostgreSQL, MongoDB, SQL)."
  },
  {
    id: "q4",
    question: "HOW DO YOU APPROACH A NEW PROJECT?",
    answer: "I start with curiosity and observation. Before writing a line of code, I dissect the user's friction points, business objectives, and architectural constraints. I map out user journeys, prototype interactions, validate technical feasibility, and then execute cleanly with modular, well-documented, and testable code."
  },
  {
    id: "q5",
    question: "WHAT ARE YOUR CAREER GOALS?",
    answer: "My goal is to continue growing as an exceptional Software Engineer who understands the human element of technology. I aim to build large-scale distributed systems and intelligent digital products that make complex enterprise workflows intuitive, efficient, and effortless for everyday users."
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: "2024 — PRESENT",
    role: "WalkMe Builder Associate Engineer",
    company: "DigitizeNow",
    location: "Kottayam, Kerala, India",
    description: "Developing enterprise digital adoption solutions and automated guidance systems. Spearheading WalkMe implementations across mission-critical business applications.",
    highlights: [
      "Engineered multi-step Smart Walk-Thrus and automated guidance flows",
      "Achieved WalkMe Builder Level I and Level II professional certifications",
      "Collaborated with cross-functional teams to resolve complex UI/UX friction in enterprise portals",
      "Monitored and iterated on user funnel analytics to boost adoption rates"
    ],
    badge: "Current Role"
  },
  {
    period: "2022 — 2026",
    role: "B.Tech in Computer Science & Engineering",
    company: "Saintgits College of Engineering",
    location: "Kottayam, Kerala, India",
    description: "Undergraduate degree focusing on Core Computer Science, Software Architecture, Data Structures & Algorithms, Machine Learning, and Web Technologies.",
    highlights: [
      "Cumulative Grade Point Average (CGPA): 8.0 / 10.0",
      "Led technical project teams in AI/NLP development and full-stack web platforms",
      "Active participant in technical symposiums, hackathons, and engineering workshops"
    ],
    badge: "Degree · 8.0 CGPA"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "DIGITAL ADOPTION & WALKME",
    description: "Certified DAP architecture, guidance automation, and user analytics.",
    skills: [
      "WalkMe Builder Level I",
      "WalkMe Builder Level II",
      "Smart Walk-Thrus",
      "ActionBot Automation",
      "DOM & jQuery Selectors",
      "Insights & Funnel Analytics",
      "User Segmentation Rules"
    ]
  },
  {
    title: "SOFTWARE ENGINEERING",
    description: "Foundational computer science, design patterns, and clean code principles.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "RESTful API Design",
      "System Architecture",
      "Git & GitHub Version Control",
      "Performance Optimization"
    ]
  },
  {
    title: "FRONTEND DEVELOPMENT",
    description: "Modern, responsive, and accessible interactive web engineering.",
    skills: [
      "React (v18 / v19)",
      "TypeScript",
      "JavaScript (ES6+)",
      "TailwindCSS",
      "GSAP Motion & Animations",
      "Responsive Layouts",
      "Semantic HTML & A11y"
    ]
  },
  {
    title: "BACKEND & DATABASES",
    description: "Robust server-side logic, routing, and data persistence.",
    skills: [
      "Node.js & Express",
      "Python & FastAPI",
      "PostgreSQL",
      "SQL Querying",
      "REST API Integration",
      "Authentication Patterns"
    ]
  },
  {
    title: "AI & MACHINE LEARNING",
    description: "Practical natural language processing and intelligent classifiers.",
    skills: [
      "NLP & Text Classification",
      "Sentiment Scoring",
      "Hugging Face Transformers",
      "Vector Embeddings",
      "Scikit-Learn",
      "PyTorch Fundamentals"
    ]
  }
];
