
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-4 sm:top-20 sm:left-10 text-pink-200 opacity-50">
        <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
      </div>
      <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 text-rose-200 opacity-50">
        <Sparkles className="h-10 w-10 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />
      </div>
      
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Moda que
                <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Celebra
                </span>
                Você
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
                Descubra nossa coleção exclusiva de moda feminina plus size. 
                Peças que valorizam suas curvas com elegância, conforto e muito estilo.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group w-full sm:w-auto"
              >
                Ver Coleção
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
              >
                Sobre Nós
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center sm:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600">1000+</div>
                <div className="text-gray-600 text-sm sm:text-base">Clientes Felizes</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600 text-sm sm:text-base">Produtos</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600">5★</div>
                <div className="text-gray-600 text-sm sm:text-base">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] flex items-center justify-center shadow-2xl mx-auto max-w-md lg:max-w-none">
              <div className="text-center text-white">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">👗</div>
                <p className="text-lg sm:text-xl font-semibold">Sua Moda Plus Size</p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-pink-100 max-w-xs">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-pink-100 rounded-full p-2 sm:p-3">
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Entrega Grátis</div>
                  <div className="text-xs sm:text-sm text-gray-600">Para compras acima de R$ 199</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
