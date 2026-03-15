import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, TrendingUp, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Product } from '../types/database';

interface ShopProps {
  searchQuery?: string;
}

export const Shop: React.FC<ShopProps> = ({ searchQuery = '' }) => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!supabase) {
        setError('Supabase is not configured. Please check your settings.');
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProducts(data || []);
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>{t('shop_title')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              {searchQuery ? `Search Results for "${searchQuery}"` : (t('popular_products') || 'Popular Products')}
            </h2>
          </div>
          <button className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors flex items-center gap-2 group">
            {t('view_all') || 'View All'}
            <ShoppingCart className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-2xl text-center">
            <p className="font-bold mb-2">Error loading products</p>
            <p className="text-sm">{error}</p>
            <p className="mt-4 text-xs text-red-400">Make sure the 'products' table exists in your Supabase database.</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-zinc-500">
            No products found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl border border-zinc-200 overflow-hidden hover:shadow-2xl hover:shadow-zinc-200 transition-all hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="w-full bg-white text-zinc-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-white transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      {t('add_to_cart')}
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1 text-zinc-400 text-xs">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-zinc-900 font-bold">{product.rating}</span>
                      <span>({product.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-4 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zinc-900">${product.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
