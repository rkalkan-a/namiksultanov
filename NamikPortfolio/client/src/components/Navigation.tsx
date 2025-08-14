import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/media", label: t("nav.media") },
    { path: "/publicity", label: t("nav.publicity") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold text-white hover:text-gray-300 transition-colors">
              Namik Sultanov
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link text-lg font-medium ${
                  isActive(item.path) 
                    ? "active text-white border-b-2 border-white" 
                    : "text-white hover:text-gray-300"
                }`}
                data-testid={`nav-${item.path.slice(1) || 'home'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl text-white hover:text-gray-300"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-600 py-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block nav-link text-lg font-medium ${
                    isActive(item.path) 
                      ? "text-white font-semibold" 
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.path.slice(1) || 'home'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
