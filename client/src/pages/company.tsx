import SEOHead from "@/components/seo-head";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECT_IDEAS, COMPANY_FAQS, COMPANY_LOGOS } from "@/lib/constants";
import { ArrowRight, Lightbulb, DollarSign, BarChart3, FileText, Palette, TestTube, Mic, Search, Database, Globe, Share2, TrendingUp, Video } from "lucide-react";
import { motion } from "framer-motion";

// Icon mapping for project ideas
const iconMap = {
  palette: Palette,
  globe: Globe,
  "share-2": Share2,
  mic: Mic,
  "trending-up": TrendingUp,
  video: Video
};

export default function CompanyPage() {
  const services = [
    {
      title: "Research & Survey",
      description: "Run surveys and complete research assignments",
      icon: <Search className="w-6 h-6" />,
      color: "bg-modern-primary"
    },
    {
      title: "Data Entry",
      description: "Create databases with data research skills",
      icon: <Database className="w-6 h-6" />,
      color: "bg-modern-secondary"
    },
    {
      title: "Voice Over",
      description: "Get content recorded with voice over artists",
      icon: <Mic className="w-6 h-6" />,
      color: "bg-modern-success"
    },
    {
      title: "Content Writing",
      description: "Blogs, articles, website content and more",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-modern-warning"
    },
    {
      title: "Graphics Design",
      description: "Logos, brochures, pamphlets, website posts",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-pink-500"
    },
    {
      title: "Testing",
      description: "Get products tested and feedback on apps, websites",
      icon: <TestTube className="w-6 h-6" />,
      color: "bg-modern-error"
    }
  ];
  
  return (
    <>
      <SEOHead 
        title="Funngro - Hire Talented Teenagers | Cost-Effective Project Solutions"
        description="Hire talented teenagers for your projects. Cost-effective, innovative solutions from 40,00,000+ teen freelancers across 18+ categories."
        keywords="hire teenagers, teen talent, cost-effective projects, teenage freelancers, company hiring, project outsourcing"
        canonicalUrl="https://www.funngro.com/company"
      />
      
      <HeroSection type="company" />
      <StatsSection />
      
      {/* Project Ideas Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Project{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Ideas
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Cost-effective, innovative and timely delivery of projects by smartest talent on planet (Teenlancers)
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {[
              {
                title: "Build your brand",
                price: "₹2,000",
                description: "Get your logos, brochure designed professionally - 5 Samples",
                icon: "palette",
                gradient: "from-purple-500 to-indigo-600"
              },
              {
                title: "Customize your website", 
                price: "₹1,000-9,000",
                description: "Get a professional website designed to increase business growth",
                icon: "globe",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Reach more customers",
                price: "₹5,000", 
                description: "Get Teenlancers to manage your social media handles",
                icon: "share-2",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Share your message",
                price: "₹1,500",
                description: "Voice over in 15 different languages", 
                icon: "mic",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Boost your growth",
                price: "₹5,000-₹10,000",
                description: "Get 100's of Teenlancers to increase your reach through social media",
                icon: "trending-up", 
                gradient: "from-pink-500 to-rose-500"
              },
              {
                title: "Engage your audience",
                price: "₹2,500",
                description: "Create an explainer video for your company to get new customers",
                icon: "video",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((project, index) => {
              const IconComponent = iconMap[project.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{ "--stagger-delay": index } as any}
                >
                  <Card className="group bg-white border border-neutral-200 hover:border-neutral-300 hover-lift shadow-lg hover:shadow-professional-lg transition-all duration-500 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center flex-1">
                          <motion.div 
                            className={`bg-gradient-to-r ${project.gradient} w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-glow`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </motion.div>
                          <h3 className="text-xl font-bold text-neutral-900 group-hover:text-purple-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                        <motion.span 
                          className="text-2xl font-bold text-green-600 whitespace-nowrap ml-4"
                          initial={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring" }}
                        >
                          {project.price}
                        </motion.span>
                      </div>
                      
                      <p className="text-neutral-600 mb-6 leading-relaxed flex-1">
                        {project.description}
                      </p>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full gradient-primary text-white hover-lift shadow-professional group-hover:shadow-glow">
                          Start Now 
                          <motion.div
                            className="ml-2 inline-block"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <Testimonials type="company" />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Talent for all your needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of talented teenagers for all your business needs. Register your interest and start working with smartest talent around.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${service.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <a href="#" className="text-modern-secondary hover:text-sky-700 font-semibold">
                    Sample projects →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Work with Teens Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why work with Teens
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Teenagers are the smarter generation, more clued in to your customer mindset, not spoilt by years of experience hence being cost effective delivery of high quality work.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-modern-accent text-gray-900 w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      No longer worry about using the same old ideas. Get innovative thinking, processes and style of working. Helps companies grow rapidly with timely project delivery.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-modern-success text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                    <p className="text-gray-600">
                      Get your work done significantly lower cost, save as much as 50% on cost. Help the next generation the way someone helped you
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button className="bg-modern-secondary hover:bg-sky-700 text-white">
                  Start Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-modern-secondary text-primary hover:bg-sky-50">
                  Talk to Us
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern workspace collaboration" 
                className="rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted Companies Section */}
      <section className="py-16 gradient-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We are trusted by
            </h2>
            <p className="text-xl text-white">
              Hundreds of companies and partners working with Funngro to find smart talent
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
      
      <FAQSection faqs={COMPANY_FAQS} />
      <ContactForm type="company" />
      
      {/* CTA Section */}
      <section className="py-16 gradient-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to hire talented teenagers?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of companies who are already working with Funngro's talented teens
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-modern-accent text-gray-900 hover:bg-yellow-500 px-8 py-3 text-lg font-semibold">
              Hire Teenlancer
            </Button>
            <Button variant="outline" className="border-2 border-white hover:bg-white hover:text-modern-secondary px-8 py-3 text-lg font-semibold text-primary">
              Talk to Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
