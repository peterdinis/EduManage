"use client"

import {FC, useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Container } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">EduManage</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex space-x-4 pt-2">
                <Button variant="outline">
                  Login
                </Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;