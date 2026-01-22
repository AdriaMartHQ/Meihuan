
import React from 'react';

export const COMPANY_NAME = "MEI HUAN";
export const FULL_LEGAL_NAME = "MEI HUAN OPTO ELECTRONIC TECHNOLOGY LIMITED";
export const EMAIL = "postmaster@meihuan.com.tr";
export const PHONE = "+90 537 315 08 93";
export const ADDRESS = "Halil Rıfatpaşa Mah. Perpa Tic. Mrk. A Blok Kat:11 No:1744 Şişli / İstanbul";

export const NAVIGATION_LINKS = [
  { name: { en: 'Home', tr: 'Ana Sayfa' }, path: '/' },
  { name: { en: 'About Us', tr: 'Hakkımızda' }, path: '/about' },
  { name: { en: 'Products', tr: 'Ürünler' }, path: '/products' },
  { name: { en: 'Why Us', tr: 'Neden Biz?' }, path: '/why-us' },
  { name: { en: 'Contact', tr: 'İletişim' }, path: '/contact' },
];

export const PRODUCTS_DATA = [
  {
    id: '1',
    title: { en: 'LED Lighting Solutions', tr: 'LED Aydınlatma Çözümleri' },
    category: { en: 'LED Lighting', tr: 'LED Aydınlatma' },
    description: { 
      en: 'Energy-efficient industrial and commercial LED fixtures designed for longevity and superior illumination.',
      tr: 'Uzun ömür ve üstün aydınlatma için tasarlanmış enerji verimli endüstriyel ve ticari LED armatürler.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: { en: 'Opto-Electronic Components', tr: 'Opto-Elektronik Bileşenler' },
    category: { en: 'Components', tr: 'Bileşenler' },
    description: { 
      en: 'High-precision semiconductors and opto-electronic parts for specialized industrial applications.',
      tr: 'Özel endüstriyel uygulamalar için yüksek hassasiyetli yarı iletkenler ve opto-elektronik parçalar.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: { en: 'Custom OEM/ODM Solutions', tr: 'Özel OEM/ODM Çözümleri' },
    category: { en: 'Custom', tr: 'Özel Tasarım' },
    description: { 
      en: 'Bespoke design and manufacturing services tailored to meet your unique project specifications.',
      tr: 'Benzersiz proje spesifikasyonlarınızı karşılamak için uyarlanmış özel tasarım ve üretim hizmetleri.'
    },
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
];

export const WHY_US_BENEFITS = [
  {
    title: { en: 'Rigorous Quality Control', tr: 'Titiz Kalite Kontrolü' },
    description: { 
      en: 'Every product undergoes comprehensive testing to ensure compliance with international safety and performance standards.',
      tr: 'Her ürün, uluslararası güvenlik ve performans standartlarına uygunluğu sağlamak için kapsamlı testlerden geçer.'
    },
    icon: 'ShieldCheck',
  },
  {
    title: { en: 'Advanced Manufacturing', tr: 'İleri Üretim Teknolojisi' },
    description: { 
      en: 'Equipped with state-of-the-art facilities in Istanbul, we leverage the latest technology to deliver precision engineering.',
      tr: 'İstanbul\'daki son teknoloji tesislerimizle, hassas mühendislik sunmak için en son teknolojiyi kullanıyoruz.'
    },
    icon: 'Factory',
  },
  {
    title: { en: 'Global Export Expertise', tr: 'Küresel İhracat Uzmanlığı' },
    description: { 
      en: 'Located at the crossroads of Europe and Asia, we offer seamless logistics and support for our international B2B partners.',
      tr: 'Avrupa ve Asya\'nın kesişme noktasında yer alarak, uluslararası B2B ortaklarımız için kesintisiz lojistik sunuyoruz.'
    },
    icon: 'Globe',
  },
  {
    title: { en: 'Dedicated Support', tr: 'Özel Teknik Destek' },
    description: { 
      en: 'Our team of specialists provides end-to-end service, from technical consultation to after-sales maintenance.',
      tr: 'Uzman ekibimiz, teknik danışmanlıktan satış sonrası bakıma kadar uçtan uca hizmet sunar.'
    },
    icon: 'Settings',
  }
];
