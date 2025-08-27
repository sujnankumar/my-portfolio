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
    image: "https://blog.slantco.com/wp-content/uploads/2023/08/ai-in-restaurants-1024x682.jpeg",
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
    image: "/job-portal.png",
    techStack: ["Python"],
    demoUrl: "https://job-portal-frontend-bice-gamma.vercel.app/",
    githubUrl: "https://github.com/sujnankumar/job-portal-backend"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Google AI Essentials",
    organization: "Google",
    date: "2025",
    image: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/google-ai-essentials"
  },
  {
    id: 2,
    title: "Certificate of Participation in Treasure Hunt: January Series",
    organization: "Unstop",
    date: "2025",
    image: "https://images.pexels.com/photos/1181300/pexels-photo-1181300.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://unstop.com/certificates"
  },
  {
    id: 3,
    title: "Assets, Threats, and Vulnerabilities",
    organization: "Google",
    date: "2024",
    image: "https://images.pexels.com/photos/1181310/pexels-photo-1181310.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/assets-threats-and-vulnerabilities"
  },
  {
    id: 4,
    title: "Automate Cybersecurity Tasks with Python",
    organization: "Google",
    date: "2024",
    image: "https://images.pexels.com/photos/1181320/pexels-photo-1181320.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/automate-cybersecurity-tasks-with-python"
  },
  {
    id: 5,
    title: "Connect and Protect: Networks and Network Security",
    organization: "Google",
    date: "2024",
    image: "https://images.pexels.com/photos/1181330/pexels-photo-1181330.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/networks-and-network-security"
  },
  {
    id: 6,
    title: "Google Cybersecurity Certificate",
    organization: "Coursera",
    date: "2024",
    image: "https://images.pexels.com/photos/1181340/pexels-photo-1181340.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/professional-certificates/google-cybersecurity"
  },
  {
    id: 7,
    title: "Google Cybersecurity Specialization",
    organization: "Google",
    date: "2024",
    image: "https://images.pexels.com/photos/1181350/pexels-photo-1181350.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/specializations/google-cybersecurity"
  },
  {
    id: 8,
    title: "Put It to Work: Prepare for Cybersecurity Jobs",
    organization: "Google",
    date: "2024",
    image: "https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/prepare-for-cybersecurity-jobs"
  },
  {
    id: 9,
    title: "Sound the Alarm: Detection and Response",
    organization: "Google",
    date: "2024",
    image: "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/detection-and-response"
  },
  {
    id: 10,
    title: "Tools of the Trade: Linux and SQL",
    organization: "Google",
    date: "2024",
    image: "https://images.pexels.com/photos/1181380/pexels-photo-1181380.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/linux-and-sql"
  },
  {
    id: 11,
    title: "Play It Safe: Manage Security Risks",
    organization: "Google",
    date: "2024",
    image: "https://images.pexels.com/photos/1181390/pexels-photo-1181390.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/manage-security-risks"
  },
  {
    id: 12,
    title: "Foundations of Cybersecurity",
    organization: "Google",
    date: "2023",
    image: "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/foundations-of-cybersecurity"
  },
  {
    id: 13,
    title: "Programming for Everybody (Getting Started with Python)",
    organization: "University of Michigan",
    date: "2023",
    image: "https://images.pexels.com/photos/1181410/pexels-photo-1181410.jpeg?auto=compress&cs=tinysrgb&w=300",
    viewUrl: "https://www.coursera.org/learn/python"
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    title: "Computer Science & Engineering Degree",
    company: "Mangalore Institute of Technology and Engineering",
    period: "2022 - Present",
    description: "Pursuing a Bachelor of Engineering in Computer Science, specializing in software engineering, web development, and cybersecurity."
  },
  {
    id: 2,
    title: "Tech Lead",
    company: "Crypton Club, MITE",
    period: "2023 - Present",
    description: "Leading a student-run club focused on cybersecurity education. Organizing workshops, ethical hacking events, and Capture The Flag (CTF) competitions to enhance practical cybersecurity skills."
  },
  {
    id: 3,
    title: "Finalist, Smart India Hackathon",
    company: "Smart India Hackathon",
    period: "2024",
    description: "Developed an innovative OEM web scraper utilizing AI-powered crawlers. Reached the finalist stage in a highly competitive national hackathon, demonstrating strong problem-solving and technical skills."
  },
  {
    id: 4,
    title: "Winner, National and International CTF and Hackathons",
    company: "Various Hackathons/Competitions",
    period: "2022 - 2025",
    description: "Secured victories in multiple national and international Capture The Flag (CTF) competitions and hackathons, showcasing expertise in ethical hacking, cybersecurity, and problem-solving under pressure."
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