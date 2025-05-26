import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Heart, Star, Truck, Shield, Award } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

// Mock product data - in a real app, this would come from an API
const products = {
  "1": {
    id: "1",
    name: "Berber Silver Filigree Bracelet",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2070"
    ],
    price: 450,
    currency: "MAD" as const,
    category: "Bracelets",
    description: "Handcrafted adjustable silver bracelet with traditional Berber engravings",
    longDescription: "This exquisite silver bracelet showcases the finest traditions of Berber craftsmanship. Each intricate detail is hand-engraved using techniques passed down through generations. The adjustable design ensures a perfect fit, while the traditional motifs tell stories of Morocco's rich cultural heritage.",
    features: [
      "925 Sterling Silver",
      "Adjustable sizing (16-20cm)",
      "Traditional Berber engravings",
      "Handcrafted in Essaouira",
      "Lifetime craftsmanship guarantee"
    ],
    artisan: "Abdelhafid Essabi",
    craftingTime: "3-5 days",
    weight: "25g",
    inStock: true
  },
  "2": {
    id: "2",
    name: "Coral Stone Necklace",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2070",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070"
    ],
    price: 680,
    currency: "MAD" as const,
    category: "Necklaces",
    description: "Elegant filigree necklace with natural coral stone pendant",
    longDescription: "A masterpiece of filigree artistry, this necklace features a stunning natural coral stone set within an intricate silver framework. The delicate metalwork creates a lace-like pattern that perfectly complements the vibrant coral centerpiece.",
    features: [
      "Natural Mediterranean coral",
      "925 Sterling Silver filigree",
      "Adjustable chain (40-45cm)",
      "Traditional clasp design",
      "Certificate of authenticity"
    ],
    artisan: "Abdelhafid Essabi",
    craftingTime: "5-7 days",
    weight: "35g",
    inStock: true
  },
  "3": {
    id: "3",
    name: "Enamel Star Earrings",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070"
    ],
    price: 320,
    currency: "MAD" as const,
    category: "Earrings",
    description: "Traditional star motif earrings with colorful enamel details",
    longDescription: "These stunning earrings feature the traditional Berber star motif, symbolizing guidance and protection. The colorful enamel work is achieved through ancient techniques, creating vibrant patterns that catch the light beautifully.",
    features: [
      "Traditional star symbolism",
      "Hand-applied enamel colors",
      "925 Sterling Silver",
      "Secure hook closures",
      "Hypoallergenic materials"
    ],
    artisan: "Abdelhafid Essabi",
    craftingTime: "2-3 days",
    weight: "8g",
    inStock: true
  },
  "bracelet-2": {
    id: "bracelet-2",
    name: "Coral Stone Silver Cuff",
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1470",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070"
    ],
    price: 550,
    currency: "MAD" as const,
    category: "Bracelets",
    description: "Adjustable silver cuff with genuine coral stone accents and filigree details",
    longDescription: "This sophisticated silver cuff combines the elegance of traditional Berber metalwork with the natural beauty of coral stones. The adjustable design ensures comfort while the filigree details showcase the artisan's exceptional skill.",
    features: [
      "925 Sterling Silver",
      "Genuine coral stone accents",
      "Adjustable cuff design",
      "Traditional filigree work",
      "Handcrafted in Morocco"
    ],
    artisan: "Abdelhafid Essabi",
    craftingTime: "4-6 days",
    weight: "30g",
    inStock: true
  },
  "necklace-2": {
    id: "necklace-2",
    name: "Berber Cross Necklace",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2c?q=80&w=1470",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2070"
    ],
    price: 520,
    currency: "MAD" as const,
    category: "Necklaces",
    description: "Silver necklace featuring the symbolic Berber cross with delicate enamel details",
    longDescription: "The Berber cross is a powerful symbol of protection and identity in North African culture. This necklace features an authentic cross pendant with traditional enamel work, creating a piece that is both spiritually meaningful and artistically beautiful.",
    features: [
      "Authentic Berber cross design",
      "925 Sterling Silver",
      "Traditional enamel details",
      "Adjustable chain length",
      "Cultural significance"
    ],
    artisan: "Abdelhafid Essabi",
    craftingTime: "5-7 days",
    weight: "28g",
    inStock: true
  },
  "earring-2": {
    id: "earring-2",
    name: "Star Symbol Studs",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1470",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070"
    ],
    price: 320,
    currency: "MAD" as const,
    category: "Earrings",
    description: "Star-shaped silver stud earrings with push back closures and intricate engravings",
    longDescription: "These elegant stud earrings feature the traditional star motif that has been central to Berber jewelry for centuries. The intricate engravings are hand-carved by master artisans, making each pair unique.",
    features: [
      "Traditional star design",
      "925 Sterling Silver",
      "Push back closures",
      "Hand-engraved details",
      "Hypoallergenic materials"
    ],
    artisan: "Abdelhafid Essabi",
    craftingTime: "2-3 days",
    weight: "6g",
    inStock: true
  },
  "ring-1": {
    id: "ring-1",
    name: "Berber Silver Band",
    images: [
      "https://images.unsplash.com/photo-1575566668280-29e8318720d3?q=80&w=1450",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070"
    ],
    price: 280,
    currency: "MAD" as const,
    category: "Rings",
    description: "Simple yet elegant silver band with traditional Berber patterns engraved around the exterior",
    longDescription: "This timeless silver band represents the essence of Berber jewelry - simple in form yet rich in cultural meaning. The traditional patterns engraved around the band tell ancient stories and connect the wearer to Morocco's heritage.",
    features: [
      "925 Sterling Silver",
      "Traditional Berber patterns",
      "Available in multiple sizes",
      "Hand-engraved details",
      "Unisex design"
    ],
    artisan: "Abdelhafid Essabi",
    craftingTime: "2-4 days",
    weight: "12g",
    inStock: true
  },
  "ring-2": {
    id: "ring-2",
    name: "Enameled Floral Ring",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1470",
      "https://images.unsplash.com/photo-1575566668280-29e8318720d3?q=80&w=1450"
    ],
    price: 350,
    currency: "MAD" as const,
    category: "Rings",
    description: "Silver ring with vibrant enamel floral design, inspired by Moroccan garden motifs",
    longDescription: "Inspired by the lush gardens of Morocco, this ring features vibrant enamel work depicting traditional floral motifs. The combination of silver and colorful enamel creates a piece that captures the beauty of Moroccan artistry.",
    features: [
      "925 Sterling Silver",
      "Vibrant enamel floral design",
      "Moroccan garden motifs",
      "Available in multiple sizes",
      "Traditional enamel technique"
    ],
    artisan: "Abdelhafid Essabi",
    craftingTime: "3-5 days",
    weight: "15g",
    inStock: true
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const product = id ? products[id as keyof typeof products] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image: product.images[0],
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const buyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
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
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? 'border-amber-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
                {product.category}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-600">(Based on master craftsmanship)</span>
              </div>
              <p className="text-xl text-gray-600 mb-6">{product.description}</p>
              <div className="text-4xl font-bold text-amber-700 mb-6">
                {product.price} {product.currency}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  onClick={buyNow}
                  variant="outline"
                  className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                  size="lg"
                >
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Artisan Info */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Artisan Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Crafted by:</span>
                  <p className="font-medium">{product.artisan}</p>
                </div>
                <div>
                  <span className="text-gray-600">Crafting time:</span>
                  <p className="font-medium">{product.craftingTime}</p>
                </div>
                <div>
                  <span className="text-gray-600">Weight:</span>
                  <p className="font-medium">{product.weight}</p>
                </div>
                <div>
                  <span className="text-gray-600">Status:</span>
                  <p className="font-medium text-green-600">
                    {product.inStock ? "In Stock" : "Made to Order"}
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Award className="w-8 h-8 text-amber-600" />
                  <span className="text-xs text-gray-600">Authentic Craftsmanship</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="w-8 h-8 text-amber-600" />
                  <span className="text-xs text-gray-600">Lifetime Guarantee</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Truck className="w-8 h-8 text-amber-600" />
                  <span className="text-xs text-gray-600">Worldwide Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">About This Piece</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {product.longDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
