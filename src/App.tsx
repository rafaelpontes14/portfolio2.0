import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, ChevronDown, ExternalLink, ArrowRight, Code2, Server, PenTool as Tool, Briefcase, GraduationCap, Coffee, Send, User, AtSign, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    setIsMenuOpen(false);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Responsive Delivery", 
      description: "Desenvolvimento de uma landing page moderna para serviços de delivery, implementando design responsivo e otimizado para todos os dispositivos. O projeto inclui animações fluidas e navegação intuitiva para melhor experiência do usuário.",
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: "./img/delivery.png",
      projectUrl: "https://github.com/rafaelpontes14/Website-Delivery",
      demoUrl: "https://responsive-delivery.netlify.app/"
    },
    {
      title: "Responsive Halloween Website", 
      description: "Site temático desenvolvido com foco em performance e experiência do usuário. Implementação de animações personalizadas, sistema de navegação dinâmico e design responsivo. O projeto utiliza técnicas modernas de CSS para criar efeitos visuais envolventes mantendo a otimização.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: "/img/halloween.png",
      projectUrl: "https://github.com/rafaelpontes14/Responsive-Halloween-Website?tab=readme-ov-file",
      demoUrl: "https://responsive-halloween.netlify.app/#"
    },
    {
      title: "Mario Jump",
      description: "Desenvolvimento de um jogo web interativo inspirado no clássico Mario Bros. Implementação de sistema de colisão, pontuação em tempo real e controles responsivos. O projeto utiliza Canvas API para renderização e requestAnimationFrame para otimização de performance.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: "/img/mario.png",
      projectUrl: "https://github.com/rafaelpontes14/Mario-Jump",
      demoUrl: "https://mariojuump.netlify.app/"
    },
    {
      title: "Genius Game", 
      description: "Recriação do jogo Genius com foco em acessibilidade e usabilidade. Implementação de sistema de pontuação, diferentes níveis de dificuldade e feedback sonoro/visual. O projeto utiliza algoritmos de randomização e gerenciamento de estado para controle do fluxo do jogo.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: "/img/genius.png",
      projectUrl: "https://github.com/rafaelpontes14/Genius",
      demoUrl: "https://game-geniuss.netlify.app/"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative">
      {/* Fixed Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-zinc-950/90 backdrop-blur-lg shadow-lg border-b border-zinc-800/50 h-12' 
            : 'h-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex-shrink-0">
              <h1 className={`font-bold text-zinc-100 hover:scale-110 transition-transform cursor-pointer ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>RP</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full ${
                    activeSection === item.id 
                      ? 'text-zinc-100 font-medium bg-zinc-800'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button 
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isMenuOpen ? 'bg-zinc-800' : 'hover:bg-zinc-800'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-zinc-100 mb-1.5 transition-all ${
                isMenuOpen ? 'transform rotate-45 translate-y-2' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-zinc-100 mb-1.5 transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-zinc-100 transition-all ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
              }`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 border-t border-zinc-800/50' : 'max-h-0'
        } overflow-hidden bg-zinc-900/90 backdrop-blur-lg`}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-zinc-800 text-zinc-100'
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-[100svh] flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center space-y-4 animate-fadeIn max-w-4xl mx-auto">
          <div className="mb-6 relative group">
            <div className="absolute -inset-1 from-zinc-400 to-zinc-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-zinc-400 group-hover:ring-zinc-300 transition-all duration-300 transform group-hover:scale-105">
              <img 
                src="/img/e602759a-6e53-4609-aaa0-cc7c7a762232.jpg" 
                alt="Rafael Pontes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-100 animate-gradient">
            Rafael Pontes
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 animate-slideUp">
            Desenvolvedor Full Stack
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-zinc-400 px-4 animate-slideUp delay-100">
            Transformando ideias em soluções digitais com paixão pela tecnologia e inovação
          </p>
          <div className="flex gap-4 justify-center pt-4 animate-slideUp delay-200">
            <a href="https://github.com/rafaelpontes14?tab=overview&from=2024-12-01&to=2024-12-31" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="p-2 hover:text-zinc-300 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://www.linkedin.com/in/rafael-fernandes-pontes-79626a1b7/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-2 hover:text-zinc-300 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://www.instagram.com/rafaelpontesfs/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-2 hover:text-zinc-300 transition-all duration-300 hover:scale-110">
              <Instagram className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 animate-bounce hover:text-zinc-300 transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-zinc-100">
            Sobre Mim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 p-6 rounded-xl hover:bg-zinc-900 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-zinc-800 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-zinc-100 transition-colors">Experiência</h3>
              </div>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Desenvolvedor full stack apaixonado por criar experiências digitais excepcionais. 
                Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam.
              </p>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-xl hover:bg-zinc-900 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-zinc-800 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-zinc-100 transition-colors">Formação</h3>
              </div>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Atualmente, estou focado em expandir meus conhecimentos em desenvolvimento web moderno,
                trabalhando com as mais recentes tecnologias do mercado.
              </p>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-xl hover:bg-zinc-900 transition-all duration-300 group md:col-span-2 lg:col-span-1 hover:transform hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-zinc-800 group-hover:scale-110 transition-transform">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-zinc-100 transition-colors">Interesses</h3>
              </div>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Além do desenvolvimento, sou entusiasta de novas tecnologias, apaixonado por resolver 
                problemas complexos e criar soluções inovadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-zinc-100">
            Habilidades
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory 
              title="Front-end" 
              icon={<Code2 className="w-6 h-6" />}
              skills={[
                'React.js',
                'TypeScript',
                'Tailwind CSS',
                'Next.js',
                'HTML/CSS',
                'JavaScript'
              ]} 
              gradient="bg-zinc-800"
            />
            
            <SkillCategory 
              title="Back-end" 
              icon={<Server className="w-6 h-6" />}
              skills={[
                'Node.js',
                'Python',
                'Java'
              ]} 
              gradient="bg-zinc-800"
            />
            
            <SkillCategory 
              title="Ferramentas" 
              icon={<Tool className="w-6 h-6" />}
              skills={[
                'Git',
                'Docker',
                'VS Code',
                'Figma',
                'Linux (Ubuntu)'
              ]} 
              gradient="bg-zinc-800"
            />
            
            <SkillCategory 
              title="Soft Skills" 
              icon={<User className="w-6 h-6" />}
              skills={[
                'Trabalho em Equipe',
                'Comunicação',
                'Organização',
                'Proatividade',
                'Adaptabilidade',
                'Resolução de Problemas'
              ]} 
              gradient="bg-zinc-800"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-zinc-100">
            Projetos
          </h2>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] border border-zinc-800 hover:border-zinc-700">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 aspect-video relative group overflow-hidden">
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="p-6 md:w-1/2 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-3 text-zinc-100">{project.title}</h3>
                            <p className="text-zinc-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm border border-zinc-700 hover:bg-zinc-700 transition-colors">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <a 
                              href={project.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 bg-zinc-800 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all duration-300 border border-zinc-700 group hover:scale-105"
                            >
                              Código <Github size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a 
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 bg-zinc-800 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all duration-300 border border-zinc-700 group hover:scale-105"
                            >
                              Demo <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-zinc-900/80 rounded-full hover:bg-zinc-800/80 transition-colors backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 group"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button 
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-zinc-900/80 rounded-full hover:bg-zinc-800/80 transition-colors backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 group"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-zinc-100 w-8'
                    : 'bg-zinc-700 hover:bg-zinc-600'
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/10 to-zinc-700/10 opacity-50"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100">
              Vamos Conversar?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e parcerias interessantes. 
              Vamos transformar suas ideias em realidade!
            </p>
          </div>
          
          <div className="bg-zinc-900/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <form 
              action="https://formsubmit.co/rafafpontes@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_next" value="https://rafaelpontes.vercel.app/" />
              <input type="hidden" name="_subject" value="Novo contato do portfólio!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <User size={16} className="text-zinc-300" />
                  Nome
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  className="w-full p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600/20 outline-none transition-all duration-300 pl-4 hover:border-zinc-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <AtSign size={16} className="text-zinc-300" />
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  placeholder="seu.email@exemplo.com"
                  className="w-full p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600/20 outline-none transition-all duration-300 pl-4 hover:border-zinc-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <MessageSquare size={16} className="text-zinc-300" />
                  Mensagem
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  placeholder="Sua mensagem aqui..."
                  rows={4}
                  className="w-full p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-zinc-600 focus:ring-2 focus:ring-zinc-600/20 outline-none transition-all duration-300 pl-4 resize-none hover:border-zinc-600"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 px-6 bg-zinc-800 rounded-lg font-semibold text-zinc-100 flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] group border border-zinc-700"
              >
                Enviar Mensagem
                <Send size={18} className="transform -rotate-40 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <a href="https://github.com/rafaelpontes14?tab=overview&from=2024-12-01&to=2024-12-31" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group hover:scale-105">
              <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                <Github size={20} />
              </div>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rafael-fernandes-pontes-79626a1b7/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group hover:scale-105">
              <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/rafaelpontesfs/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-all duration-300 group hover:scale-105">
              <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                <Instagram size={20} />
              </div>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-zinc-400">
        <p className="hover:text-zinc-100 transition-colors">Feito com ❤️ por Rafael Pontes</p>
      </footer>
    </div>
  );
}

function SkillCategory({ 
  title, 
  skills,
  icon,
  gradient,
  className = ''
}: { 
  title: string; 
  skills: string[];
  icon: React.ReactNode;
  gradient: string;
  className?: string;
}) {
  return (
    <div className={`group bg-zinc-900/50 backdrop-blur-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-xl ${gradient} transform group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-zinc-100 transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill) => (
            <div 
              key={skill}
              className="bg-zinc-800 px-3 py-2 rounded-lg text-zinc-300 text-sm hover:bg-zinc-700 transition-all duration-300 hover:transform hover:scale-105 hover:text-zinc-100 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;