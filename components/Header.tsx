import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PageView } from '../App';

interface HeaderProps {
  onNavigate: (page: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (page: PageView) => {
    setIsMenuOpen(false);
    onNavigate(page);
  };

  return (
    <div className="w-full font-sans sticky top-0 z-50">
      {/* Navbar */}
      <nav className="bg-[#F2F2F0]/90 backdrop-blur-md w-full border-b-2 border-deep-black px-4 md:px-8 py-4 flex justify-between items-center relative z-50">
        {/* Logo */}
        <button 
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-2 border-2 border-black bg-black text-white px-2 py-1 shadow-hard-sm hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          <span className="font-sans text-xl font-bold tracking-tighter">
            TAVUS
          </span>
        </button>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 mr-4">
                <button 
                  onClick={() => handleNavigate('login')}
                  className="text-sm font-bold uppercase tracking-widest hover:underline"
                >
                  Login
                </button>
                <button 
                  onClick={() => handleNavigate('signup')}
                  className="bg-tavus-pink text-black border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-hard-sm hover:translate-y-0.5 hover:shadow-none transition-all"
                >
                  Get Started
                </button>
            </div>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white border-2 border-deep-black p-2 shadow-hard-sm hover:translate-y-0.5 hover:shadow-none transition-all z-50"
            >
                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F2F2F0] border-b-2 border-black p-4 flex flex-col gap-4 shadow-xl z-40 md:hidden animate-in slide-in-from-top-2">
            <button 
                onClick={() => handleNavigate('home')}
                className="w-full text-left p-2 font-serif text-2xl border-b border-gray-300"
            >
                Home
            </button>
             <button 
                onClick={() => handleNavigate('login')}
                className="w-full text-left p-2 font-serif text-2xl border-b border-gray-300"
            >
                Login
            </button>
             <button 
                onClick={() => handleNavigate('signup')}
                className="w-full text-left p-2 font-serif text-2xl border-b border-gray-300"
            >
                Get Started
            </button>
            <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-black text-white p-3 font-bold uppercase text-xs border-2 border-black">
                    Docs
                </button>
                <button className="flex-1 bg-white text-black p-3 font-bold uppercase text-xs border-2 border-black">
                    Contact
                </button>
            </div>
        </div>
      )}
    </div>
  );
};