
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Product data
const products = [
  {
    id: "bracelet-1",
    name: "Silver Berber Bracelet",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1470",
    price: 450,
    currency: "MAD" as const,
    category: "Bracelets",
    description: "Handcrafted silver bracelet with traditional Berber engravings and adjustable size."
  },
  {
    id: "bracelet-2",
    name: "Coral Stone Silver Cuff",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1470",
    price: 550,
    currency: "MAD" as const,
    category: "Bracelets",
    description: "Adjustable silver cuff with genuine coral stone accents and filigree details."
  },
  {
    id: "necklace-1",
    name: "Filigree Pendant Necklace",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470",
    price: 680,
    currency: "MAD" as const,
    category: "Necklaces",
    description: "Silver chain with intricate filigree pendant, showcasing traditional Moroccan craftsmanship."
  },
  {
    id: "necklace-2",
    name: "Berber Cross Necklace",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2c?q=80&w=1470",
    price: 520,
    currency: "MAD" as const,
    category: "Necklaces",
    description: "Silver necklace featuring the symbolic Berber cross with delicate enamel details."
  },
  {
    id: "earring-1",
    name: "Diamond Motif Earrings",
    image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=1470",
    price: 380,
    currency: "MAD" as const,
    category: "Earrings",
    description: "Drop earrings with traditional diamond motif, handcrafted in silver with hook closure."
  },
  {
    id: "earring-2",
    name: "Star Symbol Studs",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1470",
    price: 320,
    currency: "MAD" as const,
    category: "Earrings",
    description: "Star-shaped silver stud earrings with push back closures and intricate engravings."
  },
  {
    id: "ring-1",
    name: "Berber Silver Band",
    image: "https://images.unsplash.com/photo-1575566668280-29e8318720d3?q=80&w=1450",
    price: 280,
    currency: "MAD" as const,
    category: "Rings",
    description: "Simple yet elegant silver band with traditional Berber patterns engraved around the exterior."
  },
  {
    id: "ring-2",
    name: "Enameled Floral Ring",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1470",
    price: 350,
    currency: "MAD" as const,
    category: "Rings",
    description: "Silver ring with vibrant enamel floral design, inspired by Moroccan garden motifs."
  },
];

const categories = ["All", "Bracelets", "Necklaces", "Earrings", "Rings"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative bg-amber-700 text-white py-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1470" 
            alt="Jewelry background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Products</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Each piece is handcrafted with traditional techniques, blending centuries of Berber artistry with contemporary design.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mobile filter button */}
        <div className="md:hidden mb-6">
          <Button 
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="w-full flex items-center justify-between border-amber-600 text-amber-600"
          >
            <span>{activeCategory} Products</span>
            <Filter size={16} />
          </Button>
        </div>
        
        {/* Category filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block mb-8`}>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category 
                    ? "bg-amber-600 hover:bg-amber-700 text-white" 
                    : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                }
                onClick={() => {
                  setActiveCategory(category);
                  setShowFilters(false);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              currency={product.currency}
              category={product.category}
              description={product.description}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600">No products found</h3>
            <p className="mt-2 text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
