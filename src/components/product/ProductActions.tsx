
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductActionsProps {
  product: Product;
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image: product.images[0],
    });
  };

  const buyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
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
  );
};

export default ProductActions;
