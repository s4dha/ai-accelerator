import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-26">
            {/* Logo */}
              <Link 
                to="/" 
                className="flex items-center space-x-2"
                onClick={(e) => {
                  // Prevent default link behavior
                  e.preventDefault();
                  // Navigate to home page
                  window.location.href = '/';
                  // Scroll to top
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }}
              >
              <img
                src="/websitelogo_new.png"
                alt="SCG AI-volution Logo"
                className="w-24 h-28 object-contain"
              />
              <span className="font-bold text-xl">
                <span className="text-white"> SCG </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  AiCCELERATE
                </span>
              </span>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Timeline
            </button>

            <Link
              to="/featured-projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Featured Projects
            </Link>

            <Link
            to="/faq"
            className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
              </Link>
        
            <Link
              to="/submit-use-case"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Submit Use Case
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Features
              </button>
              <Link
                to="/featured-projects"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
              >
              Featured Case Studies
              </Link>
              <Link
                to="/submit-use-case"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center mt-2"
              >
                Submit Use Case
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
