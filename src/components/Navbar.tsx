import React, { useState } from 'react';
import { CurrentDate } from './CurrentDate';
import { useLanguage, Language } from '../i18n/LanguageContext';
import { ShoppingCart, User, LogOut, Globe, Search, ChevronDown, Pill } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface NavbarProps {
  currentRoute: string;
  setCurrentRoute: (route: any) => void;
  user: any;
  isAdmin?: boolean;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, setCurrentRoute, user, isAdmin, searchQuery = '', setSearchQuery }) => {
  const { t, language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      if (currentRoute === 'learn' || currentRoute === 'shop') {
        // Stay on current page and let it filter
        return;
      }
      
      if (lowerQuery.includes('creatine') || lowerQuery.includes('whey') || lowerQuery.includes('protein') || lowerQuery.includes('pre')) {
        setCurrentRoute('learn');
      } else {
        setCurrentRoute('shop');
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer group shrink-0"
            onClick={() => setCurrentRoute('home')}
          >
            <div className="logo-rays-container">
              <div className="logo-rays"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all duration-500 relative z-10">
                <Pill className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="ml-3 hidden sm:flex flex-col">
              <span className="text-xl font-black tracking-tight text-zinc-900 group-hover:text-emerald-700 transition-colors leading-none drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]">{t('app_name')}</span>
              <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase mt-0.5">by Mr.Hien</span>
            </div>
          </div>

          <div className="hidden lg:flex space-x-8 mx-4">
            <button 
              onClick={() => setCurrentRoute('home')}
              className={`text-sm font-medium transition-colors ${currentRoute === 'home' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
            >
              {t('nav_home')}
            </button>
            <button 
              onClick={() => setCurrentRoute('shop')}
              className={`text-sm font-medium transition-colors ${currentRoute === 'shop' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
            >
              {t('nav_shop')}
            </button>
            <button 
              onClick={() => setCurrentRoute('learn')}
              className={`text-sm font-medium transition-colors ${currentRoute === 'learn' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
            >
              {t('nav_learn')}
            </button>
            <button 
              onClick={() => setCurrentRoute('workouts')}
              className={`text-sm font-medium transition-colors ${currentRoute === 'workouts' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
            >
              {t('nav_workouts')}
            </button>
            {isAdmin && (
              <button 
                onClick={() => setCurrentRoute('admin')}
                className={`text-sm font-medium transition-colors ${currentRoute === 'admin' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
              >
                Admin
              </button>
            )}
          </div>

          <div className="flex-1 max-w-xs mx-4 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                placeholder={t('search_placeholder')}
                className="w-full bg-zinc-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            </form>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            <CurrentDate />
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 text-zinc-600 hover:text-emerald-600 transition-colors flex items-center gap-1"
                title={t('language')}
              >
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-zinc-200 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in duration-200">
                  <div className="grid grid-cols-1 gap-1 px-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all ${
                          language === lang.code 
                            ? 'bg-emerald-50 text-white font-bold' 
                            : 'text-zinc-600 hover:bg-zinc-100 hover:text-emerald-600'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="p-2 text-zinc-600 hover:text-emerald-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </button>

            {user ? (
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCurrentRoute('profile')}
                  className="p-2 text-zinc-600 hover:text-emerald-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-zinc-600 hover:text-red-600 transition-colors"
                  title={t('logout')}
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};
