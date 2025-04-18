"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  ExternalLink,
  ChevronUp,
  MapPin,
  Phone,
  Code,
  Shield,
  Server,
  Database,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Projects data
const projects = [
  {
    id: 1,
    title: "Secure API Gateway",
    category: "Backend",
    image: "/placeholder.svg?height=400&width=400",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Marview Caffetaria",
    category: "Fullstack",
    image: "/placeholder.svg?height=400&width=400",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Soul-u",
    category: "Mobile Apps",
    image: "/placeholder.svg?height=400&width=400",
    color: "from-red-500 to-orange-500",
  },
];

// Tech stack data
const techStack = [
  { name: "Figma", icon: "/placeholder.svg?height=48&width=48" },
  { name: "Bootstrap", icon: "/placeholder.svg?height=48&width=48" },
  { name: "JavaScript", icon: "/placeholder.svg?height=48&width=48" },
  { name: "Next.js", icon: "/placeholder.svg?height=48&width=48" },
  { name: "Tailwind", icon: "/placeholder.svg?height=48&width=48" },
  { name: "PHP", icon: "/placeholder.svg?height=48&width=48" },
  { name: "Java", icon: "/placeholder.svg?height=48&width=48" },
  { name: "Python", icon: "/placeholder.svg?height=48&width=48" },
  { name: "MySQL", icon: "/placeholder.svg?height=48&width=48" },
  { name: "Laravel", icon: "/placeholder.svg?height=48&width=48" },
  { name: "CI/CD", icon: "/placeholder.svg?height=48&width=48" },
  { name: "Linux", icon: "/placeholder.svg?height=48&width=48" },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 lg:hidden flex flex-col items-center justify-center"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-2xl">×</span>
          </Button>
          <nav className="flex flex-col items-center gap-6 text-xl">
            <Link href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="#experience" onClick={() => setMobileMenuOpen(false)}>
              Experience
            </Link>
            <Link href="#stack" onClick={() => setMobileMenuOpen(false)}>
              Tech Stack
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
            >
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full border-2 border-blue-500 p-1"
              />
            </motion.div>
            <div>
              <motion.h1
                className="text-2xl font-mono bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                TIO ANDRIYANTO
              </motion.h1>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Backend Developer & Security Enginrers
              </motion.p>
            </div>
          </div>

          {/* Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a <span className="text-blue-400">Backend Developer</span>{" "}
              and <span className="text-cyan-400">Security Engineer</span> with
              a focus on developing efficient and secure backend systems.
              Currently, I am learning Laravel, PHP, and JavaScript to build
              scalable and secure web applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have a strong interest in cybersecurity, particularly in API
              security, web security, and ethical hacking. Additionally, I enjoy
              collaborating on challenging software development projects and
              sharing knowledge about best security practices in web
              development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Feel free to reach out if you'd like to discuss backend
              development or cybersecurity! 🚀🔒
            </p>
            <Button
              variant="outline"
              className="rounded-full group transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
              asChild
            >
              <Link href="/placeholder.svg" download="Tio_Andriyanto_CV.pdf">
                Download My CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="flex gap-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Github className="w-5 h-5" />, href: "#" },
                {
                  icon: <Mail className="w-5 h-5" />,
                  href: "mailto:thyoandry.dev@gmail.com",
                },
              ].map((social, index) => (
                <motion.div key={index} variants={item}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    asChild
                  >
                    <Link href={social.href}>{social.icon}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
            <motion.div className="text-gray-400 text-sm" variants={item}>
              <p>© 2024 Tio Andriyanto</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <motion.div
            className="hidden lg:flex justify-end gap-6 text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </Link>
            <Link href="#stack" className="hover:text-white transition-colors">
              Tech Stack
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </motion.div>

          {/* Projects Section */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-mono">My Projects</h2>
              <Button variant="ghost" size="sm" className="group">
                View all
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-70 transition-opacity duration-300`}
                  />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-blue-300">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="self-start mt-2 p-0 hover:bg-transparent"
                    >
                      View Project <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-mono">Experience</h2>
            </div>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-10 w-[2px] bg-gradient-to-b from-blue-500 to-cyan-500" />

              {/* Experience items */}
              {[
                {
                  company: "HMJ INFORMATION TECHNOLOGY",
                  position: "Education and reasoning department staff",
                  period: "January 2025 – Present",
                  description:
                    "Create a SINTECH program, a study club to improve the soft skills of information technology students.",
                },
                {
                  company: "LABORATORY ASSISTANT",
                  position: "Computer programming assistant",
                  period: "August 2024 – Present",
                  description:
                    "Assist lecturers in practical courses when carrying out learning in the laboratory. Manage and maintain laboratory equipment to ensure efficient and safe operation.",
                },
                {
                  company: "SEMACI WALISONGO SEMARANG",
                  position: "Media and information staff",
                  period: "August 2024 – Present",
                  description:
                    "Design attractive graphics for social media platforms, event materials and internal communications. Collaborate with the team to ensure consistency and alignment of design with organizational branding.",
                },
                {
                  company: "GDGSC UIN WALISONGO",
                  position: "Frontend Developer",
                  period: "October 2023 – May 2024",
                  description:
                    "Lead the team in developing applications as final projects, starting from the planning, design, to implementation stages.",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-glow-sm" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="font-bold text-lg text-white">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-blue-400">{exp.period}</span>
                  </div>
                  <p className="text-cyan-300 font-medium mb-1">
                    {exp.position}
                  </p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stack Section */}
          <motion.section
            id="stack"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-mono">My Stack</h2>
              <Button variant="ghost" size="icon" className="text-white">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="mt-2 text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact and Skills Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Section */}
            <motion.section
              id="contact"
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full opacity-10" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-cyan-500 rounded-full opacity-10" />
              <h2 className="text-2xl font-mono mb-4">Let's Connect</h2>
              <p className="text-gray-400 mb-4">
                Have a project in mind? Let's discuss how I can help secure your
                backend systems.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
                Get in Touch <Mail className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-mono mb-4">Specializations</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium">Backend Development</h3>
                    <p className="text-gray-400 text-sm">PHP, Laravel, Java</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="font-medium">Security Engineering</h3>
                    <p className="text-gray-400 text-sm">API & Web Security</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium">Frontend Development</h3>
                    <p className="text-gray-400 text-sm">JavaScript, Next.js</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="font-medium">Database Management</h3>
                    <p className="text-gray-400 text-sm">
                      MySQL, Database Design
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
      {/* Footer */}
      <motion.footer
        className="mt-16 border-t border-gray-800 pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <h3 className="text-xl font-mono">Tio Andriyanto</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Backend Developer and Security Engineer focused on building
              efficient and secure systems.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: "#" },
                { icon: <Linkedin className="w-4 h-4" />, href: "#" },
                { icon: <Github className="w-4 h-4" />, href: "#" },
                { icon: <Terminal className="w-4 h-4" />, href: "#" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  asChild
                >
                  <Link href={social.href}>{social.icon}</Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Tech Stack", href: "#stack" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    <span className="text-blue-400">→</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  Kota Semarang, Ngaliyan, Jl Kasonsih Selatan VI No 924
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">thyoandry.dev@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+6285727040539</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to my newsletter for the latest security tips and
              backend development insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="thyoandry.dev@gmail.com"
                className="bg-gray-800 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
              <Button className="rounded-l-none bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tio Andriyanto. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-gray-800 hover:bg-blue-500 transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ChevronUp className="w-4 h-4 mr-2" /> Back to top
            </Button>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
