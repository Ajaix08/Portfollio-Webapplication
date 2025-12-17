'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, ArrowRight, Sparkles, Code, Zap, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedText from '@/components/AnimatedText';
import FloatingElement from '@/components/FloatingElement';
import ScrollAnimation from '@/components/ScrollAnimation';
import SkillBar from '@/components/SkillBar';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const skills = [
    { name: 'React/Next.js', level: 95, color: '#3B82F6' },
    { name: 'TypeScript', level: 90, color: '#8B5CF6' },
    { name: 'Node.js', level: 85, color: '#10B981' },
    { name: 'Python', level: 80, color: '#F59E0B' },
    { name: 'AWS/Cloud', level: 75, color: '#EF4444' },
    { name: 'Docker/K8s', level: 70, color: '#06B6D4' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-4 py-20 pt-32">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <FloatingElement delay={0}>
            <motion.div
              className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center backdrop-blur-sm">
                <motion.span 
                  className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  AK
                </motion.span>
              </div>
            </motion.div>
          </FloatingElement>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anurag Kumar
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl mb-6 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedText 
              texts={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "",
                "Problem Solver"
              ]}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold"
            />
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block">
              <Sparkles className="inline w-5 h-5 mr-2 text-yellow-400" />
            </span>
            Crafting digital experiences with cutting-edge technologies. 
            Passionate about building scalable solutions that make a difference.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 gap-2"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Zap className="w-5 h-5" />
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 gap-2"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-5 h-5" /> Contact Me
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Mail, label: 'Email' }
            ].map((social, index) => (
              <FloatingElement key={social.label} delay={index * 0.2}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </Button>
              </FloatingElement>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <ScrollAnimation direction="up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  I'm a <span className="text-purple-400 font-semibold">passionate software engineer</span> with over 5 years of experience building web applications that solve real-world problems. My journey started with curiosity about how things work on the internet.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  I specialize in <span className="text-blue-400 font-semibold">full-stack development</span>, with expertise in modern JavaScript frameworks, cloud services, and DevOps practices. I'm passionate about clean code, user experience, and continuous learning.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  When I'm not coding, you can find me contributing to <span className="text-green-400 font-semibold">open-source projects</span>, writing technical blog posts, or exploring new technologies.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '5+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
                  { number: '50+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
                  { number: '10+', label: 'Happy Clients', color: 'from-green-500 to-teal-500' },
                  { number: '15+', label: 'Open Source', color: 'from-orange-500 to-red-500' }
                ].map((stat, index) => (
                  <ScrollAnimation key={stat.label} direction="scale" delay={index * 0.1}>
                    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <motion.div 
                          className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <ScrollAnimation direction="up">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                  <Code className="inline w-6 h-6 mr-2" />
                  Core Technologies
                </h3>
                <div className="space-y-4">
                  {skills.slice(0, 3).map((skill, index) => (
                    <SkillBar 
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      delay={index * 0.2}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-pink-400">
                  <Star className="inline w-6 h-6 mr-2" />
                  Additional Skills
                </h3>
                <div className="space-y-4">
                  {skills.slice(3).map((skill, index) => (
                    <SkillBar 
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      delay={index * 0.2}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'], color: 'from-blue-500 to-cyan-500' },
                { title: 'Backend', skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'], color: 'from-green-500 to-teal-500' },
                { title: 'DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git'], color: 'from-purple-500 to-pink-500' }
              ].map((category, index) => (
                <ScrollAnimation key={category.title} direction="scale" delay={index * 0.2}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-white/10 text-white hover:bg-white/20 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <ScrollAnimation direction="up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'Full-stack e-commerce solution with real-time inventory management',
                  details: 'Built a scalable e-commerce platform handling 10,000+ daily users with real-time inventory, payment processing, and admin dashboard.',
                  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Task Management App',
                  description: 'Collaborative project management tool with real-time updates',
                  details: 'Developed a real-time collaborative task management application with WebSocket integration, drag-and-drop interface, and team analytics.',
                  tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'AI Content Generator',
                  description: 'AI-powered content generation platform with multiple models',
                  details: 'Created an AI content generation platform supporting multiple models, custom templates, and batch processing capabilities.',
                  tech: ['Python', 'FastAPI', 'React', 'OpenAI'],
                  gradient: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Analytics Dashboard',
                  description: 'Real-time data visualization and analytics platform',
                  details: 'Built a comprehensive analytics dashboard with real-time data processing, custom charts, and automated reporting features.',
                  tech: ['Vue.js', 'D3.js', 'Node.js', 'Redis'],
                  gradient: 'from-orange-500 to-red-500'
                }
              ].map((project, index) => (
                <ScrollAnimation key={project.title} direction="scale" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5
                    }}
                    transition={{ duration: 0.3 }}
                    className="perspective-1000"
                  >
                    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.title}
                          </CardTitle>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Github className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <CardDescription className="text-gray-300">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">
                          {project.details}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-white/10 text-white hover:bg-white/20 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <ScrollAnimation direction="up">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: 'Senior Software Engineer',
                  company: 'Tech Solutions Inc.',
                  location: 'San Francisco, CA',
                  period: '2021 - Present',
                  achievements: [
                    'Led development of microservices architecture serving 1M+ users',
                    'Reduced API response time by 40% through optimization',
                    'Mentored team of 5 junior developers',
                    'Implemented CI/CD pipelines reducing deployment time by 60%'
                  ],
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Full Stack Developer',
                  company: 'Digital Agency Pro',
                  location: 'Austin, TX',
                  period: '2019 - 2021',
                  achievements: [
                    'Developed 15+ client websites and web applications',
                    'Integrated third-party APIs and payment gateways',
                    'Improved website performance by 35% on average',
                    'Collaborated with UX team to implement responsive designs'
                  ],
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Junior Web Developer',
                  company: 'StartUp Hub',
                  location: 'Seattle, WA',
                  period: '2018 - 2019',
                  achievements: [
                    'Built responsive landing pages and marketing websites',
                    'Maintained and updated existing client websites',
                    'Assisted in database design and API development',
                    'Participated in agile development processes'
                  ],
                  gradient: 'from-green-500 to-teal-500'
                }
              ].map((job, index) => (
                <ScrollAnimation key={job.title} direction="left" delay={index * 0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className={`bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>
                              {job.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1 text-gray-300">
                              <span>{job.company}</span>
                              <MapPin className="w-3 h-3" />
                              <span>{job.location}</span>
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-300">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <ScrollAnimation direction="up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            
            <div className="text-center mb-12">
              <motion.p 
                className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                I'm always interested in hearing about new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate or just have a chat!
              </motion.p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {[
                  { icon: Mail, text: 'john.doe@example.com', gradient: 'from-blue-500 to-cyan-500' },
                  { icon: Linkedin, text: 'LinkedIn Profile', gradient: 'from-blue-600 to-blue-400' },
                  { icon: Github, text: 'GitHub Profile', gradient: 'from-gray-600 to-gray-400' }
                ].map((social, index) => (
                  <FloatingElement key={social.text} delay={index * 0.2}>
                    <Button 
                      size="lg" 
                      className={`bg-gradient-to-r ${social.gradient} hover:shadow-lg hover:shadow-white/20 transition-all duration-300 text-white border-0`}
                    >
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.text}
                    </Button>
                  </FloatingElement>
                ))}
              </div>
            </div>
            
            <ScrollAnimation direction="scale">
              <ContactForm />
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-8 px-4 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className="text-gray-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            © 2024 John Doe. Built with{' '}
            <span className="text-red-500 animate-pulse">❤️</span>{' '}
            using Next.js, TypeScript, and Tailwind CSS.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}