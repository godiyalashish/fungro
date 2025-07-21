import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Star, Zap, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  type: "teen" | "company";
}

export default function HeroSection({ type }: HeroSectionProps) {
  if (type === "teen") {
    return (
      <section className="relative gradient-hero text-white py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="glass text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>As seen on Shark Tank India</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                TEEN
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-slow">
                  LANCERS
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xl md:text-2xl mb-4 text-white/95 font-medium">
                  Real companies, real projects, real earnings
                </p>
                <p className="text-lg mb-8 text-white/80">
                  Smart opportunities for the smart generation 🚀
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="gradient-accent text-neutral-900 hover-lift shadow-professional-lg px-8 py-4 text-lg font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
                <Button variant="outline" className="glass border-white/30 text-white hover:bg-white/10 hover-scale px-8 py-4 text-lg">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div 
                  className="glass px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" 
                    alt="Download on App Store" 
                    className="h-10 hover-scale transition-transform"
                  />
                </motion.div>
                <motion.div 
                  className="glass px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" 
                    alt="Get it on Google Play" 
                    className="h-10 hover-scale transition-transform"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-2xl opacity-30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Teen freelancer working on laptop" 
                  className="relative rounded-3xl shadow-professional-lg max-w-md w-full hover-lift animate-float"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Floating stats */}
                <motion.div
                  className="absolute -top-4 -right-4 glass text-white p-3 rounded-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-xs text-white/80">Active Users</div>
                      <div className="font-bold">40L+</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 glass text-white p-3 rounded-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-xs text-white/80">Success Rate</div>
                      <div className="font-bold">95%</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="relative bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600 text-white py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="glass text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-4 h-4 text-yellow-300" />
              <span>As seen on Shark Tank India</span>
              <Star className="w-4 h-4 text-yellow-300" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Smart{" "}
              <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent animate-pulse-slow">
                Talent
              </span>
              <br />
              for smart companies
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl mb-4 text-white/95 font-medium">
                Cost effective, timely delivery, innovative ideas
              </p>
              <p className="text-lg mb-8 text-white/80">
                while you help the next generation 🌟
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="bg-white text-orange-600 hover:bg-yellow-50 hover-lift shadow-professional-lg px-8 py-4 text-lg font-semibold">
                <Users className="mr-2 h-5 w-5" />
                Hire Teenlancer
              </Button>
              <Button variant="outline" className="glass border-white/30 text-white hover:bg-white/10 hover-scale px-8 py-4 text-lg">
                <ArrowRight className="mr-2 h-5 w-5" />
                Talk to Us
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-white/80 mb-3 font-medium">Popular:</p>
              <div className="flex flex-wrap gap-2">
                {["Blogs", "Social Media", "Video Creation", "Sales"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="glass px-4 py-2 rounded-full text-sm backdrop-blur-sm hover-scale"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl blur-2xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Business professionals collaborating" 
                className="relative rounded-3xl shadow-professional-lg max-w-md w-full hover-lift animate-float"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
