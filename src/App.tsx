import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import Alysei from "./images/alysei.png";
import Zeko from "./images/zeko.png";
import Fastfood from "./images/fastfood.png";
import Hero3D from "./components/Hero3D";
import { SkillsSection } from "./components/SkillsSection";
import { About } from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* 3D Hero Section */}
      <Hero3D />
      <About />
      <SkillsSection />

      {/* Experience Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-center">Experience</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Current Role */}
            <div className="group">
              <div className="bg-gray-900/90 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-blue-500/50">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        Ibyteinfomatics
                      </h3>
                      <p className="text-gray-400 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Front End Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>Mar 2024 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Led development for multiple projects with Next.js, React.js, JavaScript",
                    "Implemented responsive design using HTML5/CSS3",
                    "Utilized Redux for scalable state management",
                    "Integrated third-party APIs and optimized performance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Previous Role */}
            <div className="group">
              <div className="bg-gray-900/90 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-blue-500/50">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        Ssoft Solutions
                      </h3>
                      <p className="text-gray-400 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Front End Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>Dec 2022 - Feb 2024</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Created single-page applications using React.js",
                    "Managed version control through Git",
                    "Integrated third-party APIs",
                    "Configured Webpack for optimized performance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="project"
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-center">
              Featured Projects
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Alysei Project */}
            <div className="group bg-gradient-to-br from-gray-800 via-gray-800/95 to-gray-800 p-1 rounded-2xl hover:from-blue-500/20 hover:via-purple-500/20 hover:to-blue-500/20 transition-all duration-500">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 relative group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative">
                      <img
                        src={Alysei}
                        alt="Alysei Platform"
                        className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        Alysei - B2B Platform
                      </h3>
                      <p className="text-gray-400 text-sm">
                        React • Node.js • MongoDB • Express
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      A comprehensive B2B platform connecting Italian food
                      producers with US importers. Features include user
                      authentication, product showcasing, business networking,
                      and real-time communication. The platform streamlines the
                      import/export process and facilitates business
                      relationships in the food industry.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        Business Networking
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                        E-commerce
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                        Real-time Chat
                      </span>
                    </div>
                    <div className="flex gap-6">
                      <a
                        href="https://alysei.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group/link"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="border-b border-transparent group-hover/link:border-blue-400">
                          Visit Website
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zekosoft Project */}
            <div className="group bg-gradient-to-br from-gray-800 via-gray-800/95 to-gray-800 p-1 rounded-2xl hover:from-purple-500/20 hover:via-blue-500/20 hover:to-purple-500/20 transition-all duration-500">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 relative group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative">
                      <img
                        src={Zeko}
                        alt="Zekosoft Website"
                        className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                        Zekosoft - IT Solutions
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Next.js • Tailwind CSS • Framer Motion
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      A modern, responsive website for an IT solutions company
                      showcasing their services, expertise, and portfolio.
                      Features smooth animations, interactive UI elements, and
                      optimized performance. The design focuses on user
                      experience while maintaining professional aesthetics.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        Modern Design
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                        Animations
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                        Responsive
                      </span>
                    </div>
                    <div className="flex gap-6">
                      <a
                        href="https://zekosoft.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group/link"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="border-b border-transparent group-hover/link:border-purple-400">
                          Visit Website
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FastFood OS Project */}
            <div className="group bg-gradient-to-br from-gray-800 via-gray-800/95 to-gray-800 p-1 rounded-2xl hover:from-green-500/20 hover:via-blue-500/20 hover:to-green-500/20 transition-all duration-500">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2 relative group-hover:transform group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={Fastfood}
                        alt="FastFood OS Project"
                        className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
                        FastFood OS
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Next.js • React • Tailwind CSS
                      </p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      A pioneering web platform for the fast-food industry,
                      utilizing Next.js, React.js, and modern web technologies.
                      Implemented server-side rendering (SSR) and static
                      generation for optimal performance and SEO.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        SSR
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                        Performance
                      </span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                        SEO Optimized
                      </span>
                    </div>
                    <div className="flex gap-6">
                      <a
                        href="https://stubbingtonkebab.fastfood.dev/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group/link"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="border-b border-transparent group-hover/link:border-green-400">
                          Live Demo
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certification */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                Education
              </h2>
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-blue-500/50">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  Bachelor of Technology
                </h3>
                <p className="text-gray-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  RKDF University, Bhopal
                </p>
              </div>
            </div>
            <div className="group">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-400" />
                Certification
              </h2>
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300 border border-gray-800 group-hover:border-purple-500/50">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  Front End Development
                </h3>
                <p className="text-gray-400 flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4" />
                  Coursera
                </p>
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full w-fit">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Completed with 94% grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Neeraj Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
