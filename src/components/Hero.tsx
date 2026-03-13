import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShoppingBag } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">{t('sub_name')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            {t('hero_title').split(' ').map((word, i) => (
              <span key={i} className={i === 2 ? "text-emerald-500" : ""}>{word} </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-emerald-600/20">
              <ShoppingBag className="w-5 h-5" />
              {t('shop_title')}
            </button>
            <button className="bg-zinc-800/50 hover:bg-zinc-800 text-white border border-zinc-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 backdrop-blur-sm">
              <Play className="w-5 h-5" />
              {t('workout_title')}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex items-center gap-6 text-white/50 text-sm font-medium tracking-widest uppercase vertical-rl rotate-180">
          <span className="h-20 w-px bg-white/20"></span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};
