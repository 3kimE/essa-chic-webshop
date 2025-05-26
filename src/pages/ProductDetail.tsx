
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductArtisanInfo from "@/components/product/ProductArtisanInfo";
import ProductGuarantees from "@/components/product/ProductGuarantees";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
          <ProductImageGallery 
            images={product.images} 
            productName={product.name} 
          />

          {/* Product Information */}
          <div className="space-y-6">
            <ProductInfo product={product} />
            <ProductActions product={product} />
            <ProductFeatures features={product.features} />
            <ProductArtisanInfo product={product} />
            <ProductGuarantees />
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
