import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { BicepsFlexed, ShoppingCart, User, LogOut, Globe } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface NavbarProps {
  currentRoute: string;
  setCurrentRoute: (route: any) => void;
  user: any;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, setCurrentRoute, user }) => {
  const { t, language, setLanguage } = useLanguage();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setCurrentRoute('home')}
          >
            <div className="p-2 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors">
              <BicepsFlexed className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="ml-3 text-xl font-black tracking-tight text-zinc-900 group-hover:text-emerald-700 transition-colors">{t('app_name')}</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setCurrentRoute('home')}
              className={`text-sm font-medium transition-colors ${currentRoute === 'home' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
            >
              {t('nav_home')}
            </button>
            <button 
              onClick={() => setCurrentRoute('creatine')}
              className={`text-sm font-medium transition-colors ${currentRoute === 'creatine' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
            >
              {t('nav_creatine')}
            </button>
            <button 
              onClick={() => setCurrentRoute('workouts')}
              className={`text-sm font-medium transition-colors ${currentRoute === 'workouts' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
            >
              {t('nav_workouts')}
            </button>
            <button 
              onClick={() => setCurrentRoute('learn')}
              className={`text-sm font-medium transition-colors ${currentRoute === 'learn' ? 'text-emerald-600' : 'text-zinc-600 hover:text-emerald-600'}`}
            >
              {t('nav_learn')}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              className="p-2 text-zinc-600 hover:text-emerald-600 transition-colors flex items-center gap-1"
              title={t('language')}
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>

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
