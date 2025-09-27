import { Separator } from './ui/separator';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import osisLogo from 'figma:asset/435879a11c370ff8a225ed5b72b5d5bfa354f83b.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Struktur Organisasi', href: '#structure' },
    { name: 'Program Kerja', href: '#programs' },
    { name: 'Ekstrakurikuler', href: '#extracurricular' },
    { name: 'Prestasi', href: '#achievements' },
    { name: 'Kontak', href: '#contact' }
  ];

  const programs = [
    { name: 'MPLS (Masa Pengenalan Lingkungan Sekolah)', href: '#' },
    { name: 'Pekan Olahraga dan Seni (PORSENI)', href: '#' },
    { name: 'Lomba Cerdas Cermat', href: '#' },
    { name: 'Bakti Sosial', href: '#' },
    { name: 'Pemilihan Duta Sekolah', href: '#' },
    { name: 'Study Tour', href: '#' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={osisLogo} alt="Logo OSIS" className="w-10 h-10 object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">OSIS</span>
                <span className="text-sm text-gray-400">MAN 1 Model Bengkulu</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Organisasi Siswa Intra Sekolah MAN 1 Model Bengkulu yang berkomitmen 
              mengembangkan potensi siswa dan membangun karakter pemimpin masa depan.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Jl. Zainul Arifin No. 1, Bengkulu</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 736 123456</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-primary" />
                <span>osis@man1modelbengkulu.sch.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Program Kerja</h3>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold mb-4">Tetap Terhubung</h3>
            <p className="text-gray-300 text-sm mb-4">
              Dapatkan informasi terbaru tentang kegiatan dan program OSIS kami.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-r-lg text-sm hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-300 text-sm">
            © {currentYear} OSIS MAN 1 Model Bengkulu. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}