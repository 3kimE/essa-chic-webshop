
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shield, LogOut, Package, Users, Calendar, DollarSign, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

interface Customer {
  customer_first_name: string;
  customer_last_name: string;
  customer_email: string;
  shipping_address: string;
  shipping_city: string;
  shipping_country: string;
  order_id: string;
  order_number: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
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

      // Create customers data from orders
      const customersData: Customer[] = (ordersData || []).map(order => ({
        customer_first_name: order.customer_first_name,
        customer_last_name: order.customer_last_name,
        customer_email: order.customer_email,
        shipping_address: order.shipping_address,
        shipping_city: order.shipping_city,
        shipping_country: order.shipping_country,
        order_id: order.id,
        order_number: order.order_number,
      }));

      setCustomers(customersData);
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-lg text-blue-600 font-medium">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50 shadow-md"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Orders Table */}
        <Card className="w-full mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold flex items-center">
              <Package className="w-6 h-6 mr-2" />
              Orders Management ({orders.length} orders)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No orders found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-bold text-gray-700">Order ID</TableHead>
                      <TableHead className="font-bold text-gray-700">Status</TableHead>
                      <TableHead className="font-bold text-gray-700">Date</TableHead>
                      <TableHead className="font-bold text-gray-700">Subtotal</TableHead>
                      <TableHead className="font-bold text-gray-700">Shipping</TableHead>
                      <TableHead className="font-bold text-gray-700">Total</TableHead>
                      <TableHead className="font-bold text-gray-700">Items</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow key={order.id} className={index % 2 === 0 ? "bg-white" : "bg-blue-50/30"}>
                        <TableCell className="font-medium text-blue-600">
                          {order.order_number}
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(order.status)} className="font-medium">
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(order.created_at)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-green-600 font-medium">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {order.subtotal} {order.currency}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-orange-600 font-medium">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {order.shipping_cost} {order.currency}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-blue-600 font-bold">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {order.total_amount} {order.currency}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1 max-w-xs">
                            {order.order_items.map((item) => (
                              <div key={item.id} className="text-sm bg-gray-100 p-2 rounded">
                                <div className="font-medium text-gray-800">{item.product_name}</div>
                                {item.product_variant && (
                                  <div className="text-gray-600">Variant: {item.product_variant}</div>
                                )}
                                {item.product_color && (
                                  <div className="text-gray-600">Color: {item.product_color}</div>
                                )}
                                <div className="text-indigo-600 font-medium">
                                  Qty: {item.quantity} × {item.unit_price} {order.currency}
                                </div>
                              </div>
                            ))}
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

        {/* Customers Table */}
        <Card className="w-full shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Customers Management ({customers.length} customers)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {customers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No customers found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-bold text-gray-700">Full Name</TableHead>
                      <TableHead className="font-bold text-gray-700">Email</TableHead>
                      <TableHead className="font-bold text-gray-700">Shipping Address</TableHead>
                      <TableHead className="font-bold text-gray-700">Order ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer, index) => (
                      <TableRow key={`${customer.order_id}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-purple-50/30"}>
                        <TableCell className="font-medium text-purple-600">
                          {customer.customer_first_name} {customer.customer_last_name}
                        </TableCell>
                        <TableCell className="text-gray-700">
                          {customer.customer_email}
                        </TableCell>
                        <TableCell>
                          <div className="text-gray-600">
                            <div>{customer.shipping_address}</div>
                            <div className="text-sm text-gray-500">
                              {customer.shipping_city}, {customer.shipping_country}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <ShoppingBag className="w-4 h-4 mr-2 text-pink-500" />
                            <span className="text-pink-600 font-medium">{customer.order_number}</span>
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
