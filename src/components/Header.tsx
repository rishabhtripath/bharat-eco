import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="relative top-5 left-1/2 -translate-x-1/2 w-[92%] h-[72px] bg-secondary/75 border border-white/25 rounded-2xl flex items-center justify-between px-6 md:px-8 backdrop-blur-lg z-50">
      {/* Logo */}
      <Link to="/" className="font-display text-xl flex items-center top-2 relative md:text-2xl tracking-wider text-primary">
        <img className="w-28 h-20" src="favicon.ico" alt="Bharatecovolt" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-foreground/90 hover:text-foreground transition-opacity duration-200 text-base ${
              location.pathname === link.path ? "text-primary" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 mt-4 bg-secondary/95 border border-white/25 rounded-2xl backdrop-blur-lg p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-foreground/90 hover:text-foreground transition-opacity duration-200 text-lg ${
                location.pathname === link.path ? "text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
