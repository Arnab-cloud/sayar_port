import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useAuth } from "@/hooks/useAuth";
import UserMenu from "./UserMenu";

interface HeaderProps {
  onOpenAuthModal: () => void;
  onOpenBadgeModal: () => void;
}

export default function Header({ onOpenAuthModal, onOpenBadgeModal }: HeaderProps) {
  const { theme, toggleTheme: contextToggleTheme } = useTheme();
  const { currentUser } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  
  // Direct theme toggle function
  const handleToggleTheme = () => {
    const html = document.documentElement;
    
    // Check current state and toggle
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    
    // Update context
    contextToggleTheme();
    
    // Force a repaint to ensure all styles update
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger a reflow
    document.body.style.display = '';
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold text-xl">
              SB
            </div>
            <span className="font-bold text-xl tracking-tight">Sayar Basu</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleToggleTheme}
                className="h-9 w-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <i className="ri-sun-line"></i>
                ) : (
                  <i className="ri-moon-line"></i>
                )}
              </button>
              
              {!currentUser ? (
                <button
                  onClick={onOpenAuthModal}
                  className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <span>Sign In</span>
                  <i className="ri-login-box-line ml-2"></i>
                </button>
              ) : (
                <UserMenu onOpenBadgeModal={onOpenBadgeModal} />
              )}
            </div>
          </div>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full left-0 right-0 transition-all duration-300 ${
        mobileMenuOpen ? 'block' : 'hidden'
      }`}>
        <div className="px-4 py-3 space-y-3">
          <a 
            href="#about" 
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            {!currentUser ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuthModal();
                }}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBadgeModal();
                }}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                View Badge
              </button>
            )}
            <button 
              onClick={handleToggleTheme}
              className="h-9 w-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <i className="ri-sun-line"></i>
              ) : (
                <i className="ri-moon-line"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
