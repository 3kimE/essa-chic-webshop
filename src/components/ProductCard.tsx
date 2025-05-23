
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  currency: "MAD" | "EUR";
  category: string;
  description: string;
}

const ProductCard = ({ id, name, image, price, currency, category, description }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add to cart logic will be implemented
    console.log(`Added ${name} to cart`);
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border border-gray-200 overflow-hidden"
      onClick={handleViewProduct}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-amber-600 hover:bg-amber-700 text-white"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-amber-600 font-medium mb-2">{category}</div>
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-700">
            {price} {currency}
          </span>
          <span className="text-sm text-gray-500">Handcrafted</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
