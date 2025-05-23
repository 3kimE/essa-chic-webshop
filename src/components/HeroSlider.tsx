
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-white" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070')] bg-cover bg-center opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="flex items-center gap-2 mb-4 animate-fade-in">
              <Award className="h-6 w-6 text-amber-600" />
              <span className="text-gray-700 font-medium">Award-Winning Artisan Jewelry</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight animate-fade-in">
              EssaBijoux <span className="relative">
                <span className="text-amber-600">Chic</span>
                <span className="absolute -top-1.5 transform translate-y-0 left-0 text-amber-600 opacity-30 blur-sm">Chic</span>
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-amber-600 font-medium animate-fade-in animation-delay-200">
              Traditional Silver & Gold Jewelry
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 animate-fade-in animation-delay-400">
              Discover our handcrafted treasures from Essaouira, Morocco. Created by Abdelhafid Essabi, 
              Best Artisan of 2014 & 2015, our pieces showcase centuries-old Berber techniques.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  Discover Collections
                  <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-400 text-gray-700 hover:bg-amber-600/10 hover:border-amber-600 hover:text-amber-700 px-8 py-6 text-lg"
                >
                  Our Story
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-md animate-fade-in animation-delay-800">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-amber-600">50+</div>
                <div className="text-gray-700 text-sm mt-1">Unique Designs</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-gray-700 text-sm mt-1">Handcrafted</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-amber-600">20+</div>
                <div className="text-gray-700 text-sm mt-1">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-scale-in">
            {/* Floating image showcase */}
            <div className="relative h-[550px]">
              <div className="absolute top-0 right-0 w-80 h-80 rounded-lg overflow-hidden shadow-2xl transform rotate-3 transition-transform hover:rotate-6 hover:scale-105 z-20">
                <img 
                  src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2070" 
                  alt="Luxury Jewelry" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Featured Collection</p>
                    <Link to="/products" className="text-white/80 flex items-center hover:text-amber-300 text-xs">
                      View Details <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-72 h-96 rounded-lg overflow-hidden shadow-2xl transform -rotate-6 transition-transform hover:rotate-0 hover:scale-105 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070" 
                  alt="Berber Jewelry" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">New Arrivals</p>
                    <Link to="/shop" className="text-white/80 flex items-center hover:text-amber-300 text-xs">
                      Shop Now <ShoppingBag className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-24 right-24 bg-white p-4 rounded-lg shadow-xl animate-pulse z-30">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-medium mt-1">Trusted by 1000+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
