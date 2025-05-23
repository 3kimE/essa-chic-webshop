
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Award } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId } = location.state || { orderId: "ESS" + Date.now() };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
        <Card className="text-center">
          <CardContent className="py-16">
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Order Confirmed!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your purchase. Your order has been successfully placed.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg inline-block">
                <span className="text-sm text-gray-600">Order Number:</span>
                <div className="text-xl font-bold text-amber-600">{orderId}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Package className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-sm text-gray-600">Your jewelry is being carefully prepared by our master artisans</p>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Shipping</h3>
                <p className="text-sm text-gray-600">Worldwide shipping with tracking information provided</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Authenticity</h3>
                <p className="text-sm text-gray-600">Each piece comes with a certificate of authenticity</p>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-amber-800 mb-2">What's Next?</h3>
              <ul className="text-sm text-amber-700 text-left space-y-1">
                <li>• You'll receive an email confirmation within 24 hours</li>
                <li>• Your jewelry will be handcrafted within 3-7 business days</li>
                <li>• Tracking information will be sent once shipped</li>
                <li>• Expected delivery: 5-10 business days internationally</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={() => navigate("/products")}
                className="bg-amber-600 hover:bg-amber-700 text-white w-full"
                size="lg"
              >
                Continue Shopping
              </Button>
              <Button 
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full"
              >
                Return to Home
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t text-sm text-gray-600">
              <p>Questions about your order?</p>
              <p>Contact us at: <a href="mailto:contact@essbijoux-chic.com" className="text-amber-600 hover:underline">contact@essbijoux-chic.com</a></p>
              <p>Or call: <a href="tel:+212657206499" className="text-amber-600 hover:underline">+212 6 57 20 64 99</a></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderSuccess;
