
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              About EssaBijoux Chic
            </h1>
            <div className="h-1 w-24 bg-amber-600 mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded by Abdelhafid Essabi—grandson of a royal jeweler who worked for King Mohammed V and Hassan II—EssaBijoux Chic is a cooperative of master artisans in Essaouira.
              </p>
              
              <p>
                With over 20 years of experience, Abdelhafid designs every piece by hand, using centuries‑old filigree, granulation and enamel techniques.
              </p>
              
              <p>
                Our workshop follows the traditional Berber methods, connecting each piece to a rich heritage that spans generations. Every creation tells a story of cultural artistry and meticulous craftsmanship.
              </p>
              
              <p>
                Abdelhafid's dedication to preserving these ancient techniques earned him Morocco's Best Artisan award in both 2014 and 2015, recognizing his exceptional skill and commitment to authenticity.
              </p>
            </div>
            
            <div className="mt-8 flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=250" 
                alt="Award Ceremony" 
                className="w-20 h-20 rounded-full object-cover border-2 border-amber-600"
              />
              <div className="ml-4">
                <p className="font-bold text-gray-900">Abdelhafid Essabi</p>
                <p className="text-amber-600">Master Artisan</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-600 rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg">
                <AspectRatio ratio={4/5}>
                  <img
                    src="https://images.unsplash.com/photo-1602173574767-37ac01994b2c?q=80&w=1470"
                    alt="Artisan working on jewelry"
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 bg-amber-50 p-8 rounded-lg">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Commitment to Quality</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-amber-600">✦</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Traditional Methods</h3>
              <p className="text-gray-700">We preserve centuries-old techniques passed down through generations of Moroccan artisans.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-amber-600">✦</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Materials</h3>
              <p className="text-gray-700">We use ethically sourced silver, gold, and semi-precious stones from local suppliers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-amber-600">✦</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Unique Designs</h3>
              <p className="text-gray-700">Each piece is unique, even in small editions, representing authentic Moroccan artistry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
