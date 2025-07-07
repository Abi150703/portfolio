import React, { useState, useEffect } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,

  Calendar,
  GraduationCap,
  Award,
  Code,
  Briefcase,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };


  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const educationTimeline = [
    {
      year: '2023 – 2025',
      degree: 'MCA',
      fullDegree: 'Master of Computer Applications',
      institution: 'Anna University, CEG Campus',
      location: 'Chennai',
      grade: 'CGPA: 7.6',
      description: 'Advanced studies in computer applications with focus on software development and emerging technologies',
      isLatest: true
    },
    {
      year: '2020 – 2023',
      degree: 'BCA',
      fullDegree: 'Bachelor of Computer Applications',
      institution: 'Government Arts College (Autonomous)',
      location: 'Kumbakonam',
      grade: 'CGPA: 9.2',
      description: 'Comprehensive undergraduate program covering programming, database management, and software engineering',
      achievements: ['Outstanding Academic Performance', 'Graduated with Distinction']
    },
    {
      year: '2019 – 2020',
      degree: 'HSC',
      fullDegree: 'Higher Secondary Certificate',
      institution: 'St. Joseph Girls Higher Secondary School',
      location: 'Kumbakonam',
      grade: '81.5%',
      description: 'Higher secondary education with focus on computer science and mathematics'
    },
    {
      year: '2017 – 2018',
      degree: 'SSLC',
      fullDegree: 'Secondary School Leaving Certificate',
      institution: 'S.Pudhur High School',
      location: 'S.Pudhur',
      grade: '91.5%',
      description: 'Secondary education with excellent academic performance across all subjects',
      achievements: ['Academic Excellence Award']
    }
  ];

  const skills = [
    { name: 'React.js', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Machine learning', level: 70 },
    { name: 'CSS', level: 70 },
    { name: 'Git/GitHub', level: 80 },
    { name: 'sql', level: 80 },
    { name: 'MongoDB', level: 70 }
  ];

  const projects = [
    {
      title: "Danger Detection System",
      description: "An Deep learning based sound classification model that detects distress sounds to alert emergency services.",
      technologies: ["Python", "Deep Learning", "Keras", "MobileNetV2"],
      image: "/danger.jpg", // place this image inside `public/projects/`
      github: "https://github.com//Abi150703/danger_detection_app",

    },
    {
      title: "Online Book Store App",
      description: "A mobile-first React app for browsing and purchasing books, with Firebase Auth and cart system.",
      image: "/book1.png",
      github: "https://github.com/Abi150703/BookStore",
      technologies: ["React", "Firebase", "CSS", "JavaScript"]
    },
    {
      title: "Tenzies Game",
      description: "A simple dice-matching game built with React and custom animations.",
      image: "/game1.jpg",
      github: "https://github.com/Abi150703/tenzies_game",
      technologies: ["React", "Hooks", "CSS"]
    },
    {
      title: "Chef Claude",
      description: "A fun and interactive React-based cooking app where players help Chef Claude choose the right ingredients to prepare meals.",
      image: "/chief.jpg", // Make sure to place this image in your public folder
      github: "https://github.com/Abi150703/BookStore",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Assembly: The End Game",
      description: "A logic-based React mini-game where players assemble correct letter to make a word — designed to sharpen problem-solving skills.",
      image: "/game.png", // Update with your actual image file path
      github: "https://github.com/Abi150703/Assembly_game",
      technologies: ["React", "Hooks", "CSS"]
    }

  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/Abi150703" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/abiramikr/" },

  ];



  // Animated skill bar component
  const AnimatedSkillBar = ({
    skill,
    index,
  }: {
    skill: { name: string; level: number };
    index: number;
  }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
          <span className="text-purple-600 font-bold">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">


      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t shadow-lg overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md w-full text-left"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
              >
                Hello, I'm{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                >
                  Abirami K
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl lg:text-2xl text-gray-600 mb-8 font-medium"
              >
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>{' '}
                &{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  AI Enthusiast
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-gray-500 mb-10 max-w-2xl"
              >
                A developer who loves building web apps and solving problems with code.
                With experience in React, Java, Python, and deep learning, I've developed both mobile and AI-based projects.
                I'm always eager to learn, explore, and create innovative solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Download className="inline-block w-5 h-5 mr-2" />
                  Download CV
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-border text-transparent bg-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-violet-600 hover:via-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #7c3aed, #9333ea, #2563eb) border-box',
                    color: '#7c3aed'
                  }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white"
                >
                    <img
                    src="/picp.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />



                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 200 }}
                  whileHover={{ rotate: 360 }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Code className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Passionate Developer & Problem Solver 💻
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm Abirami K, a dedicated developer who loves building web applications and solving complex problems with code.
                My journey in technology has been driven by curiosity and a passion for creating innovative solutions that make a difference.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With hands-on experience in React, Java, Python, and deep learning, I've successfully developed both mobile and AI-based projects.
                I thrive on challenges and am always eager to learn new technologies and explore emerging trends in the tech world.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                My goal is to create efficient, scalable, and user-friendly applications while continuously expanding my knowledge
                in artificial intelligence and modern web development frameworks.
              </p>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: MapPin, text: "Chennai, India 📍" },
                  { icon: Mail, text: "abisphs2003@gmail.com 📧" },
                  { icon: Phone, text: "+91 7708196325📱" },
                  { icon: Briefcase, text: "Open to opportunities 💼" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    <item.icon className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white"
              >
                <h4 className="text-xl font-bold mb-4">Quick Facts ⚡</h4>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    { label: "Projects Completed 🚀", value: "5+" },
                    { label: "Technologies Mastered 🛠️", value: "5+" },
                    { label: "Years of Learning 📚", value: "3+" },
                    { label: "Coffee Cups ☕", value: "∞" }
                  ].map((fact, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex justify-between"
                    >
                      <span>{fact.label}</span>
                      <span className="font-bold">{fact.value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey in computer science and technology
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-600 via-purple-600 to-blue-600 rounded-full"></div>

            <div className="space-y-12">
              {educationTimeline.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                          viewport={{ once: true }}
                          className={`p-3 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
                        >
                          <GraduationCap className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                      <div className="mb-4">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                          viewport={{ once: true }}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${edu.isLatest
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                            }`}
                        >
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.year}
                        </motion.span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <h4 className="text-lg font-semibold text-purple-600 mb-2">{edu.fullDegree}</h4>
                        <p className="text-gray-600 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.institution}, {edu.location}
                        </p>
                        <p className="text-green-600 font-semibold mb-3">{edu.grade}</p>
                        <p className="text-gray-500 mb-4">{edu.description}</p>
                      </div>
                      {edu.achievements && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-yellow-500" />
                            Achievements
                          </h5>
                          <motion.ul
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="space-y-1"
                          >
                            {edu.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                variants={fadeInUp}
                                className="text-sm text-gray-600 flex items-start"
                              >
                                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                      viewport={{ once: true }}
                      className={`w-6 h-6 border-4 rounded-full shadow-lg ${edu.isLatest
                        ? 'bg-blue-500 border-blue-600'
                        : 'bg-white border-purple-600'
                        }`}
                    />
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-48 w-full overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </motion.a>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-8">
            As a fresher, I'm open to entry-level opportunities where I can apply my skills, learn continuously, and contribute to exciting projects.

          </p>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-lg font-semibold text-gray-800">Email</span>
            <span className="text-purple-600 text-xl">
              abisphs2003@gmail.com
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              Abirami K's Portfolio
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6"
            >
              Crafting digital experiences with passion and precision
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex justify-center space-x-6 mb-8"
            >
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <motion.a
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.2, y: -2 }}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>


            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-gray-800 pt-8"
            >
              <p className="text-gray-400">
                © 2025 Abirami K. All rights reserved. Built with React & Tailwind CSS.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;