
import React from 'react';
import { ShieldCheck, Target, Eye, Globe2 } from 'lucide-react';
import { COMPANY_NAME, FULL_LEGAL_NAME } from '../constants';

const ValueItem: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 rounded-full rainbow-bg flex-shrink-0 flex items-center justify-center text-white shadow-lg">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
    </div>
  </div>
);

export const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Breadcrumb / Page Title */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Pioneering the future of opto-electronic technology from Istanbul to the world.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-8">Our Legacy and Future</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong>{FULL_LEGAL_NAME}</strong> was established with a clear vision: to integrate high-tech engineering with streamlined international commerce. Based in the strategic logistics hub of Istanbul, Türkiye, we serve as a critical link in the global supply chain for LED and opto-electronic components.
                </p>
                <p>
                  As an industry-leading manufacturer and international trading entity, we specialize in high-efficiency lighting products and specialized semi-conductive parts. Our team consists of seasoned engineers and trade experts dedicated to maintaining the highest standards of production and client service.
                </p>
                <p>
                  We are not just a supplier; we are a strategic partner for businesses across Europe and the Middle East, offering a unique blend of Turkish manufacturing agility and international technical prowess.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img src="https://picsum.photos/seed/office/1000/800" alt="Mei Huan Office" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 rainbow-bg"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white/5 p-12 rounded-3xl backdrop-blur-sm border border-white/10">
              <Target className="text-orange-500 mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To empower global industries with reliable, energy-efficient, and technologically superior opto-electronic solutions while fostering sustainable business growth for our partners.
              </p>
            </div>
            <div className="bg-white/5 p-12 rounded-3xl backdrop-blur-sm border border-white/10">
              <Eye className="text-purple-500 mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the most trusted international provider of opto-electronic components and LED lighting, setting the global standard for innovation, quality, and Turkish manufacturing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">The Values We Stand By</h2>
            <p className="text-gray-600">Integrity, innovation, and international cooperation are at the heart of everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <ValueItem 
              icon={<ShieldCheck />}
              title="Unwavering Quality"
              text="We never compromise on the performance or safety of our products. Every item leaving our factory is a testament to our precision."
            />
            <ValueItem 
              icon={<Globe2 />}
              title="International Reach"
              text="Our focus is global. We understand the nuances of international trade and provide seamless solutions for our overseas B2B clients."
            />
            <ValueItem 
              icon={<Target />}
              title="Customer-Centricity"
              text="We listen to our partners. Whether it's a standard order or a custom OEM project, your needs drive our innovation."
            />
            <ValueItem 
              icon={<Target />} // Replace with appropriate icon
              title="R&D Driven"
              text="Technology evolves quickly. Our R&D department stays ahead of the curve to bring you the latest in LED and semi-conductor advancements."
            />
          </div>
        </div>
      </section>
    </div>
  );
};
