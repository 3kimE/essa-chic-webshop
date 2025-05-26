
import type { Product } from "@/data/products";

interface ProductArtisanInfoProps {
  product: Product;
}

const ProductArtisanInfo = ({ product }: ProductArtisanInfoProps) => {
  return (
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
  );
};

export default ProductArtisanInfo;
