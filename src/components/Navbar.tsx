
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const cartItems = getTotalItems();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-amber-600">Essa</span>
              <span className="text-blue-700">Bijoux</span>
              <span className="text-amber-600 font-serif relative -top-1">Chic</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Home</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">About</Link>
            <Link to="/products" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Products</Link>
            <Link to="/gallery" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Gallery</Link>
            <Link to="/location" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Contact</Link>
            
            <Link to="/dashboard" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">
              Dashboard
            </Link>

            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              <Link to="/products">Shop Now</Link>
            </Button>
            
            <Link to="/checkout" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-amber-600 transition-colors" />
              {cartItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems}
                </div>
              )}
            </Link>

            <Link to="/admin-login">
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-100">
                <Shield className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/checkout" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-amber-600 transition-colors" />
              {cartItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems}
                </div>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-amber-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/gallery" 
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/location" 
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Location & Contact
            </Link>
            <Link 
              to="/dashboard" 
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Button 
              variant="outline" 
              className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/products">Shop Now</Link>
            </Button>
            <Link 
              to="/admin-login" 
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="outline" size="sm" className="w-full border-gray-300 text-gray-600 hover:bg-gray-100">
                <Shield className="w-4 h-4 mr-2" />
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
