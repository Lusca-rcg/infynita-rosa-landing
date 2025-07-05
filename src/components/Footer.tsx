
import React from 'react';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Infynita Modas
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Moda feminina plus size que celebra a beleza única de cada mulher. 
              Estilo, conforto e elegância em cada peça.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Início</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Produtos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Guia de Tamanhos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Política de Troca</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Como Comprar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Prazo de Entrega</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Formas de Pagamento</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base break-all">contato@infynitamodas.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Infynita Modas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
