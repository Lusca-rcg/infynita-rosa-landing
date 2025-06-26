
import React from 'react';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Infynita Modas
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Moda feminina plus size que celebra a beleza única de cada mulher. 
              Estilo, conforto e elegância em cada peça.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors">Início</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-pink-400 transition-colors">Produtos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Guia de Tamanhos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Política de Troca</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Como Comprar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Prazo de Entrega</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Formas de Pagamento</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <span className="text-gray-400">contato@infynitamodas.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Infynita Modas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
