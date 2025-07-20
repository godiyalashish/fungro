import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import fungroIcon from "@/assets/fungro-icon.svg";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isTeenPage = location === "/" || location === "/teen";
  const isCompanyPage = location === "/company";
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src={fungroIcon} 
                alt="Funngro Logo" 
                className="h-8 w-auto cursor-pointer"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/teen">
              <span className={`font-semibold transition-colors cursor-pointer ${
                isTeenPage ? "text-modern-primary" : "text-gray-700 hover:text-modern-primary"
              }`}>
                For Teens
              </span>
            </Link>
            <Link href="/company">
              <span className={`font-semibold transition-colors cursor-pointer ${
                isCompanyPage ? "text-modern-primary" : "text-gray-700 hover:text-modern-primary"
              }`}>
                For Companies
              </span>
            </Link>
            <a href="#" className="text-gray-700 hover:text-modern-primary font-semibold transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-modern-primary font-semibold transition-colors">
              Blog
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-modern-primary text-modern-primary hover:bg-modern-primary hover:text-white">
              Login
            </Button>
            <Button className="bg-modern-secondary hover:bg-sky-600 text-white">
              Sign Up
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/teen">
              <span className={`block px-3 py-2 font-semibold cursor-pointer ${
                isTeenPage ? "text-modern-primary" : "text-gray-700"
              }`}>
                For Teens
              </span>
            </Link>
            <Link href="/company">
              <span className={`block px-3 py-2 font-semibold cursor-pointer ${
                isCompanyPage ? "text-modern-primary" : "text-gray-700"
              }`}>
                For Companies
              </span>
            </Link>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-modern-primary">
              About
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-modern-primary">
              Blog
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" className="w-full border-modern-primary text-modern-primary hover:bg-modern-primary hover:text-white">
                Login
              </Button>
              <Button className="w-full bg-modern-secondary hover:bg-sky-600 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
