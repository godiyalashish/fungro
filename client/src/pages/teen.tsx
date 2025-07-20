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
import { motion } from "framer-motion";

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
      <section className="py-20 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Why work in your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Teens?
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Warren Buffet, Bill Gates, Steve Jobs, all started working in their Teens. 
              <br />
              <span className="font-semibold text-purple-600">Do you need a better reason?</span>
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {[
              {
                icon: DollarSign,
                title: "First Income",
                description: "Work with real companies and earn money",
                gradient: "from-green-400 to-emerald-500",
                delay: 0
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Make your passion as your profession",
                gradient: "from-pink-400 to-rose-500",
                delay: 1
              },
              {
                icon: BookOpen,
                title: "Learning",
                description: "Experiential learning by working on real projects",
                gradient: "from-blue-400 to-indigo-500",
                delay: 2
              },
              {
                icon: Award,
                title: "Recognition",
                description: "Build your portfolio and gain recognition",
                gradient: "from-yellow-400 to-orange-500",
                delay: 3
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                style={{ "--stagger-delay": index } as any}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${item.gradient} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-professional hover-lift group-hover:shadow-glow`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <item.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
