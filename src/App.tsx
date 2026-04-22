import React, { useState, useEffect } from 'react';
import { Github as GithubIcon, Linkedin, Instagram as InstagramIcon, ChevronDown, ExternalLink, Code2, Server, PenTool as Tool, User, ChevronLeft, ChevronRight, Download } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects'];
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
      title: "Pincel da Aprendizagem",
      description: "Plataforma educacional online com foco no desenvolvimento infantil, oferecendo jogos, atividades pedagógicas e recursos voltados à alfabetização e ao estímulo de habilidades cognitivas, emocionais e motoras.",
      tech: ['JavaScript', 'React', 'NextJS', 'Swiper', 'MySQL'],
      image: "./img/pincel.png",
      demoUrl: "https://pincel-dusky.vercel.app/"
    },
    {
      title: "Clínica Lunar",
      description: "Desenvolvimento de uma landing page institucional para a Clínica Lunar Psicologia, com foco em apresentar os serviços de psicoterapia, facilitar o agendamento de consultas e fortalecer a presença digital da clínica. O projeto envolveu a criação de uma interface moderna, responsiva e otimizada para conversão, destacando informações sobre atendimento psicológico.",
      tech: ['NextJS', 'TypeScript', 'TailwindCSS'],
      image: "/img/lunar.png",
      demoUrl: "https://www.clinicalunarpsicologia.com.br/"
    },
    {
      title: "Ponto Mais",
      description: "Desenvolvimento full stack do PontoMais, um sistema web para gestão de pequenos comércios, com funcionalidades como cadastro de produtos, registro de vendas, controle financeiro e acompanhamento de métricas em tempo real, focado em usabilidade e eficiência.",
      tech: ['Nextjs', 'TypeScript', 'TailwindCSS', 'Supabase', 'API Router'],
      image: "/img/ponto-mais.png",
      demoUrl: "https://ponto-mais.vercel.app/"
    },
    {
      title: "FlowLearning",
      description: "Plataforma de Aprendizado Gamificada Desenvolvemos uma plataforma moderna de aprendizado de idiomas com foco em gamificação, proporcionando uma experiência interativa e envolvente. O sistema conta com mecânicas como níveis, XP, progresso do usuário e interface intuitiva, inspirada em grandes plataformas como Duolingo.",
      tech: ['NestJS + TypeScript', 'GraphQL', 'Prisma + MySQL', 'JWT', 'Angular 17+', 'TailwindCSS'],
      image: "/img/flowlearning.png",
      demoUrl: "https://flowlearning.netlify.app/"
    },
    {
      title: "Delivery",
      description: "Desenvolvimento de uma landing page para delivery, criada para apresentar o cardápio, destacar promoções e facilitar o contato e os pedidos dos clientes. O projeto foi desenvolvido com foco em uma interface moderna, navegação simples e design responsivo, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktop, além de fortalecer a presença digital do negócio",
      tech: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
      image: "/img/delivery.png",
      demoUrl: "https://responsive-delivery.netlify.app/"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
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
          <div className="flex flex-col items-center gap-6 pt-4 animate-slideUp delay-200">
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/rafaelpontes14?tab=overview&from=2024-12-01&to=2024-12-31"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 hover:text-zinc-300 transition-all duration-300 hover:scale-110">
                <GithubIcon className="w-6 h-6 md:w-7 md:h-7" />
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
                <InstagramIcon className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
            <a
              href="/Rafael_Fernandes_FullStack.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 rounded-lg text-zinc-100 hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105 group border border-zinc-700"
            >
              <span>Currículo</span>
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
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
          <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-zinc-900/60 p-10 rounded-[2rem] border border-zinc-800 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01]">
              <div className="space-y-4 text-left">
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Olá! Sou Rafael Pontes, Desenvolvedor Full Stack, apaixonado por transformar ideias em soluções funcionais e intuitivas.
                </p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Tenho experiência prática no desenvolvimento de aplicações web e mobile, atuando na criação de interfaces responsivas, integração com APIs REST e modelagem de banco de dados.
                </p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Trabalho com tecnologias como React, Next.js, TailwindCSS, JavaScript, TypeScript e Python, sempre aplicando boas práticas como SOLID, MVC e metodologias ágeis. Atualmente curso Engenharia de Software, aprofundando conhecimentos em arquitetura e engenharia de requisitos.
                </p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Já participei de projetos que fortaleceram minhas habilidades em trabalho em equipe, adaptação a mudanças e entregas consistentes.
                </p>
              </div>
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
              title="Linguagens"
              icon={<Code2 className="w-6 h-6" />}
              skills={['JavaScript', 'TypeScript', 'Python', 'Java', 'Apex']}
              gradient="bg-zinc-800"
            />
            <SkillCategory
              title="Banco de Dados"
              icon={<Server className="w-6 h-6" />}
              skills={['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase']}
              gradient="bg-zinc-800"
            />
            <SkillCategory
              title="Frameworks"
              icon={<Tool className="w-6 h-6" />}
              skills={['React', 'Next.js', 'TailwindCSS', 'SASS']}
              gradient="bg-zinc-800"
            />
            <SkillCategory
              title="Ferramentas"
              icon={<User className="w-6 h-6" />}
              skills={['Git', 'GitHub', 'Linux (Ubuntu)', 'Windows']}
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
                    className="w-full flex-shrink-0 px-2 h-full"
                  >
                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] border border-zinc-800 hover:border-zinc-700 h-[540px] md:h-[420px]">
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="md:w-1/2 aspect-video md:aspect-auto md:h-full relative group overflow-hidden">
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
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2 bg-zinc-800 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all duration-300 border border-zinc-700 group hover:scale-105"
                            >
                              Ver projeto <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
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

      {/* Footer */}
      <footer className="py-6 text-center text-zinc-400">
        <p className="hover:text-zinc-100 transition-colors">© 2026 Rafael Pontes. All rights reserved.</p>
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