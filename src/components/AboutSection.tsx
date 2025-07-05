
import React from 'react';
import { Heart, Users, Award, Truck } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Amor Próprio",
      description: "Acreditamos que toda mulher merece se sentir linda e confiante"
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Moda para todos os corpos, todos os estilos, todas as personalidades"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Tecidos selecionados e acabamentos impecáveis em cada peça"
    },
    {
      icon: Truck,
      title: "Conveniência",
      description: "Entrega rápida e segura para todo o Brasil"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Sobre a <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Infynita Modas</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Nascemos com a missão de transformar a relação das mulheres plus size com a moda. 
                Acreditamos que estilo não tem tamanho e que cada mulher merece se sentir poderosa, 
                elegante e única.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Nossa curadoria especial garante peças que valorizam suas curvas naturais, 
                proporcionando conforto sem abrir mão da sofisticação.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl h-64 sm:h-80 lg:h-96 xl:h-[500px] flex items-center justify-center shadow-xl mx-auto max-w-md lg:max-w-none">
              <div className="text-center text-white">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">💕</div>
                <p className="text-lg sm:text-xl font-semibold">Beleza em Cada Tamanho</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
