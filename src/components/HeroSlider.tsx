
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070",
    title: "EssaBijoux Chic",
    subtitle: "Traditional Silver & Gold Jewelry",
    description: "Handcrafted treasures from Essaouira, Morocco",
    cta: "Discover Collections"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2070",
    title: "Master Craftsmanship",
    subtitle: "Award-Winning Artisan",
    description: "Created by Abdelhafid Essabi, Best Artisan 2014 & 2015",
    cta: "Learn Our Story"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070",
    title: "Berber Heritage",
    subtitle: "Centuries-Old Techniques",
    description: "Filigree, granulation and enamel artistry",
    cta: "Shop Now"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-4 animate-fade-in">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-white/90 ml-2">Award-Winning Artisan</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-4 animate-slide-in-right">
                    {slide.title}
                  </h1>
                  
                  <h2 className="text-2xl lg:text-3xl text-amber-300 mb-6 animate-slide-in-right animation-delay-200">
                    {slide.subtitle}
                  </h2>
                  
                  <p className="text-xl text-white/90 mb-8 animate-slide-in-right animation-delay-400">
                    {slide.description}
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-right animation-delay-600"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-amber-400 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
