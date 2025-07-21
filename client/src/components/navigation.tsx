import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import fungroIcon from "@/assets/fungro-icon.svg";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const isTeenPage = location === "/" || location === "/teen";
  const isCompanyPage = location === "/company";
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200/70 glass' 
          : 'bg-gradient-to-r from-slate-50 to-indigo-50 shadow-lg'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img 
                  src={fungroIcon} 
                  alt="Funngro Logo" 
                  className="h-8 w-auto"
                />
                <motion.div
                  className="hidden sm:block"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                    Funngro
                  </span>
                </motion.div>
              </div>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { href: "/teen", label: "For Teens", icon: Sparkles, active: isTeenPage },
              { href: "/company", label: "For Companies", icon: Zap, active: isCompanyPage },
              { href: "#", label: "About", icon: null, active: false },
              { href: "#", label: "Blog", icon: null, active: false }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={item.href}>
                  <span className={`
                    relative font-semibold transition-all duration-300 cursor-pointer inline-flex items-center space-x-1 py-2 px-4 rounded-lg hover:scale-105 hover:shadow-md
                    ${item.active 
                      ? "text-indigo-600 bg-indigo-50 shadow-sm border border-indigo-100" 
                      : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50"
                    }
                  `}>
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                    {item.active && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="hidden md:flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              variant="outline" 
              className="border-ocean-200 text-ocean-600 hover:bg-ocean-50 hover:border-ocean-300 transition-all duration-300 hover-scale"
            >
              Login
            </Button>
            <Button className="bg-gradient-to-r from-ocean-500 to-ocean-600 text-white hover-lift shadow-professional hover:from-ocean-600 hover:to-ocean-700">
              <Sparkles className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </motion.div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover-scale"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden glass border-t border-neutral-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1 stagger-children">
              {[
                { href: "/teen", label: "For Teens", icon: Sparkles },
                { href: "/company", label: "For Companies", icon: Zap },
                { href: "#", label: "About", icon: null },
                { href: "#", label: "Blog", icon: null }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ "--stagger-delay": index } as any}
                >
                  <Link href={item.href}>
                    <div className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-700 hover:text-ocean-600 hover:bg-ocean-50 transition-all duration-300">
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                className="border-t border-neutral-200 pt-3 mt-3 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  variant="outline" 
                  className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  Login
                </Button>
                <Button className="w-full gradient-primary text-white">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
