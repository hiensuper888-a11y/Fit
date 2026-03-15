import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShoppingBag, Dumbbell, Swords } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950 pt-20">
      {/* Background Images - Split Design */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/2 h-full relative group">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
            alt="Gym Workout" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>
        <div className="w-1/2 h-full relative group">
          <img 
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1469&auto=format&fit=crop" 
            alt="Martial Arts" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>
        {/* Center overlay to blend */}
        <div className="absolute inset-0 bg-zinc-950/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
                Thể Hình & Võ Thuật
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-white leading-tight mb-6 tracking-tight">
              Khai Phá <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Sức Mạnh</span> Tiềm Ẩn
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-lg">
              Đồng hành cùng bạn trên con đường chinh phục đỉnh cao thể chất. Từ phòng Gym khắc nghiệt đến võ đài rực lửa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <ShoppingBag className="w-5 h-5" />
                Khám phá Sản phẩm
              </button>
              <button className="bg-zinc-800/80 hover:bg-zinc-700 text-white border border-zinc-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                Xem Video Tập Luyện
              </button>
            </div>
          </motion.div>

          {/* Right side decorative elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-6 items-end justify-center"
          >
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-6 rounded-3xl w-72 transform translate-x-8 hover:-translate-x-2 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Gym & Fitness</h3>
                  <p className="text-zinc-400 text-sm">Xây dựng cơ bắp</p>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>

            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-6 rounded-3xl w-72 transform -translate-x-8 hover:translate-x-2 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-rose-500/20 rounded-2xl flex items-center justify-center text-rose-400">
                  <Swords className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Martial Arts</h3>
                  <p className="text-zinc-400 text-sm">Tốc độ & Kỹ năng</p>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-rose-500 h-2 rounded-full w-[92%]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

