
import React, { useState } from 'react';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { PRODUCTS_DATA } from '../constants';

export const Products: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'LED Lighting', 'Components', 'Custom'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === filter);

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">Our Product Portfolio</h1>
          <p className="text-gray-600 max-w-2xl text-lg mb-10">
            Explore our comprehensive range of high-performance opto-electronic components and LED lighting solutions.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat ? 'rainbow-bg text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="relative h-72 overflow-hidden">
                  <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-lg text-xs font-bold text-gray-900 shadow-sm">{product.category}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm">{product.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rainbow-bg rounded-full mr-2"></div>
                      Industrial Standard Compliance
                    </div>
                    <div className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rainbow-bg rounded-full mr-2"></div>
                      Energy Efficient Design
                    </div>
                  </div>

                  <button className="w-full py-4 border border-gray-200 text-gray-900 font-bold rounded-xl hover:rainbow-bg hover:text-white hover:border-transparent transition-all flex items-center justify-center group">
                    View Specifications <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="w-16 h-16 rainbow-bg rounded-2xl flex items-center justify-center text-white mb-6">
                <Search size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Custom OEM / ODM Solutions</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Need a product tailored to specific parameters? Our engineering team specializes in creating bespoke solutions that meet your precise technical requirements.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Custom LED Arrays', desc: 'Specific wavelength and lumen output designs.' },
                { title: 'Advanced Drivers', desc: 'Integrated control and dimming components.' },
                { title: 'Specialized PCBs', desc: 'Precision engineered substrates for thermal management.' },
                { title: 'Housing Design', desc: 'Tailored fixture shapes and materials for any environment.' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl">
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
