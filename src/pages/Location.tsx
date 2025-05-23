
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

// Form schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Location = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
      setErrors({});
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Visit & Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us in the heart of Essaouira's artisan quarter or reach out through any of our channels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Map or Location Image */}
          <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070" 
              alt="Workshop Entrance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-serif font-bold mb-2">Essaouira Workshop</h2>
                <p className="flex items-center gap-2">
                  <MapPin className="text-amber-400" size={18} />
                  N° 3, Complexe Artisanal Argana
                </p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Workshop & Showroom</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Visit our workshop in the historic artisan quarter of Essaouira where you can see our 
              master craftsmen at work, creating unique pieces using traditional techniques passed down 
              through generations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-amber-100">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-amber-50 p-3 rounded-full">
                    <MapPin className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">N° 3, Complexe Artisanal Argana</p>
                    <p className="text-gray-600">Essaouira, Morocco</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-100">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-amber-50 p-3 rounded-full">
                    <Clock className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Saturday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <Card className="overflow-hidden border-amber-100">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-amber-50 p-3 rounded-full">
                    <Phone className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Numbers</h3>
                    <p className="text-gray-700">Morocco: +212 6 57 20 64 99</p>
                    <p className="text-gray-700">France: +33 7 68 23 94 69</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-amber-100">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-amber-50 p-3 rounded-full">
                    <Mail className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Addresses</h3>
                    <p className="text-gray-700">union.coop.cia@gmail.com</p>
                    <p className="text-gray-700">contact@essabijoux-chic.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-amber-100">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="bg-amber-50 p-3 rounded-full">
                    <Instagram className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <p className="text-gray-700">Instagram: @cia.essaouira</p>
                    <p className="text-gray-700">TikTok: @cia.essaouira</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact form */}
          <div>
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
