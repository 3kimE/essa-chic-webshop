
import { Award, Shield, Truck } from "lucide-react";

const ProductGuarantees = () => {
  return (
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
  );
};

export default ProductGuarantees;
