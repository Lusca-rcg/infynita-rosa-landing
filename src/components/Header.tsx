
import React, { useState } from 'react';
import { Menu, ShoppingBag, User, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-pink-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Infynita Modas
            </h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors text-sm xl:text-base">Início</a>
            <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors text-sm xl:text-base">Produtos</a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors text-sm xl:text-base">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors text-sm xl:text-base">Contato</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-500 h-8 w-8 sm:h-10 sm:w-10">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-500 h-8 w-8 sm:h-10 sm:w-10">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-500 h-8 w-8 sm:h-10 sm:w-10">
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-pink-100 pt-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2 px-4 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#products" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2 px-4 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2 px-4 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-pink-500 transition-colors py-2 px-4 rounded-lg hover:bg-pink-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
