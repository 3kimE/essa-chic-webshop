
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSlider = () => {
  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070"
          alt="Moroccan Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-2 mb-4 animate-fade-in">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white/90 ml-2">Award-Winning Artisan</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-4 animate-fade-in">
                EssaBijoux <span className="text-amber-300">Chic</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-amber-300 mb-4 animate-fade-in animation-delay-200">
                Traditional Silver & Gold Jewelry
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-xl animate-fade-in animation-delay-400">
                Discover our handcrafted treasures from Essaouira, Morocco. Created by Abdelhafid Essabi, 
                Best Artisan of 2014 & 2015, our pieces showcase centuries-old Berber techniques including filigree, 
                granulation and enamel artistry.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Discover Collections
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg"
                >
                  Our Story
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-12 max-w-md animate-fade-in animation-delay-600">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">50+</div>
                  <div className="text-white/80 text-sm">Unique Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">100%</div>
                  <div className="text-white/80 text-sm">Handcrafted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">20+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute -left-12 -top-12 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                
                <img 
                  src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2070" 
                  alt="Featured Jewelry" 
                  className="relative z-10 w-full max-w-md rounded-lg shadow-2xl border-4 border-white/10 transform rotate-3"
                />
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070" 
                  alt="Featured Jewelry" 
                  className="absolute -bottom-10 -left-10 z-20 w-48 rounded-lg shadow-2xl border-4 border-white/10 transform -rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
};

export default HeroSlider;
