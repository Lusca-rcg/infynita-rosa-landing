
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <Gift className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ganhe 15% de Desconto
            </h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto px-4">
              Cadastre-se na nossa newsletter e seja a primeira a saber sobre novos lançamentos, 
              promoções exclusivas e dicas de estilo!
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="pl-10 py-4 sm:py-6 text-gray-900 border-white/20 bg-white/10 backdrop-blur-sm placeholder:text-white/70 focus:bg-white focus:placeholder:text-gray-400 text-sm sm:text-base"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-white text-pink-600 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 whitespace-nowrap font-semibold text-sm sm:text-base"
              >
                Cadastrar
              </Button>
            </div>
            <p className="text-xs sm:text-sm opacity-75 mt-4">
              *Promoção válida para primeira compra. Não enviamos spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
