import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import osisLogo from 'figma:asset/435879a11c370ff8a225ed5b72b5d5bfa354f83b.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={osisLogo} alt="Logo OSIS" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-primary">OSIS</span>
            <span className="text-xs text-muted-foreground">MAN 1 Model Bengkulu</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Beranda
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Tentang Kami
          </button>
          <button
            onClick={() => scrollToSection('structure')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Struktur Organisasi
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Kontak
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection('structure')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Struktur Organisasi
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Kontak
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}