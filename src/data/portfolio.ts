import { Project, Certification, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Sentiment Analysis API",
    description: "SaaS-style backend that analyzes e-commerce product reviews using sentiment analysis; built with Node.js, TypeScript, and MySQL.",
    image: "https://www.carierista.com/storage/company-posts/23/e86715607d99e6fb765e4cd26bb859ce.jpg",
    techStack: ["Node.js", "TypeScript", "MySQL"],
    demoUrl: "",
    githubUrl: "https://github.com/sujnankumar/ecommerce-sentiment-analysis"
  },
  {
    id: 2,
    title: "Scraping and Answer Agent",
    description: "Dual-agent research and answering system that crawls the web (Tavily) and drafts sourced responses using Gemini, orchestrated with LangGraph.",
    image: "https://www.techtodayinfo.com/wp-content/uploads/2020/01/Web-Scraping.jpg",
    techStack: ["Python", "LangChain", "LangGraph", "Tavily", "Google Gemini"],
    demoUrl: "",
    githubUrl: "https://github.com/sujnankumar/scraping-and-answer-agent"
  },
  {
    id: 3,
    title: "NL2SQL-AI-Assistant",
    description: "Natural language to SQL assistant.",
    image: "https://brokenctrl.com/wp-content/uploads/NLSQL-AI.jpg",
    techStack: ["Python"],
    demoUrl: "",
    githubUrl: "https://github.com/sujnankumar/NL2SQL-AI-Assistant"
  },
  {
    id: 4,
    title: "AI Surveillance App",
    description: "AI Surveillance System.",
    image: "https://www.securitysales.com/wp-content/uploads/2019/05/May-AI-Security-Robotics.jpg",
    techStack: ["Python"],
    demoUrl: "",
    githubUrl: "https://github.com/sujnankumar/ai_surveillance_app"
  },
  {
    id: 5,
    title: "Restobot - Restaurant Chatbot",
    description: "AI-powered restaurant assistant with menu exploration, personalized dish recommendations, cart, and dashboard. Flask backend with React/Tailwind frontend.",
    image: "https://private-user-images.githubusercontent.com/63709163/407488102-b4371afb-2b9b-4cbf-892b-91016a24e3b1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYyNzU0ODksIm5iZiI6MTc1NjI3NTE4OSwicGF0aCI6Ii82MzcwOTE2My80MDc0ODgxMDItYjQzNzFhZmItMmI5Yi00Y2JmLTg5MmItOTEwMTZhMjRlM2IxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODI3VDA2MTMwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc1Nzg5MjRlZDYxZGJhYmIyYTI0N2Y3YWQyNjIzZTFhOWYxNTJkMjdiNDBjOGI4YzhiZmRmYjI4ZmY4YTYyMGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.rbcm25lLheX8X7WkGQUvX6Qot0PpKkQY1ExivrCrIoM",
    techStack: ["Flask", "Flask-SQLAlchemy", "React", "Tailwind CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/sujnankumar/restobot-restaurant-chatbot"
  },
  {
    id: 6,
    title: "OEM Webscrape Server",
    description: "Web scraping server for OEM data aggregation.",
    image: "https://vico.com.hk/be/uploads/blogs/what%20is%20OEM_bBxHHMWsL.jpg",
    techStack: ["Python"],
    demoUrl: "",
    githubUrl: "https://github.com/sujnankumar/oem_webscrape_server"
  },
  {
    id: 7,
    title: "StockOpt - Portfolio Optimization",
    description: "Flask web app for dynamic portfolio generation and optimization (Markowitz, Black-Litterman) with interactive stock cards and visualizations.",
    image: "https://raw.githubusercontent.com/sujnankumar/StockOpt/main/screenshots/home.png",
    techStack: ["Python", "Flask"],
    demoUrl: "",
    githubUrl: "https://github.com/sujnankumar/StockOpt"
  },
  {
    id: 8,
    title: "Job Portal Backend",
    description: "Backend services for a job portal.",
    image: "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
    techStack: ["Python"],
    demoUrl: "https://job-portal-frontend-bice-gamma.vercel.app/",
    githubUrl: "https://github.com/sujnankumar/job-portal-backend"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2024",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://aws.amazon.com/certification/"
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    organization: "Google Cloud",
    date: "2023",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://cloud.google.com/certification"
  },
  {
    id: 3,
    title: "React Professional Certificate",
    organization: "Meta",
    date: "2023",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://developers.facebook.com/certification/"
  },
  {
    id: 4,
    title: "Kubernetes Administrator",
    organization: "Cloud Native Computing Foundation",
    date: "2024",
    image: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.cncf.io/certification/"
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description: "Led development of enterprise-level web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers."
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: "Built scalable web applications from concept to deployment. Implemented CI/CD pipelines and improved system performance by 40%."
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2019 - 2020",
    description: "Developed responsive websites and web applications for clients. Specialized in React.js and modern CSS frameworks."
  },
  {
    id: 4,
    title: "Computer Science Degree",
    company: "University of Technology",
    period: "2015 - 2019",
    description: "Bachelor of Science in Computer Science with focus on software engineering and web development."
  }
];

export const skills: Skill[] = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Next.js", icon: "⏭️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Flask", icon: "🧪" },
  { name: "FastAPI", icon: "⚡" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Supabase", icon: "🧰" },
  { name: "AWS", icon: "☁️" },
  { name: "Google Cloud", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Generative AI", icon: "🤖" },
  { name: "Agentic AI", icon: "🧠" },
];