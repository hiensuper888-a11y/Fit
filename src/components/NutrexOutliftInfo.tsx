import React, { useEffect, useState } from 'react';
import { Zap, Brain, ShieldAlert, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { supabase } from '../services/supabaseClient';

export const NutrexOutliftInfo: React.FC = () => {
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', 'nutrex-outlift')
        .single();

      if (!error && data) {
        setArticle(data);
      }
    };
    fetchArticle();
  }, []);

  return (
    <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 bg-white rounded-2xl p-2 border border-zinc-100 flex items-center justify-center shrink-0">
          <img src={article?.logo_url || "https://nutrex.com/cdn/shop/files/Nutrex_Logo_Black_300x.png?v=1614365780"} alt="Nutrex Logo" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h3 className="text-3xl font-serif font-bold text-zinc-900 flex items-center gap-2">
            {article?.title || "Nutrex Research: Outlift"}
          </h3>
          <p className="text-zinc-500">Pre-workout theo liều lượng lâm sàng (Clinical Dose)</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-zinc-600 leading-relaxed">
            Nutrex Research "Outlift" nổi tiếng với định hướng "Clinical Dose", sử dụng các thành phần với hàm lượng tương đương các nghiên cứu khoa học, không dùng hỗn hợp bí mật (proprietary blends).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-zinc-200 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-zinc-50 text-zinc-500 uppercase text-xs">
                  <th className="p-3 border-b">Thành phần</th>
                  <th className="p-3 border-b">Liều lượng</th>
                  <th className="p-3 border-b">Tác dụng chính</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr><td className="p-3 font-medium">Citrulline Malate</td><td className="p-3">8g</td><td className="p-3">Tăng NO, pump cơ, bền bỉ.</td></tr>
                <tr><td className="p-3 font-medium">Beta-Alanine</td><td className="p-3">3.2g</td><td className="p-3">Đệm axit, giảm mỏi cơ.</td></tr>
                <tr><td className="p-3 font-medium">Creatine Monohydrate</td><td className="p-3">3g</td><td className="p-3">Tăng sức mạnh, ATP.</td></tr>
                <tr><td className="p-3 font-medium">L-Leucine</td><td className="p-3">3g</td><td className="p-3">Tổng hợp protein, phục hồi.</td></tr>
                <tr><td className="p-3 font-medium">Taurine</td><td className="p-3">2g</td><td className="p-3">Hydrat hóa, sức bền.</td></tr>
                <tr><td className="p-3 font-medium">Caffeine</td><td className="p-3">350mg</td><td className="p-3">Tỉnh táo, tập trung.</td></tr>
                <tr><td className="p-3 font-medium">N-Acetyl-L-Tyrosine</td><td className="p-3">150mg</td><td className="p-3">Tập trung trí não.</td></tr>
                <tr><td className="p-3 font-medium">BioPerine</td><td className="p-3">5mg</td><td className="p-3">Tăng khả năng hấp thụ.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-zinc-100">
          <img src={article?.product_image_url || "https://nutrex.com/cdn/shop/products/outlift-blueberry-lemonade_1024x1024.png?v=1675276632"} alt="Outlift Product" className="max-w-full h-auto rounded-xl mb-4" referrerPolicy="no-referrer" />
          <h4 className="font-bold text-zinc-900">Phân tích sự phối hợp (Synergy)</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <p><strong>Thể chất:</strong> Citrulline (pump), Beta-Alanine (bền) và Creatine (sức mạnh) tạo nền tảng tập nặng hơn.</p>
            <p><strong>Tinh thần:</strong> Caffeine + Tyrosine duy trì sự tập trung sắc bén.</p>
            <p><strong>Phục hồi:</strong> Leucine bảo vệ cơ bắp ngay trong lúc tập.</p>
          </div>
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
