export type LocalizedString = { en: string; vi: string };

export interface Product {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number;
  image: string;
  category: LocalizedString;
}

export interface Workout {
  id: string;
  title: LocalizedString;
  level: LocalizedString;
  duration: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: { en: 'Whey Protein Isolate', vi: 'Whey Protein Tinh Khiết' },
    description: {
      en: 'High-quality whey protein isolate for fast muscle recovery and growth.',
      vi: 'Whey protein tinh khiết chất lượng cao giúp phục hồi và phát triển cơ bắp nhanh chóng.',
    },
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800',
    category: { en: 'Protein', vi: 'Đạm' },
  },
  {
    id: 'p2',
    name: { en: 'Pre-Workout Energy', vi: 'Năng Lượng Trước Tập' },
    description: {
      en: 'Explosive energy and focus for your most intense workouts.',
      vi: 'Năng lượng bùng nổ và sự tập trung cho những buổi tập cường độ cao nhất.',
    },
    price: 34.50,
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800',
    category: { en: 'Energy', vi: 'Năng lượng' },
  },
  {
    id: 'p3',
    name: { en: 'BCAA Amino Acids', vi: 'Axit Amin BCAA' },
    description: {
      en: 'Essential amino acids to support endurance and reduce muscle fatigue.',
      vi: 'Các axit amin thiết yếu hỗ trợ sức bền và giảm mệt mỏi cơ bắp.',
    },
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1622484211148-713214150828?auto=format&fit=crop&q=80&w=800',
    category: { en: 'Recovery', vi: 'Phục hồi' },
  },
  {
    id: 'p4',
    name: { en: 'Creatine Monohydrate', vi: 'Creatine Monohydrate' },
    description: {
      en: 'Pure creatine to increase strength and power output.',
      vi: 'Creatine tinh khiết giúp tăng sức mạnh và công suất đầu ra.',
    },
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
    category: { en: 'Strength', vi: 'Sức mạnh' },
  },
];

export const workouts: Workout[] = [
  {
    id: 'w1',
    title: { en: 'Full Body Hypertrophy', vi: 'Phát Triển Cơ Toàn Thân' },
    level: { en: 'Intermediate', vi: 'Trung cấp' },
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'w2',
    title: { en: 'HIIT Fat Burner', vi: 'Đốt Mỡ HIIT' },
    level: { en: 'Beginner', vi: 'Người mới' },
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'w3',
    title: { en: 'Advanced Powerlifting', vi: 'Cử Tạ Nâng Cao' },
    level: { en: 'Advanced', vi: 'Nâng cao' },
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  },
];
