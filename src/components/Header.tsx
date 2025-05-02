import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white shadow-subtle z-10">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ChefHat className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">NutriPlanner</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-primary-500 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-500 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-500 transition-colors">Testimonials</a>
            
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn btn-primary btn-md">
                Go to Dashboard
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary btn-md">
                  Sign Up Free
                </Link>
              </div>
            )}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-primary-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-primary-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-primary-500 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              
              {isAuthenticated ? (
                <Link 
                  to="/dashboard" 
                  className="btn btn-primary btn-md w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Go to Dashboard
                </Link>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/login" 
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-primary btn-md w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up Free
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;