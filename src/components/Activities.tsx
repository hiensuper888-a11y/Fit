import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Dumbbell, Zap, Target } from 'lucide-react';

const activities = [
  {
    title: "Võ thuật (Martial Arts)",
    icon: Sword,
    desc: "Rèn luyện sự dẻo dai, phản xạ và kỷ luật với các bộ môn Muay Thai, BJJ, Boxing.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c9d58b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Gym & Thể hình",
    icon: Dumbbell,
    desc: "Xây dựng cơ bắp, tăng sức mạnh và cải thiện vóc dáng với các bài tập chuyên sâu.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "HIIT & Cardio",
    icon: Zap,
    desc: "Đốt cháy calo tối đa, cải thiện sức bền tim mạch trong thời gian ngắn.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
  }
];

export const Activities: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 tracking-tight">Hoạt động Thể thao</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Khám phá các bộ môn giúp bạn nâng cao sức khỏe và tinh thần mỗi ngày.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer h-96"
            >
              <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <act.icon className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-2">{act.title}</h3>
                <p className="text-zinc-300 text-sm">{act.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
