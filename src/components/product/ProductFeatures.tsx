
interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <div className="border-t pt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFeatures;
