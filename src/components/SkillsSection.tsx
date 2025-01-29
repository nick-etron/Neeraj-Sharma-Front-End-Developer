import { motion } from "framer-motion"
import {
  Code2,
  Layout,
  Smartphone,
  Database,
  Cpu,
  Palette,
  GitBranch,
  Gauge,
  Globe,
  Box,
  Layers,
  Workflow,
} from "lucide-react"
import { SkillCard } from "./SkillCard"

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Expert in React.js, Next.js, and modern JavaScript frameworks",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Creating fluid layouts that work across all devices and screen sizes",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description: "Developing with mobile-first methodology for optimal user experience",
  },
  {
    icon: Database,
    title: "State Management",
    description: "Proficient in Redux, Context API, and other state management solutions",
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description: "Implementing best practices for fast-loading and efficient applications",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Experienced with Git, GitHub, and collaborative development",
  },
  {
    icon: Gauge,
    title: "Web Performance",
    description: "Optimizing for Core Web Vitals and performance metrics",
  },
  {
    icon: Globe,
    title: "API Integration",
    description: "Working with RESTful APIs and GraphQL endpoints",
  },
  {
    icon: Box,
    title: "3D Web Development",
    description: "Creating immersive experiences with Three.js and WebGL",
  },
  {
    icon: Layers,
    title: "Modern CSS",
    description: "Expertise in Tailwind CSS, CSS Modules, and CSS-in-JS",
  },
  {
    icon: Workflow,
    title: "Agile Methodology",
    description: "Working in agile environments with scrum frameworks",
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Leveraging modern technologies and best practices to build exceptional digital experiences
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={index}
            />
          ))}
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}

