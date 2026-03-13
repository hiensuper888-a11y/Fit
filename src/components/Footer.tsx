import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { BicepsFlexed } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BicepsFlexed className="h-6 w-6 text-emerald-500" />
            <span className="font-bold text-lg text-zinc-100 tracking-tight">{t('app_name')}</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">{t('nav_home')}</a>
            <a href="#shop" className="hover:text-emerald-400 transition-colors">{t('nav_shop')}</a>
            <a href="#workouts" className="hover:text-emerald-400 transition-colors">{t('nav_workouts')}</a>
          </div>
          
          <div className="text-sm">
            {t('footer_text')}
          </div>
        </div>
      </div>
    </footer>
  );
};
