
import React from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { EMAIL, PHONE, ADDRESS, FULL_LEGAL_NAME } from '../constants';
import { useLanguage } from '../LanguageContext';

const ContactInfoCard: React.FC<{ icon: React.ReactNode, title: string, content: string }> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-5 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-orange-500 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
    </div>
  </div>
);

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">{t({ en: "Get in Touch", tr: "Bize Ulaşın" })}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t({
              en: "Whether you have a technical inquiry or want to discuss a large-scale project, our team is ready to assist you.",
              tr: "İster teknik bir sorunuz olsun, ister büyük ölçekli bir projeyi tartışmak isteyin, ekibimiz size yardımcı olmaya hazır."
            })}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <ContactInfoCard 
                icon={<Mail size={24} />}
                title={t({ en: "Email Us", tr: "E-posta" })}
                content={EMAIL}
              />
              <ContactInfoCard 
                icon={<Phone size={24} />}
                title={t({ en: "Call Us", tr: "Bizi Arayın" })}
                content={PHONE}
              />
              <ContactInfoCard 
                icon={<MapPin size={24} />}
                title={t({ en: "Our Headquarters", tr: "Merkez Ofisimiz" })}
                content={ADDRESS}
              />
              <ContactInfoCard 
                icon={<Globe size={24} />}
                title={t({ en: "Legal Name", tr: "Resmi Ünvan" })}
                content={FULL_LEGAL_NAME}
              />
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-2 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rainbow-bg opacity-5 blur-2xl"></div>
              
              <h3 className="text-3xl font-bold mb-10">{t({ en: "Send a Message", tr: "Mesaj Gönderin" })}</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">{t({ en: "Full Name", tr: "Ad Soyad" })}</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">{t({ en: "Business Email", tr: "İş E-postası" })}</label>
                    <input type="email" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">{t({ en: "Company", tr: "Şirket" })}</label>
                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">{t({ en: "Industry", tr: "Sektör" })}</label>
                    <select className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none appearance-none">
                      <option>{t({ en: "Industrial Lighting", tr: "Endüstriyel Aydınlatma" })}</option>
                      <option>{t({ en: "Opto-Electronics", tr: "Opto-Elektronik" })}</option>
                      <option>{t({ en: "OEM/ODM Project", tr: "OEM/ODM Projesi" })}</option>
                      <option>{t({ en: "General Inquiry", tr: "Genel Sorgu" })}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">{t({ en: "Your Message", tr: "Mesajınız" })}</label>
                  <textarea className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-orange-500 transition-all outline-none min-h-[160px]" placeholder={t({ en: "Tell us about your project...", tr: "Projenizden bahsedin..." })}></textarea>
                </div>

                <button type="submit" className="px-12 py-5 rainbow-bg text-white font-bold rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center">
                  {t({ en: "Submit Inquiry", tr: "Talebi Gönder" })} <Send size={20} className="ml-3" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
