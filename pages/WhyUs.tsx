
import React from 'react';
import { ShieldCheck, Factory, Globe, Award, HeartHandshake, Zap } from 'lucide-react';

const ReasonBlock: React.FC<{ icon: React.ReactNode, title: string, text: string, color: string }> = ({ icon, title, text, color }) => (
  <div className="group bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg ${color} group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:rainbow-text transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

export const WhyUs: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="bg-gray-900 py-24 text-white relative">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/tech/1920/1080" className="w-full h-full object-cover opacity-20" alt="Tech" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Why Partner with <br /><span className="rainbow-text">MEI HUAN</span>?</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
            We provide the perfect synergy between advanced manufacturing, rigorous quality standards, and strategic global logistics.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <ReasonBlock 
              icon={<ShieldCheck size={32} />}
              title="Quality Control"
              text="Our 'Zero Defect' policy ensures every single LED component and lighting fixture undergoes multi-stage testing before export."
              color="bg-red-500"
            />
            <ReasonBlock 
              icon={<Factory size={32} />}
              title="Modern Production"
              text="Our facility in Istanbul features high-speed SMT lines and modern testing equipment to maintain precision at scale."
              color="bg-orange-500"
            />
            <ReasonBlock 
              icon={<Globe size={32} />}
              title="Strategic Location"
              text="Based in Istanbul, we offer the logistical advantages of a world-class trade hub, significantly reducing lead times for European and MENA clients."
              color="bg-yellow-500"
            />
            <ReasonBlock 
              icon={<Award size={32} />}
              title="Industry Standards"
              text="All products are designed to meet or exceed international certifications, ensuring easy integration into global projects."
              color="bg-green-500"
            />
            <ReasonBlock 
              icon={<Zap size={32} />}
              title="R&D Capabilities"
              text="We don't just sell technology; we build it. Our engineers are constantly innovating to improve efficiency and longevity."
              color="bg-blue-500"
            />
            <ReasonBlock 
              icon={<HeartHandshake size={32} />}
              title="Dedicated Support"
              text="International business is built on trust. We provide 24/7 technical and logistical support for our global B2B network."
              color="bg-purple-500"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 flex flex-col lg:row items-center gap-16 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 rainbow-bg"></div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-8">Exporting Excellence Since Day One</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                With years of experience in international trading, MEI HUAN understands the complexities of cross-border commerce. From customs documentation to specialized packaging, we handle every detail so you can focus on your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-6 h-6 rounded-full rainbow-bg flex items-center justify-center"><Zap size={12} /></div>
                  <span className="font-medium">Direct Factory Prices</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-6 h-6 rounded-full rainbow-bg flex items-center justify-center"><Zap size={12} /></div>
                  <span className="font-medium">Reliable Supply Continuity</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-6 h-6 rounded-full rainbow-bg flex items-center justify-center"><Zap size={12} /></div>
                  <span className="font-medium">Technical Training for Partners</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="https://picsum.photos/seed/logistic/800/600" alt="Logistics" className="rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
