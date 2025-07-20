import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

interface HeroSectionProps {
  type: "teen" | "company";
}

export default function HeroSection({ type }: HeroSectionProps) {
  if (type === "teen") {
    return (
      <section className="gradient-modern text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-modern-accent text-gray-900 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                ⚡ As seen on Shark Tank India
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                TEEN<span className="text-modern-accent">LANCERS</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90">
                Real companies, real projects, real earnings and real money
              </p>
              <p className="text-lg mb-8 text-white/80">
                Smart opportunities for the smart generation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button className="bg-modern-accent hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
                <Button variant="outline" className="border-white text-primary hover:bg-white hover:text-modern-primary px-8 py-3 text-lg">
                  Learn More
                </Button>
              </div>
              <div className="flex gap-4">
                <img 
                  src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png" 
                  alt="Download on App Store" 
                  className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img 
                  src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png" 
                  alt="Get it on Google Play" 
                  className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Teen freelancer working on laptop" 
                className="rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="gradient-accent text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-modern-accent text-gray-900 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              ⚡ As seen on Shark Tank India
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart <span className="text-modern-accent">Talent</span> for smart companies
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Cost effective, timely delivery, innovative ideas while you help the next generation
            </p>
            <p className="text-lg mb-8 text-white/80">
              Talented teenagers for your company
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button className="bg-modern-accent hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg font-semibold">
                Hire Teenlancer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-primary hover:bg-white hover:text-modern-secondary px-8 py-3 text-lg">
                Talk to Us
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-sm text-white/80 mb-2">Popular:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Blogs</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Social Media</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Video Creation</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">Sales</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business professionals collaborating" 
              className="rounded-2xl shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
