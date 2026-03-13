import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { products } from '../data/mockData';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export const Shop: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="shop" className="py-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">{t('shop_title')}</h2>
            <p className="mt-2 text-zinc-500">{t('popular_products')}</p>
          </div>
          <button className="text-emerald-600 font-medium hover:text-emerald-700 hidden sm:block">
            {t('view_all')} &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <img 
                  src={product.image} 
                  alt={product.name[language]} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-zinc-700">
                  {product.category[language]}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-900 line-clamp-1">
                  {product.name[language]}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 line-clamp-2 min-h-[40px]">
                  {product.description[language]}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-zinc-900">${product.price.toFixed(2)}</span>
                  <button className="bg-zinc-900 hover:bg-emerald-500 text-white p-2 rounded-full transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
