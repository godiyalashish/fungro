import { Card, CardContent } from "@/components/ui/card";
import { TEEN_TESTIMONIALS, COMPANY_TESTIMONIALS } from "@/lib/constants";

interface TestimonialsProps {
  type: "teen" | "company";
}

export default function Testimonials({ type }: TestimonialsProps) {
  const testimonials = type === "teen" ? TEEN_TESTIMONIALS : COMPANY_TESTIMONIALS;
  const title = type === "teen" ? "Happy Funngro Members" : "Happy Funngro Members";
  const subtitle = type === "teen" 
    ? "Thousands of your friends are on Funngro and their lives are changing for better. Read on for real stories"
    : "Hundreds of companies have worked with talented teens on Funngro. Read on for their views";
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl hover:border-indigo-200/60 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-indigo-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-indigo-600 font-medium">
                      {type === "teen" ? (testimonial as any).role : (testimonial as any).company}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed italic text-lg">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
