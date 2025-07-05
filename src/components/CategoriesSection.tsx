
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CategoriesSection = () => {
  const categories = [
    {
      title: "Vestidos",
      description: "Elegância em cada ocasião",
      icon: "👗",
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Blusas",
      description: "Conforto e estilo no dia a dia",
      icon: "👚",
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Calças",
      description: "Modelagem perfeita para você",
      icon: "👖",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Conjuntos",
      description: "Looks completos e modernos",
      icon: "✨",
      color: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossas <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Categorias</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Encontre a peça perfeita para cada momento da sua vida
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200 cursor-pointer"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
