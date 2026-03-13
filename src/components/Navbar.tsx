import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Dumbbell, ShoppingCart, Globe } from 'lucide-react';

export const Navbar: React.FC<{
  currentRoute: 'home' | 'article';
  setCurrentRoute: (route: 'home' | 'article') => void;
}> = ({ currentRoute, setCurrentRoute }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900 text-zinc-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentRoute('home')}>
            <Dumbbell className="h-8 w-8 text-emerald-500" />
            <span className="font-bold text-xl tracking-tight">{t('app_name')}</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentRoute('home')} className={`hover:text-emerald-400 transition-colors ${currentRoute === 'home' ? 'text-emerald-500' : ''}`}>{t('nav_home')}</button>
            <button onClick={() => setCurrentRoute('article')} className={`hover:text-emerald-400 transition-colors ${currentRoute === 'article' ? 'text-emerald-500' : ''}`}>{t('nav_learn')}</button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-emerald-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
            
            <div className="flex items-center bg-zinc-800 rounded-full p-1">
              <Globe className="h-4 w-4 ml-2 text-zinc-400" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as 'en' | 'vi')}
                className="bg-transparent text-sm border-none focus:ring-0 cursor-pointer pl-1 pr-2 py-1 outline-none"
              >
                <option value="vi">VI</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
