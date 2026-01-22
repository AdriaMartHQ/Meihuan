
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Award, BarChart, Settings } from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_NAME } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover opacity-40"
          alt="Industrial Lighting"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <h4 className="text-sm md:text-base font-bold uppercase tracking-widest rainbow-text mb-4">
            {t({ en: "Innovation • Quality • Global Supply", tr: "İnovasyon • Kalite • Küresel Tedarik" })}
          </h4>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            {t({ en: "Illuminating the Future of Technology", tr: "Teknolojinin Geleceğini Aydınlatıyoruz" })}
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            {t({
              en: `${COMPANY_NAME} delivers cutting-edge opto-electronic and LED solutions. From our headquarters in Istanbul, we supply the world with precision-engineered products.`,
              tr: `${COMPANY_NAME}, en yeni opto-elektronik ve LED çözümlerini sunar. İstanbul'daki merkezimizden dünyaya hassas mühendislik ürünleri tedarik ediyoruz.`
            })}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products" className="px-8 py-4 rainbow-bg text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center">
              {t({ en: "Explore Products", tr: "Ürünleri Keşfedin" })} <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all flex items-center justify-center">
              {t({ en: "Contact Us", tr: "Bize Ulaşın" })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-orange-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

export const Home: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div>
      <Hero />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=800" alt="About Mei Huan" className="rounded-3xl shadow-2xl relative z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 rainbow-bg rounded-3xl -z-0 opacity-20"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                {t({ en: "Redefining Opto-Electronic Excellence", tr: "Opto-Elektronik Mükemmelliği Yeniden Tanımlıyoruz" })}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t({
                  en: `${COMPANY_NAME} OPTO ELECTRONIC TECHNOLOGY LIMITED is a premier manufacturer and international trading company based in Istanbul, Türkiye. We specialize in the R&D and supply of high-performance LED lighting and opto-electronic components.`,
                  tr: `${COMPANY_NAME} OPTO ELECTRONIC TECHNOLOGY LIMITED, İstanbul, Türkiye merkezli lider bir üretici ve uluslararası ticaret şirketidir. Yüksek performanslı LED aydınlatma ve opto-elektronik bileşenlerin Ar-Ge ve tedarikinde uzmanız.`
                })}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t({
                  en: "Our strategic location allows us to bridge the gap between innovation and global markets, serving B2B clients across Europe, the Middle East, and beyond with unmatched speed and reliability.",
                  tr: "Stratejik konumumuz, inovasyon ve küresel pazarlar arasında köprü kurmamızı sağlayarak Avrupa, Orta Doğu ve ötesindeki B2B müşterilerimize eşsiz hız ve güvenilirlikle hizmet vermemize olanak tanır."
                })}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
                  <div className="text-gray-500 text-sm">{t({ en: "Active B2B Partners", tr: "Aktif B2B İş Ortağı" })}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">20+</div>
                  <div className="text-gray-500 text-sm">{t({ en: "Global Markets", tr: "Küresel Pazar" })}</div>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center font-bold rainbow-text hover:opacity-80 transition-opacity">
                {t({ en: "Learn more about our mission", tr: "Misyonumuz hakkında daha fazlasını öğrenin" })} <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t({ en: "Product Highlights", tr: "Öne Çıkan Ürünler" })}</h2>
            <p className="text-gray-600">
              {t({
                en: "Discover our core technology sectors and high-performance solutions designed for industrial-scale operations.",
                tr: "Endüstriyel ölçekli operasyonlar için tasarlanmış temel teknoloji sektörlerimizi ve yüksek performanslı çözümlerimizi keşfedin."
              })}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map(product => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src={product.imageUrl} alt={t(product.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-gray-900">{t(product.category)}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 group-hover:rainbow-text transition-colors">{t(product.title)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{t(product.description)}</p>
                  <Link to="/products" className="text-sm font-bold flex items-center text-gray-900 group-hover:text-orange-500">
                    {t({ en: "View Specifications", tr: "Özellikleri Görüntüle" })} <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:row items-center justify-between mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">{t({ en: "Why Partners Choose MEI HUAN", tr: "İş Ortakları Neden MEI HUAN'ı Seçiyor?" })}</h2>
              <p className="text-gray-600">
                {t({
                  en: "We combine technical ingenuity with Turkish manufacturing prowess to provide a unique value proposition for global B2B clients.",
                  tr: "Küresel B2B müşterileri için benzersiz bir değer teklifi sunmak üzere teknik ustalığı Türk üretim gücüyle birleştiriyoruz."
                })}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Zap />}
              title={t({ en: "Innovation First", tr: "Önce İnovasyon" })}
              desc={t({ en: "Our dedicated R&D team continuously pushes the boundaries of opto-electronic efficiency.", tr: "Özel Ar-Ge ekibimiz, opto-elektronik verimliliğin sınırlarını sürekli olarak zorluyor." })}
            />
            <FeatureCard 
              icon={<Award />}
              title={t({ en: "Certified Quality", tr: "Sertifikalı Kalite" })}
              desc={t({ en: "Every component is rigorously tested to meet CE, RoHS, and other international standards.", tr: "Her bileşen, CE, RoHS ve diğer uluslararası standartları karşılamak için titizlikle test edilir." })}
            />
            <FeatureCard 
              icon={<Settings />}
              title={t({ en: "Custom Flexibility", tr: "Özel Esneklik" })}
              desc={t({ en: "We provide tailored OEM/ODM solutions to meet the specific requirements of your unique projects.", tr: "Benzersiz projelerinizin özel gereksinimlerini karşılamak için özelleştirilmiş OEM/ODM çözümleri sunuyoruz." })}
            />
            <FeatureCard 
              icon={<BarChart />}
              title={t({ en: "Global Scalability", tr: "Küresel Ölçeklenebilirlik" })}
              desc={t({ en: "Our Istanbul-based supply chain ensures competitive pricing and rapid delivery globally.", tr: "İstanbul merkezli tedarik zincirimiz, küresel çapta rekabetçi fiyatlandırma ve hızlı teslimat sağlar." })}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
