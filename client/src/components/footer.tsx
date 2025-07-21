import { Link } from "wouter";
import { Twitter, Linkedin, Facebook, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import fungroIcon from "@/assets/fungro-icon.svg";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-ocean-900 to-slate-800 text-white py-16 overflow-hidden">
      {/* Background decoration with new theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,115,134,0.4),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(253,146,107,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(68,205,116,0.2),transparent_70%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={fungroIcon}
                alt="Funngro Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-coral-400 to-amber-400 bg-clip-text text-transparent">
                Funngro
              </span>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Empowering teens and companies to realize their full potential through innovative project-based work.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
                { icon: Facebook, href: "#", color: "hover:text-blue-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-neutral-400 ${social.color} transition-all duration-300 hover-scale`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Teens</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/teen"><span className="hover:text-white transition-colors cursor-pointer">How to Start</span></Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Download</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Companies</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/company"><span className="hover:text-white transition-colors cursor-pointer">Hire Talent</span></Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Ideas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Funngro. All rights reserved. Built with ❤️ for the next generation.</p>
        </div>
      </div>
    </footer>
  );
}
