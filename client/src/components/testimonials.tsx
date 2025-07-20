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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {type === "teen" ? testimonial.role : (testimonial as any).company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
