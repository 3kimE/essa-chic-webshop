
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter, ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Product data (same as in Products.tsx but with more details for shopping)
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

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredProducts = products
    .filter(product => activeCategory === "All" || product.category === activeCategory)
    .filter(product => 
      searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Shop Our Collection</h1>
            
            {/* Search bar */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mobile filter button */}
        <div className="md:hidden mb-6">
          <Button 
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="w-full flex items-center justify-between border-amber-600 text-amber-600"
          >
            <span>Filter by: {activeCategory}</span>
            <Filter size={16} />
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar filters for desktop */}
          <div className="hidden md:block w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeCategory === category 
                      ? "bg-amber-50 text-amber-700 font-medium" 
                      : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">Need help with your order?</p>
                <p className="text-amber-700 font-medium">+212 6 57 20 64 99</p>
                <p className="text-gray-700 mt-2">Custom designs available</p>
                <Button variant="link" className="p-0 h-auto text-amber-700 hover:text-amber-800">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden bg-white p-4 rounded-lg shadow-sm mb-4 animate-fade-in">
              <div className="space-y-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant="ghost"
                    className={`w-full justify-start ${
                      activeCategory === category 
                        ? "bg-amber-50 text-amber-700 font-medium" 
                        : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                    }`}
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
          )}
          
          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600">No products found</h3>
                <p className="mt-2 text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">Showing {filteredProducts.length} products</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
