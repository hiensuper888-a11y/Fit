import React from 'react';
import { Zap, Brain, ShieldAlert, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

export const NutrexOutliftInfo: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 bg-zinc-50 rounded-2xl p-4 border border-zinc-100 flex items-center justify-center shrink-0">
          <img src="https://logo.clearbit.com/nutrex.com" alt="Nutrex Logo" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h3 className="text-3xl font-serif font-bold text-zinc-900 flex items-center gap-2">
            Nutrex Research: Outlift
          </h3>
          <p className="text-zinc-500">Pre-workout theo liều lượng lâm sàng (Clinical Dose)</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-zinc-600 leading-relaxed">
            Nutrex Research "Outlift" nổi tiếng với định hướng "Clinical Dose", sử dụng các thành phần với hàm lượng tương đương các nghiên cứu khoa học, không dùng hỗn hợp bí mật (proprietary blends).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <h4 className="font-bold text-zinc-900 mb-3">Thành phần chính</h4>
              <ul className="text-sm text-zinc-600 space-y-2 list-disc list-inside">
                <li>Citrulline Malate (8g): Tăng lưu thông máu, pump cơ.</li>
                <li>Beta-Alanine (3.2g): Trì hoãn mỏi cơ.</li>
                <li>Creatine Monohydrate (3g): Tăng sức mạnh.</li>
                <li>Caffeine (350mg): Tăng tỉnh táo, tập trung.</li>
              </ul>
            </div>
            <div className="bg-zinc-50 p-6 rounded-2xl">
              <h4 className="font-bold text-zinc-900 mb-3">Tác dụng & Ảnh hưởng</h4>
              <ul className="text-sm text-zinc-600 space-y-2 list-disc list-inside">
                <li>Thể chất: Tăng sức mạnh, sức bền, căng cơ.</li>
                <li>Tinh thần: Tăng sự tập trung, giảm mệt mỏi.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-2xl p-4 flex items-center justify-center border border-zinc-100">
          <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=400&q=80" alt="Outlift Product" className="max-w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
        <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" /> Đánh giá khoa học (US & EU)
        </h4>
        <p className="text-sm text-emerald-800 leading-relaxed mb-4">
          Theo các nghiên cứu từ <strong>Journal of the International Society of Sports Nutrition (JISSN - Mỹ)</strong>, các thành phần chính trong Outlift như Citrulline Malate, Beta-Alanine và Caffeine đã được chứng minh hiệu quả trong việc cải thiện hiệu suất thể thao và trì hoãn mỏi cơ khi sử dụng đúng liều lượng lâm sàng.
        </p>
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
          <CheckCircle2 className="w-4 h-4" /> Độ an toàn cao khi sử dụng đúng liều lượng.
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-2xl mb-8 flex gap-4">
        <ShieldAlert className="w-10 h-10 text-amber-600 shrink-0" />
        <div>
          <h4 className="font-bold text-amber-900 mb-1">Lưu ý quan trọng</h4>
          <p className="text-sm text-amber-800">
            Hàm lượng Caffeine cao (350mg). Không dùng nếu nhạy cảm với caffeine hoặc tập tối muộn. Bắt đầu với liều nhỏ để kiểm tra khả năng chịu đựng.
          </p>
        </div>
      </div>

      <a 
        href="https://nutrex.com/products/outlift" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
      >
        Thông tin chi tiết từ hãng <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};
