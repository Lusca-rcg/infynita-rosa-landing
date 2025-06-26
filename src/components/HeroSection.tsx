
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 text-pink-200 opacity-50">
        <Sparkles className="h-16 w-16" />
      </div>
      <div className="absolute bottom-20 right-10 text-rose-200 opacity-50">
        <Sparkles className="h-20 w-20" />
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Moda que
                <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Celebra
                </span>
                Você
              </h2>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Descubra nossa coleção exclusiva de moda feminina plus size. 
                Peças que valorizam suas curvas com elegância, conforto e muito estilo.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-6 text-lg group"
              >
                Ver Coleção
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-6 text-lg"
              >
                Sobre Nós
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-pink-600">1000+</div>
                <div className="text-gray-600">Clientes Felizes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600">Produtos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">5★</div>
                <div className="text-gray-600">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl h-96 lg:h-[600px] flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👗</div>
                <p className="text-xl font-semibold">Sua Moda Plus Size</p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-pink-100">
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 rounded-full p-3">
                  <Sparkles className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Entrega Grátis</div>
                  <div className="text-sm text-gray-600">Para compras acima de R$ 199</div>
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
