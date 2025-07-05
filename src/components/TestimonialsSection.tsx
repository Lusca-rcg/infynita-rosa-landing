
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      comment: "Finalmente encontrei uma loja que entende as necessidades das mulheres plus size. As roupas são lindas e o caimento é perfeito!",
      location: "São Paulo, SP"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "A qualidade dos tecidos é excepcional e o atendimento é maravilhoso. Me sinto mais confiante e elegante com as peças da Infynita!",
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Lucia Santos",
      rating: 5,
      comment: "Comprei três vestidos e todos ficaram perfeitos! A entrega foi rápida e as peças vieram bem embaladas. Recomendo muito!",
      location: "Belo Horizonte, MG"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossas <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">clientes</span> dizem
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Histórias reais de mulheres que se apaixonaram pela nossa moda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-pink-100 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
