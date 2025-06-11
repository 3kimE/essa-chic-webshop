
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shield, LogOut, Package, User, MapPin, CreditCard, Calendar } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface OrderItem {
  id: string;
  product_name: string;
  product_image: string;
  product_variant?: string;
  product_color?: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

interface Order {
  id: string;
  order_number: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_address: string;
  shipping_city: string;
  shipping_postal_code?: string;
  shipping_country: string;
  cardholder_name: string;
  subtotal: number;
  shipping_cost: number;
  total_amount: number;
  currency: string;
  status: string;
  created_at: string;
  order_items: OrderItem[];
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!adminLoggedIn) {
      navigate('/admin-login');
    } else {
      fetchOrders();
    }
  }, [navigate]);

  const fetchOrders = async () => {
    try {
      // Fetch orders with their items
      const { data: ordersData, error: ordersError } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (*)
        `)
        .order('created_at', { ascending: false });

      if (ordersError) {
        console.error('Error fetching orders:', ordersError);
        toast({
          title: "Error",
          description: "Failed to fetch orders",
          variant: "destructive",
        });
        return;
      }

      setOrders(ordersData || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminId');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/admin-login');
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'default';
      case 'completed':
        return 'secondary';
      case 'cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading orders...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">
              Admin Dashboard
            </h1>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-gray-900 flex items-center">
              <Package className="w-6 h-6 mr-2" />
              Orders Management ({orders.length} orders)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No orders found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order #</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Shipping Address</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.order_number}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-gray-500" />
                            <div>
                              <div className="font-medium">
                                {order.customer_first_name} {order.customer_last_name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {order.customer_email}
                              </div>
                              <div className="text-sm text-gray-500">
                                {order.customer_phone}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <CreditCard className="w-4 h-4 mr-2 text-gray-500" />
                            <div className="text-sm">
                              {order.cardholder_name}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-start">
                            <MapPin className="w-4 h-4 mr-2 text-gray-500 mt-0.5" />
                            <div className="text-sm">
                              <div>{order.shipping_address}</div>
                              <div>
                                {order.shipping_city}
                                {order.shipping_postal_code && `, ${order.shipping_postal_code}`}
                              </div>
                              <div>{order.shipping_country}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {order.order_items.map((item) => (
                              <div key={item.id} className="text-sm">
                                <div className="font-medium">{item.product_name}</div>
                                {item.product_variant && (
                                  <div className="text-gray-500">Variant: {item.product_variant}</div>
                                )}
                                {item.product_color && (
                                  <div className="text-gray-500">Color: {item.product_color}</div>
                                )}
                                <div className="text-gray-500">
                                  Qty: {item.quantity} × {item.unit_price} {order.currency}
                                </div>
                              </div>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>Subtotal: {order.subtotal} {order.currency}</div>
                            <div>Shipping: {order.shipping_cost} {order.currency}</div>
                            <div className="font-bold">
                              Total: {order.total_amount} {order.currency}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                            {formatDate(order.created_at)}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
