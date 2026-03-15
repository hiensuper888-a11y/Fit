import React from 'react';
import { Zap, Brain, ShieldAlert, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const PandemicPreWorkoutInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 bg-white rounded-2xl p-2 border border-zinc-100 flex items-center justify-center shrink-0">
          <Zap className="w-12 h-12 text-red-500" />
        </div>
        <div>
          <h3 className="text-3xl font-serif font-bold text-zinc-900 flex items-center gap-2">
            {t('pandemic_title')}
          </h3>
          <p className="text-zinc-500">{t('pandemic_subtitle')}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-zinc-600 leading-relaxed">
            {t('pandemic_description')}
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
                <tr><td className="p-3 font-medium">Citrulline Malate</td><td className="p-3">6g</td><td className="p-3">Tăng lưu lượng máu, pump cơ.</td></tr>
                <tr><td className="p-3 font-medium">Beta-Alanine</td><td className="p-3">3.2g</td><td className="p-3">Giảm tích tụ axit lactic.</td></tr>
                <tr><td className="p-3 font-medium">Caffeine Anhydrous</td><td className="p-3">300mg</td><td className="p-3">Tăng cường sự tỉnh táo.</td></tr>
                <tr><td className="p-3 font-medium">L-Tyrosine</td><td className="p-3">1g</td><td className="p-3">Hỗ trợ tập trung trí não.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-zinc-100">
          <h4 className="font-bold text-zinc-900">{t('synergy_analysis')}</h4>
          <div className="mt-4 space-y-3 text-sm text-zinc-600">
            <p><strong>{t('physical')}:</strong> Sự kết hợp giữa Citrulline và Beta-Alanine giúp tối ưu hóa sức bền và hiệu suất cơ bắp.</p>
            <p><strong>{t('mental')}:</strong> Caffeine và Tyrosine tạo ra trạng thái tập trung cao độ, giảm mệt mỏi tinh thần.</p>
            <p><strong>{t('recovery')}:</strong> Hỗ trợ giảm tổn thương cơ bắp sau tập luyện cường độ cao.</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
        <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" /> {t('scientific_review')}
        </h4>
        <p className="text-sm text-emerald-800 leading-relaxed mb-4">
          Các thành phần trong Pandemic Pre-workout đều là những hoạt chất phổ biến, đã được nghiên cứu rộng rãi về hiệu quả tăng cường hiệu suất thể thao. Tuy nhiên, hiệu quả thực tế có thể thay đổi tùy thuộc vào cơ địa và mức độ dung nạp caffeine của mỗi người.
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
    </div>
  );
};
