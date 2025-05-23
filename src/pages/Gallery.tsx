
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Gallery images with captions
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1470",
    alt: "Workshop in Essaouira",
    caption: "Our workshop in the heart of Essaouira's medina",
    category: "Workshop"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2c?q=80&w=1470",
    alt: "Artisan at work",
    caption: "Abdelhafid crafting a filigree pendant",
    category: "Crafting"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470",
    alt: "Exhibition in France",
    caption: "Our jewelry displayed at Paris Exhibition 2024",
    category: "Exhibitions"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1470",
    alt: "Happy customer",
    caption: "Customer wearing our Berber-inspired bracelet",
    category: "Customers"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?q=80&w=1470",
    alt: "Crafting tools",
    caption: "Traditional tools used in our workshop",
    category: "Workshop"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1470",
    alt: "Barcelona Exhibition",
    caption: "Our booth at the Barcelona Artisan Fair",
    category: "Exhibitions"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070",
    alt: "Jewelry collection",
    caption: "Our latest collection of Berber-inspired pieces",
    category: "Collections"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1470",
    alt: "Customer trying jewelry",
    caption: "A customer trying on our handcrafted earrings",
    category: "Customers"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1575566668280-29e8318720d3?q=80&w=1450",
    alt: "Award ceremony",
    caption: "Abdelhafid receiving the Best Artisan Award 2015",
    category: "Awards"
  }
];

const categories = ["All", "Workshop", "Crafting", "Exhibitions", "Customers", "Collections", "Awards"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual journey through our workshop, crafting process, exhibitions, and the people who wear our creations.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-amber-600 text-white"
                  : "bg-white text-gray-700 hover:bg-amber-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <AspectRatio ratio={4/3}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="p-4">
                <p className="text-sm text-amber-600 font-medium mb-1">{image.category}</p>
                <p className="text-gray-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-400">No images found in this category</p>
            <button
              className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              onClick={() => setActiveCategory("All")}
            >
              View all images
            </button>
          </div>
        )}
      </div>
      
      {/* Image modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="p-6">
                <p className="text-sm text-amber-600 font-medium mb-1">{selectedImage.category}</p>
                <p className="text-lg text-gray-900">{selectedImage.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
