import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { BicepsFlexed, ShoppingCart, Globe, User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Navbar: React.FC<{
  currentRoute: 'home' | 'article' | 'profile';
  setCurrentRoute: (route: 'home' | 'article' | 'profile') => void;
  onOpenAuth: () => void;
  user: any;
}> = ({ currentRoute, setCurrentRoute, onOpenAuth, user }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900 text-zinc-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setCurrentRoute('home')}>
            <div className="relative">
              <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-zinc-800 p-1.5 rounded-full border border-emerald-500/30">
                <BicepsFlexed className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none text-white">FIT<span className="text-emerald-500">SUPPS</span></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 leading-none mt-1">{t('sub_name')}</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentRoute('home')} className={`hover:text-emerald-400 transition-colors ${currentRoute === 'home' ? 'text-emerald-500' : ''}`}>{t('nav_home')}</button>
            <button onClick={() => setCurrentRoute('article')} className={`hover:text-emerald-400 transition-colors ${currentRoute === 'article' ? 'text-emerald-500' : ''}`}>{t('nav_learn')}</button>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentRoute('profile')} 
                  className={`p-2 hover:bg-zinc-800 rounded-full transition-colors relative ${currentRoute === 'profile' ? 'text-emerald-500 bg-zinc-800' : ''}`} 
                  title={t('profile')}
                >
                  {user.user_metadata?.avatar_url ? (
                    <img src={user.user_metadata.avatar_url} alt="Avatar" className="w-5 h-5 rounded-full object-cover" />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </button>
                <button onClick={handleLogout} className="p-2 hover:bg-zinc-800 rounded-full transition-colors relative group" title={t('logout')}>
                  <LogOut className="h-5 w-5 text-emerald-400" />
                </button>
              </div>
            ) : (
              <button onClick={onOpenAuth} className="p-2 hover:bg-zinc-800 rounded-full transition-colors relative" title={t('login')}>
                <User className="h-5 w-5" />
              </button>
            )}

            <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-emerald-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
            
            <div className="flex items-center bg-zinc-800 rounded-full p-1">
              <Globe className="h-4 w-4 ml-2 text-zinc-400" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as 'en' | 'vi' | 'zh')}
                className="bg-transparent text-sm border-none focus:ring-0 cursor-pointer pl-1 pr-2 py-1 outline-none"
              >
                <option value="vi">VI</option>
                <option value="en">EN</option>
                <option value="zh">ZH</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
