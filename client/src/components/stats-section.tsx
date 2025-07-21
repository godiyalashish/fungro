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
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">thousands</span>
          </h2>
          <p className="text-xl text-slate-600">
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
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-indigo-200/60 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div 
                  className={`bg-gradient-to-br ${stat.gradient} w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-slate-600 font-semibold text-sm uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
