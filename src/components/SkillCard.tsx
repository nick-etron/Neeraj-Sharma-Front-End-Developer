import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function SkillCard({ icon: Icon, title, description, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
    >
      <div className="relative flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-gray-700/50">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  )
}

