import React, { useEffect, useState } from 'react';
import { Zap, Brain, ShieldAlert, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { supabase } from '../services/supabaseClient';
import { useLanguage } from '../i18n/LanguageContext';

export const NutrexOutliftInfo: React.FC = () => {
  const [article, setArticle] = useState<any>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchArticle = async () => {
      // Dữ liệu mới cho Outlift Clinical
      setArticle({
        title: 'Nutrex Research: Outlift Clinical',
        logo_url: 'https://nutrex.com/cdn/shop/files/Nutrex_Logo_Black_300x.png?v=1614365780',
        product_image_url: 'https://nutrex.com/cdn/shop/files/Outlift-Clinical-MV-FR.png?v=1758820161&width=680'
      });
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
            {article?.title || t('outlift_title')}
          </h3>
          <p className="text-zinc-500">Phiên bản Clinical mới nhất</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-zinc-600 leading-relaxed">
            Outlift Clinical là phiên bản nâng cấp mới nhất, tập trung vào hiệu suất tối đa với liều lượng lâm sàng. Nó giúp tăng cường sức mạnh, sức bền, khả năng pump cơ và sự tập trung trí não mà không gây cảm giác bồn chồn quá mức.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-zinc-200 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-zinc-50 text-zinc-500 uppercase text-xs">
                  <th className="p-3 border-b">{t('ingredient')}</th>
                  <th className="p-3 border-b">{t('dosage')}</th>
                  <th className="p-3 border-b">{t('main_effect')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr><td className="p-3 font-medium">Citrulline Malate 2:1</td><td className="p-3">8g</td><td className="p-3">Tăng lưu lượng máu, pump cơ cực đại.</td></tr>
                <tr><td className="p-3 font-medium">Beta-Alanine</td><td className="p-3">3.2g</td><td className="p-3">Tăng sức bền, giảm mỏi cơ.</td></tr>
                <tr><td className="p-3 font-medium">Creatine Monohydrate</td><td className="p-3">3g</td><td className="p-3">Tăng sức mạnh, ATP.</td></tr>
                <tr><td className="p-3 font-medium">L-Leucine</td><td className="p-3">3g</td><td className="p-3">Hỗ trợ phục hồi cơ bắp.</td></tr>
                <tr><td className="p-3 font-medium">Taurine</td><td className="p-3">2g</td><td className="p-3">Hydrat hóa, tập trung.</td></tr>
                <tr><td className="p-3 font-medium">Caffeine</td><td className="p-3">350mg</td><td className="p-3">Năng lượng, tỉnh táo.</td></tr>
                <tr><td className="p-3 font-medium">N-Acetyl-L-Tyrosine</td><td className="p-3">150mg</td><td className="p-3">Tập trung trí não.</td></tr>
                <tr><td className="p-3 font-medium">BioPerine</td><td className="p-3">5mg</td><td className="p-3">Tăng khả năng hấp thụ.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-zinc-100">
          <img src={article?.product_image_url || "https://nutrex.com/cdn/shop/files/Outlift-Clinical-MV-FR.png?v=1758820161&width=680"} alt="Outlift Clinical" className="max-w-full h-auto rounded-xl mb-4" referrerPolicy="no-referrer" />
          <h4 className="font-bold text-zinc-900">{t('synergy_analysis')}</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <p><strong>{t('physical')}:</strong> Citrulline, Beta-Alanine và Creatine tạo nền tảng vững chắc cho sức mạnh và sức bền.</p>
            <p><strong>{t('mental')}:</strong> Caffeine và Tyrosine giúp duy trì sự tập trung cao độ trong suốt buổi tập.</p>
            <p><strong>{t('recovery')}:</strong> Leucine hỗ trợ quá trình phục hồi ngay trong lúc tập.</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
        <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" /> {t('scientific_review')}
        </h4>
        <p className="text-sm text-emerald-800 leading-relaxed mb-4">
          Theo các nghiên cứu từ <strong>Journal of the International Society of Sports Nutrition (JISSN - Mỹ)</strong>, các thành phần chính trong Outlift như Citrulline Malate, Beta-Alanine và Caffeine đã được chứng minh hiệu quả trong việc cải thiện hiệu suất thể thao và trì hoãn mỏi cơ khi sử dụng đúng liều lượng lâm sàng.
        </p>
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
          <CheckCircle2 className="w-4 h-4" /> {t('safety_note')}
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-2xl mb-8 flex gap-4">
        <ShieldAlert className="w-10 h-10 text-amber-600 shrink-0" />
        <div>
          <h4 className="font-bold text-amber-900 mb-1">{t('important_note')}</h4>
          <p className="text-sm text-amber-800">
            {t('caffeine_warning')}
          </p>
        </div>
      </div>

      <a 
        href="https://nutrex.com/products/outlift" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
      >
        {t('more_info')} <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};
