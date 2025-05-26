
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
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
  );
};

export default ProductInfo;
