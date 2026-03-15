import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-white py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8">
              <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                  <path d="m8.5 8.5 7 7" />
                </svg>
              </div>
              <span className="ml-3 text-2xl font-bold tracking-tight">{t('app_name')}</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              {t('hero_subtitle')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
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
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-emerald-500">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li>support@fitsupps.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Fitness Way, Gym City</li>
            </ul>
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
