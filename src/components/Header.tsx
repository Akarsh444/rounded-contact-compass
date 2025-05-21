
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          setActiveLink(`#${section.getAttribute('id') || ''}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
    
    // Smooth scroll to the section
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="overflow-hidden rounded-full w-12 h-12 border-2 border-ngo-primary">
            <img 
              src="https://prashraya.org/wp-content/uploads/elementor/thumbs/354150415_220248024272103_8189691252379910077_n-qtir2fw9zqtc7qrxft7est9yuk34qnuch8ihrepctc.jpg" 
              alt="Prashraya NGO Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-3 text-xl font-bold text-ngo-primary">Prashraya</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeLink === item.href ? 
                  "text-white bg-ngo-primary animate-shrink-pill" : 
                  "text-gray-700 hover:text-ngo-primary hover:bg-ngo-accent"
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white absolute w-full transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-80 py-4 shadow-md" : "max-h-0 overflow-hidden"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeLink === item.href ? 
                  "text-white bg-ngo-primary" : 
                  "text-gray-700 hover:text-ngo-primary"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
