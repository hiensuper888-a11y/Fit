import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Facebook, Instagram, Youtube, Pill } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-white py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8 group cursor-pointer">
              <div className="logo-rays-container">
                <div className="logo-rays"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all duration-500 relative z-10">
                  <Pill className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]">{t('app_name')}</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              {t('hero_subtitle')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/profile.php?id=61582965982019&locale=vi_VN" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-emerald-500">{t('nav_shop')}</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Protein</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pre-Workout</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vitamins</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-emerald-500">{t('nav_workouts')}</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Strength Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cardio Blast</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Yoga & Mobility</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-emerald-500">Contact & Support</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium mb-6">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61582965982019&locale=vi_VN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Facebook className="w-4 h-4" /> Facebook Profile
                </a>
              </li>
              <li>Phone: 0973683410</li>
              <li>BIDV: 3142848355</li>
            </ul>
            <div className="flex flex-col gap-4">
              <div className="bg-white p-3 rounded-2xl inline-block shadow-lg shadow-emerald-500/10 group cursor-pointer hover:scale-105 transition-transform duration-300 w-fit">
                <img 
                  src="https://img.vietqr.io/image/bidv-3142848355-compact.jpg?accountName=CAO%20MINH%20HIEN" 
                  alt="Donate QR Code" 
                  className="w-24 h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
                <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-tighter mt-2 text-center group-hover:text-emerald-600 transition-colors">Scan to Support</p>
              </div>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-donate-modal'))}
                className="text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-white px-4 py-2 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20 w-fit"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-600">
          <p>{t('footer_text')}</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
