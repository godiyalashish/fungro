import { FUNNGRO_STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Building2, Layers, Users, Briefcase } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: FUNNGRO_STATS.companies,
      label: "Companies",
      icon: Building2,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      value: FUNNGRO_STATS.categories,
      label: "Categories",
      icon: Layers,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      value: FUNNGRO_STATS.teenlancers,
      label: "Teenlancers",
      icon: Users,
      gradient: "from-green-500 to-green-600"
    },
    {
      value: FUNNGRO_STATS.liveProjects,
      label: "Live Projects",
      icon: Briefcase,
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Trusted by <span className="text-purple-600">thousands</span>
          </h2>
          <p className="text-xl text-neutral-600">
            Join our growing community of companies and talented teens
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass rounded-2xl p-6 hover-lift group-hover:shadow-professional-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className={`bg-gradient-to-r ${stat.gradient} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
