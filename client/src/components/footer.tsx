import { Link } from "wouter";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg" 
              alt="Funngro Logo" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Empowering teens and companies to realize their full potential through innovative project-based work.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
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
