
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-amber-700">EssaBijoux Chic</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Home</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">About</Link>
            <Link to="/products" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Products</Link>
            <Link to="/shop" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Shop</Link>
            <Link to="/gallery" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Gallery</Link>
            <Link to="/location" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Location</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-amber-600 transition-colors">Contact</Link>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
              to="/shop" 
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
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
              Location
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button 
              variant="outline" 
              className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
