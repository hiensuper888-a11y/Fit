import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { BicepsFlexed, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-white py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8">
              <BicepsFlexed className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-2xl font-bold tracking-tight">{t('app_name')}</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              {t('hero_subtitle')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
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
