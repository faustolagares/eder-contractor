import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'Shop', href: '/shop' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 py-8 transition-all duration-300 max-[767px]:py-[25px] max-[479px]:py-5 ${
        isScrolled 
          ? 'bg-black shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="h-16 px-4 w-[84.38rem] m-auto max-w-full">
        <div className="flex items-center justify-between w-full max-w-[82.50rem] h-16 gap-5 mx-auto">
          
          {/* Logo */}
          <div className="h-8 w-44 max-[479px]:w-[155px]">
            <Link to="/" className="text-zinc-800 cursor-pointer float-left h-8 relative w-44 max-[767px]:pl-[10px] max-[479px]:pl-0">
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/646f0323522f1b87570de476_Logo.png" 
                alt="Construction Template Logo"
                className="h-8 max-w-full align-middle w-44 max-[479px]:w-[155px] inline-block" 
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
            {/* Cart Icon */}
            <div className="h-9 relative w-9 inline-block">
              <Link 
                to="/cart" 
                className="relative flex items-center justify-center text-white cursor-pointer h-9 w-9 border-2 border-white rounded-full hover:border-orange-600 transition-colors duration-200"
              >
                <ShoppingCart size={20} className="text-white" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center text-xs font-medium text-white min-w-[1.25rem]">
                  0
                </div>
              </Link>
            </div>

            {/* Get a Quote Button - Hidden on mobile/tablet */}
            <div className="h-16 w-44 inline-block max-[991px]:hidden">
              <Link 
                to="/contact-us" 
                className="group relative flex flex-col items-center justify-center h-16 w-44 py-5 px-10 bg-orange-600 border-2 border-orange-600 font-semibold overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-white max-[479px]:py-[14px] max-[479px]:px-[30px] max-[991px]:py-4"
              >
                <div className="relative flex items-center justify-center h-5 overflow-hidden">
                  <div className="relative h-5 transition-all duration-300 group-hover:-translate-y-full">
                    Get a Quote
                  </div>
                  <div className="absolute h-5 left-0 translate-y-full transition-all duration-300 group-hover:translate-y-0">
                    Get a Quote
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="hidden max-[991px]:block text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            to="/contact-us"
            className="mt-4 bg-orange-600 text-white font-semibold py-4 px-8 text-center hover:bg-transparent hover:border-2 hover:border-orange-600 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
