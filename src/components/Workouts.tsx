import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { workouts } from '../data/mockData';
import { Play, Clock, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export const Workouts: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="workouts" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">{t('workout_title')}</h2>
            <p className="mt-2 text-zinc-500">{t('featured_workouts')}</p>
          </div>
          <button className="text-emerald-600 font-medium hover:text-emerald-700 hidden sm:block">
            {t('view_all')} &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <motion.div 
              key={workout.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={workout.image} 
                  alt={workout.title[language]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {workout.title[language]}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-zinc-300">
                  <div className="flex items-center">
                    <Activity className="w-4 h-4 mr-1 text-emerald-400" />
                    {workout.level[language]}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-emerald-400" />
                    {workout.duration}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-emerald-500 text-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
