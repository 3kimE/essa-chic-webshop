
import React from "react";
import { CalendarDays, MapPin, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    id: 1,
    name: "Salon International de l'Artisanat",
    location: "Paris, France",
    date: "June 15-20, 2025",
    description: "EssaBijoux Chic will showcase our latest collection at this prestigious international crafts exhibition."
  },
  {
    id: 2,
    name: "Feria de Artesanía",
    location: "Barcelona, Spain",
    date: "September 5-10, 2025",
    description: "Join us at the Barcelona Artisan Fair where we'll present traditional Moroccan jewelry techniques."
  },
  {
    id: 3,
    name: "Essaouira Crafts Festival",
    location: "Essaouira, Morocco",
    date: "October 12-18, 2025",
    description: "Our annual showcase in our hometown, featuring live demonstrations and exclusive designs."
  }
];

const Location = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative bg-amber-700 text-white py-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470" 
            alt="Workshop location" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Find Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Visit our workshop in Essaouira or meet us at international exhibitions across Europe.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Workshop information */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2c?q=80&w=1470"
                alt="EssaBijoux Workshop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Main Workshop
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Essaouira Workshop</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">N° 3, Complexe Artisanal Argana, Essaouira, Morocco</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-gray-600">Monday to Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Workshop Tours</p>
                    <p className="text-gray-600">We offer guided tours of our workshop daily at 11:00 AM and 3:00 PM. Reservations recommended for groups larger than 5 people.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Find Us on the Map</h2>
              <div className="aspect-ratio w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                {/* In a real implementation, this would be a Google Maps embed */}
                <div className="w-full h-full flex items-center justify-center bg-amber-50">
                  <div className="text-center p-4">
                    <MapPin size={48} className="mx-auto text-amber-600 mb-2" />
                    <p className="text-gray-700">Google Maps would be embedded here</p>
                    <p className="text-sm text-gray-500 mt-2">Complexe Artisanal Argana, Essaouira, Morocco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming events */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Upcoming Events & Exhibitions</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="border-amber-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-amber-50 p-4 flex items-center">
                    <CalendarDays className="text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
