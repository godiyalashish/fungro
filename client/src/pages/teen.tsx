import SEOHead from "@/components/seo-head";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECT_CATEGORIES, TEEN_FAQS, COMPANY_LOGOS } from "@/lib/constants";
import { Heart, BookOpen, Award, DollarSign, Share2, Video, Globe, FileText, Palette, Smartphone } from "lucide-react";

// Icon mapping for project categories
const categoryIconMap = {
  "share-2": Share2,
  video: Video,
  globe: Globe,
  "file-text": FileText,
  palette: Palette,
  smartphone: Smartphone
};

export default function TeenPage() {
  return (
    <>
      <SEOHead 
        title="Funngro - Teen Freelancing Platform | Earn Money with Real Projects"
        description="Join 40,00,000+ teenagers earning money through real projects with 4,000+ companies. Start your freelancing journey today with Funngro!"
        keywords="teen freelancing, student jobs, teenage entrepreneurs, earn money online, project-based work, teen talent"
        canonicalUrl="https://www.funngro.com/teen"
      />
      
      <HeroSection type="teen" />
      <StatsSection />
      
      {/* Why Work in Teens Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why work in your Teens?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Warren Buffet, Bill Gates, Steve Jobs, all started working in their Teens, do you need a better reason?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-modern-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">First Income</h3>
              <p className="text-gray-600">Work with real companies and earn money</p>
            </div>
            
            <div className="text-center">
              <div className="bg-modern-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">Make your passion as your profession</p>
            </div>
            
            <div className="text-center">
              <div className="bg-modern-success text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning</h3>
              <p className="text-gray-600">Experiential learning by working on real projects</p>
            </div>
            
            <div className="text-center">
              <div className="bg-modern-accent text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600">Build your profile by getting experience certificates</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hundreds of live projects in each category. Register for categories of your choice in Funngro App and start working with companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECT_CATEGORIES.map((category, index) => {
              const IconComponent = categoryIconMap[category.icon as keyof typeof categoryIconMap];
              return (
                <Card key={index} className={`bg-gradient-to-br ${category.gradient} text-white hover:shadow-xl transition-shadow`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <p className="text-white/90">{category.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Trusted Companies Section */}
      <section className="py-16 gradient-modern text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We are Trusted by
            </h2>
            <p className="text-xl">
              Hundreds of companies working with Funngro to find smart talent
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {COMPANY_LOGOS.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={logo} 
                  alt={`Company ${index + 1}`}
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials type="teen" />
      <FAQSection faqs={TEEN_FAQS} />
      <ContactForm type="teen" />
      
      {/* CTA Section */}
      <section className="py-16 gradient-modern text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            BE INDEPENDENT BEFORE 18!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of teens who are already earning and learning with Funngro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-modern-accent text-gray-900 hover:bg-yellow-500 px-8 py-3 text-lg font-semibold">
              Download App Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-modern-primary px-8 py-3 text-lg font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
