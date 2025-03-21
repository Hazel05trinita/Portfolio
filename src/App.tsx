import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, ChevronDown, Home, User, GraduationCap, Code, Briefcase, Phone } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolling(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'SQL', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'C', level: 70 },
    { name: 'Networking', level: 65 }
  ];

  const projects = [
    {
      title: 'Water Leakage Detector',
      description: 'IoT-based system for detecting water leaks using Arduino sensors.',
      tech: 'Arduino, Sensors'
    },
    {
      title: 'Automatic Pet Feeder',
      description: 'Arduino-powered smart pet feeder with scheduling capabilities.',
      tech: 'Arduino, Motors'
    },
    {
      title: 'Salary Management System',
      description: 'Java application for managing employee salaries and payroll.',
      tech: 'Java, MySQL, Swing'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather information with location-based forecasts.',
      tech: 'Python, Weather API'
    },
    {
      title: 'Simple Calculator',
      description: 'Basic calculator application with arithmetic operations.',
      tech: 'Java'
    },
    {
      title: 'Payroll Management',
      description: 'Complete payroll processing and management system.',
      tech: 'Java, MySQL'
    },
    {
      title: 'Banking System',
      description: 'Basic banking operations and account management system.',
      tech: 'Java, File Handling'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-black/80 backdrop-blur-sm' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'home', icon: Home },
              { id: 'about', icon: User },
              { id: 'education', icon: GraduationCap },
              { id: 'skills', icon: Code },
              { id: 'portfolio', icon: Briefcase },
              { id: 'contact', icon: Phone }
            ].map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
                  ${activeSection === id 
                    ? 'bg-purple-600/30 text-purple-400 border border-purple-500/50' 
                    : 'hover:bg-purple-900/20'}`}
              >
                <Icon className="w-4 h-4" />
                <span className="capitalize">{id}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Space Background */}
      <div className="space-background">
        <div className="space-gradient"></div>
        <div className="space-nebula"></div>
        <div className="cosmic-stars"></div>
      </div>
      
      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text animate-gradient">
            Hazel Trinita
          </h1>
          <p className="text-2xl mb-8 text-purple-200">Web Developer</p>
          
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="https://github.com/Hazel05trinita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-900/30 rounded-full border border-purple-500/30 hover:bg-purple-800/40 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hazeltrinita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-900/30 rounded-full border border-purple-500/30 hover:bg-purple-800/40 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1ZOhJFFwmPkVCIzCySm77LAQVClUXHBDs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-900/30 rounded-full border border-purple-500/30 hover:bg-purple-800/40 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              <FileText className="w-5 h-5" />
              My CV
            </a>
          </div>

          <div className="animate-bounce flex items-center justify-center">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Moving Text */}
      <div className="relative overflow-hidden py-4 bg-purple-900/20 border-y border-purple-500/20">
        <div className="animate-scrolling-text whitespace-nowrap">
          <span className="text-2xl font-semibold mx-4">Get to know me</span>
          <span className="text-2xl font-semibold mx-4">Get to know me</span>
          <span className="text-2xl font-semibold mx-4">Get to know me</span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.3)] cosmic-pulse">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-purple-100">
                Hey there! 👋 I'm Hazel, a passionate B.Tech CSE student with a love for web development and creative problem-solving. I enjoy building dynamic, user-friendly websites that not only look great but also provide a seamless experience.
                <br /><br />
                I'm constantly exploring new technologies and frameworks to improve my skills and bring innovative ideas to life. Whether it's designing intuitive interfaces, optimizing performance, or experimenting with the latest trends in web development, I'm always eager to learn and grow.
                <br /><br />
                When I'm not coding, you'll find me reading books, painting or singing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-purple-900/10 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Education
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30 hover:bg-purple-800/30 transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
              <h3 className="text-xl font-semibold text-purple-300">Alwin International Public School</h3>
              <p className="text-purple-200">Jun 2015 — May 2023, Chennai</p>
              <p className="mt-2 text-gray-300">
                Completed Higher Secondary Education (12th Grade) in Computer Science with 76%. Achieved 88% in 10th Grade.
              </p>
            </div>
            <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30 hover:bg-purple-800/30 transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
              <h3 className="text-xl font-semibold text-purple-300">Karunya Institute of Technology, BTech</h3>
              <p className="text-purple-200">Aug 2023 — Present, Coimbatore</p>
              <p className="mt-2 text-gray-300">
                Currently pursuing a B.Tech in Computer Science and Engineering, gaining expertise in software development, data structures, algorithms, networking, and database management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Skills
          </h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium text-purple-200">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-purple-900/20 rounded-full overflow-hidden cosmic-glow">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full relative"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: 'skillAnimation 1.5s ease-out forwards'
                    }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-shine" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-purple-900/10 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-5" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group p-6 bg-purple-900/20 rounded-lg border border-purple-500/30 hover:bg-purple-800/30 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] cosmic-card"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="text-purple-400 text-sm">
                  <span className="font-medium">Technologies:</span> {project.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-5" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Contact Me
          </h2>
          <div className="space-y-4">
            <p className="text-xl text-purple-200">Phone: +91 9840826461</p>
            <p className="text-xl text-purple-200">Email: andralyntrinita@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;