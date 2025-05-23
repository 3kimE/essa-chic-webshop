
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Star, Award, MapPin, Phone } from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    name: "Berber Silver Filigree Bracelet",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070",
    price: 450,
    currency: "MAD" as const,
    category: "Bracelets",
    description: "Handcrafted adjustable silver bracelet with traditional Berber engravings"
  },
  {
    id: "2",
    name: "Coral Stone Necklace",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2070",
    price: 680,
    currency: "MAD" as const,
    category: "Necklaces",
    description: "Elegant filigree necklace with natural coral stone pendant"
  },
  {
    id: "3",
    name: "Enamel Star Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070",
    price: 320,
    currency: "MAD" as const,
    category: "Earrings",
    description: "Traditional star motif earrings with colorful enamel details"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Heritage Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-8 h-8 text-amber-600" />
                <span className="text-amber-600 font-semibold">Royal Heritage</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
                Three Generations of Royal Craftsmanship
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded by Abdelhafid Essabi—grandson of a royal jeweler who worked for King Mohammed V and Hassan II—EssaBijoux Chic represents over a century of jewelry making excellence in Essaouira.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-600">Best Artisan 2014 & 2015</span>
              </div>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Discover Our Story
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070"
                alt="Artisan at work"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold text-amber-600">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each piece is made to last, unique even in small editions, and embodies centuries of Moroccan artistry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              View All Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Traditional Techniques
            </h2>
            <p className="text-xl text-gray-600">
              Centuries-old methods passed down through generations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Filigree",
                description: "Intricate metalwork creating delicate lace-like patterns",
                image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070"
              },
              {
                title: "Granulation", 
                description: "Ancient technique of decorating with tiny metal spheres",
                image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2070"
              },
              {
                title: "Enamel Work",
                description: "Colorful glass powder fused to metal in traditional patterns",
                image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070"
              }
            ].map((technique, index) => (
              <div
                key={technique.title}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={technique.image}
                    alt={technique.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-serif font-bold text-white">
                    {technique.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                Visit Our Workshop
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the magic of traditional jewelry making in the heart of Essaouira's artisan quarter.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <span>N° 3, Complexe Artisanal Argana, Essaouira, Morocco</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-amber-400" />
                  <span>+212 6 57 20 64 99</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070"
                alt="Essaouira workshop"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
