import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { label: t('header.nav.home'), href: '/' },
    { label: t('header.nav.about'), href: '/about-us' },
    { label: t('header.nav.services'), href: '/services' },
    { label: t('header.nav.projects'), href: '/projects' },
    { label: t('header.nav.contact'), href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-lg' 
          : 'bg-black/80 lg:bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full h-16 gap-5">
          
          {/* Logo */}
          <div className="h-10 w-auto">
            <Link to="/" className="cursor-pointer inline-block h-10">
              <img 
                src="/assets/logos/eder-contractor-logo-white-symbol.png" 
                alt="Eder Contractor" 
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center gap-x-[2.88rem] float-right h-5 relative flex max-[991px]:hidden">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-white cursor-pointer font-semibold h-5 relative align-top inline-block hover:text-orange-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-x-[1.63rem] h-16">
            {/* Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Get a Quote Button - Hidden on mobile/tablet */}
            <div className="h-16 w-44 inline-block max-[991px]:hidden">
              <Link 
                to="/contact" 
                className="group relative flex items-center justify-center h-16 w-44 py-5 px-10 bg-orange-600 border-2 border-orange-600 text-white text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-white"
                id="header-cta"
              >
                <div className="relative w-full flex items-center justify-center overflow-hidden h-6">
                  <span className="relative whitespace-nowrap transition-all duration-300 group-hover:-translate-y-full block">
                    {t('header.cta')}
                  </span>
                  <span className="absolute whitespace-nowrap translate-y-full transition-all duration-300 group-hover:translate-y-0 block">
                    {t('header.cta')}
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`max-[991px]:block lg:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-10 px-5 gap-5">
          {/* Mobile Language Switcher */}
          <div className="lg:hidden mb-4">
            <LanguageSwitcher />
          </div>
          
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-white font-semibold text-lg hover:text-orange-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="group relative flex items-center justify-center mt-4 h-16 py-4 px-8 bg-orange-600 border-2 border-orange-600 text-white text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative w-full flex items-center justify-center overflow-hidden h-6">
              <span className="relative whitespace-nowrap transition-all duration-300 group-hover:-translate-y-full block">
                {t('header.cta')}
              </span>
              <span className="absolute whitespace-nowrap translate-y-full transition-all duration-300 group-hover:translate-y-0 block">
                {t('header.cta')}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
