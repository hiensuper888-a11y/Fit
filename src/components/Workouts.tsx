import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Clock, Dumbbell, Flame, TrendingUp, Play, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Workout } from '../types/database';

export const Workouts: React.FC = () => {
  const { t } = useLanguage();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!supabase) {
        setError('Supabase is not configured. Please check your settings.');
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from('workouts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setWorkouts(data || []);
      } catch (err: any) {
        console.error('Error fetching workouts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2">
              <Dumbbell className="w-4 h-4" />
              <span>{t('workout_title')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              {t('featured_workouts') || 'Featured Workouts'}
            </h2>
          </div>
          <button className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors flex items-center gap-2 group">
            {t('view_all') || 'View All'}
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-2xl text-center">
            <p className="font-bold mb-2">Error loading workouts</p>
            <p className="text-sm">{error}</p>
            <p className="mt-4 text-xs text-red-400">Make sure the 'workouts' table exists in your Supabase database.</p>
          </div>
        ) : workouts.length === 0 ? (
          <div className="text-center py-20 text-zinc-500">
            No workouts found. Please add some to your Supabase 'workouts' table.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workouts.map((workout, index) => (
              <motion.div
                key={workout.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={workout.image} 
                  alt={workout.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {workout.level}
                    </span>
                    <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                      {workout.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform">{workout.title}</h3>
                  
                  <div className="flex items-center gap-6 text-zinc-400 text-sm font-medium mb-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-500" />
                      {workout.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-emerald-500" />
                      {workout.calories}
                    </div>
                  </div>
                  
                  <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-white transition-all transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play className="w-4 h-4 fill-current" />
                    {t('start_workout')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
