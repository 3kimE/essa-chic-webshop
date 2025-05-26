
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { toast } from "sonner";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-96 lg:h-[500px] object-cover"
        />
        <Button
          onClick={toggleWishlist}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
      </div>
      
      {/* Thumbnail Images */}
      <div className="flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative overflow-hidden rounded-lg border-2 transition-all ${
              selectedImage === index ? 'border-amber-600' : 'border-gray-200'
            }`}
          >
            <img
              src={image}
              alt={`${productName} ${index + 1}`}
              className="w-20 h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
