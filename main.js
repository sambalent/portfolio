import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Code, Zap, Award, Coffee } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  const funFacts = [
    "I'm a certified personal trainer (NASM) 🏋️",
    "I've built AI tools that turn PDFs into flashcards 🤖",
    "I optimized code to achieve 23 CPE — top performance in my class 🚀",
    "My favorite debugging fuel: iced coffee ☕",
    "I love exploring nature and experimenting with tech design 🌲"
  ];

  const projects = [
    {
      title: "StudyBean",
      stack: "FastAPI, Node.js, Express.js, Supabase, TypeScript",
      description: "Full-stack app that converts class notes into flashcards and practice tests using LLMs",
      github: "#",
      highlight: "Built with security in mind — penetration tested with Kali Linux"
    },
    {
      title: "Position Sizing Engine",
      stack: "Python, Kraken API, Pandas, REST API",
      description: "Professional-grade trading automation for EUR/USD-pegged crypto assets",
      github: "#",
      highlight: "Reduced volatility by 23% through simulation-driven risk calibration"
    },
    {
      title: "Performance Lab Optimizer",
      stack: "C++, OpenMP, AVX, Systems Programming",
      description: "Image filtering pipeline optimized using parallelism and cache-aware patterns",
      github: "#",
      highlight: "Achieved 23 CPE — reduced from baseline 3000+ cycles per element"
    },
    {
      title: "CU Boulder Better Food",
      stack: "Python, JavaScript, Node.js, Nutrislice API",
      description: "Web app for students to rank and review campus dining halls with live menu data",
      github: "#",
      highlight: "Dynamically displays nutritional data using REST API integration"
    }
  ];

  const experiences = [
    {
      role: "AI Intern",
      company: "Morrison Street Advisors",
      period: "Aug 2025 - Present",
      icon: "🤖",
      achievements: [
        "Built responsive website with analytics driving 30% increase in engagement",
        "Researched AI use cases for B2B/B2C projects with prototype development",
        "Collaborated cross-functionally using Jira and Slack for weekly sprints"
      ]
    },
    {
      role: "Risk Management Analyst",
      company: "CU Quant",
      period: "Aug 2025 - Present",
      icon: "📊",
      achievements: [
        "Lead technical development for Risk Management division",
        "Built Python position-sizing engine for crypto portfolio optimization",
        "Reduced portfolio volatility by 23% through risk calibration"
      ]
    },
    {
      role: "Course Assistant",
      company: "CU Boulder",
      period: "Aug 2025 - Present",
      icon: "👨‍🏫",
      achievements: [
        "Supported 120+ students in CSCI 1200 Python fundamentals",
        "Improved comprehension rates by 20% for non-technical students",
        "Held weekly office hours fostering collaborative learning"
      ]
    }
  ];

  const skills = {
    "Languages": ["Python", "C++/C", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    "Frameworks": ["React.js", "Node.js", "Express.js", "FastAPI", "Next.js"],
    "Tools": ["Git", "Docker", "AWS", "Supabase", "Postgres", "Kali Linux", "Jira"]
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateFunFact = () => {
    setShowFunFact(true);
    setCurrentFact(Math.floor(Math.random() * funFacts.length));
    setTimeout(() => setShowFunFact(false), 4000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SB
          </div>
          <div className="flex gap-6 text-sm">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-500/10"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        <div className="text-center z-10 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Sam
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-8">
            I design, build, and optimize intelligent systems.
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Computer Science student at CU Boulder, passionate about AI, systems optimization, and creating seamless digital experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
            >
              View My Projects
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-slate-300 leading-relaxed">
              I'm a Computer Science student who loves solving complex problems, creating seamless digital experiences, and building systems that bridge logic and creativity. Currently pursuing dual degrees in Computer Science and Economics at CU Boulder, I'm passionate about leveraging technology to make meaningful impact.
            </p>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
                <Zap size={24} />
                Beyond the Code
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Outside of coding, I'm a certified personal trainer (NASM) who enjoys staying active, exploring design, and learning about AI's impact on creativity. I believe the best solutions come from diverse experiences — whether that's optimizing a C++ algorithm or coaching someone to their fitness goals.
              </p>
              <button
                onClick={generateFunFact}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <Coffee size={18} />
                Generate Fun Fact
              </button>
              {showFunFact && (
                <div className="mt-4 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30 animate-pulse">
                  <p className="text-slate-200">{funFacts[currentFact]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 transform hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                        <p className="text-slate-300">{exp.company}</p>
                      </div>
                      <span className="text-slate-400 text-sm">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-300 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 transform hover:scale-[1.03]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <Code className="text-cyan-400" size={24} />
                </div>
                <p className="text-sm text-cyan-400 mb-3 font-mono">{project.stack}</p>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
                  <p className="text-sm text-slate-400">
                    <span className="text-cyan-400 font-semibold">✦</span> {project.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border border-slate-600 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/30 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <Award size={24} className="text-yellow-400" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Leadership", "Collaboration", "Resilience", "Critical Thinking", "Growth Mindset", "Curiosity"].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-slate-800/70 rounded-lg border border-purple-500/30 text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
            Let's Connect
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 border border-slate-700">
            <p className="text-xl text-slate-300 text-center mb-8">
              Building systems that think, and stories that stick.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://github.com/sammy12bammy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-700 rounded-full hover:bg-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/samuelbalent"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-700 rounded-full hover:bg-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:sambalent1@icloud.com"
                className="p-4 bg-slate-700 rounded-full hover:bg-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </div>
            <div className="text-center">
              <a
                href="mailto:sambalent1@icloud.com"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2025 Samuel Balent. Designed and built with React + Tailwind CSS.</p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
}
