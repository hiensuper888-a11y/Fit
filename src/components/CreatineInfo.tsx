import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, BookOpen, AlertTriangle, Award } from 'lucide-react';

export const CreatineInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-zinc-900 tracking-tight mb-8">Creatine: Khoa học & Thực tế</h1>
      
      <div className="space-y-12">
        <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <h2 className="text-2xl font-bold">Nghiên cứu khoa học</h2>
          </div>
          <p className="text-zinc-600 mb-4">Creatine là một trong những chất bổ sung được nghiên cứu kỹ lưỡng nhất trong thể thao.</p>
          <ul className="list-disc list-inside text-zinc-600 space-y-2">
            <li><a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">ISSN Position Stand (Mỹ)</a>: Khẳng định creatine monohydrate là chất bổ sung hiệu quả nhất cho vận động viên.</li>
            <li><a href="https://www.efsa.europa.eu/en/efsajournal/pub/2303" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">EFSA (Châu Âu)</a>: Xác nhận creatine giúp tăng hiệu suất trong các bài tập cường độ cao.</li>
            <li>Nghiên cứu tại Anh cho thấy lợi ích rõ rệt trong cả võ thuật và tập luyện sức mạnh (gym).</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl font-bold">Tác dụng phụ?</h2>
          </div>
          <p className="text-zinc-600">Với liều lượng khuyến nghị (3-5g/ngày), creatine được coi là cực kỳ an toàn. Một số người có thể gặp tình trạng:</p>
          <ul className="list-disc list-inside text-zinc-600 space-y-2 mt-4">
            <li>Tăng cân nhẹ do giữ nước trong cơ (không phải mỡ).</li>
            <li>Khó chịu tiêu hóa nếu không uống đủ nước hoặc dùng liều quá cao ngay từ đầu.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold">Sản phẩm uy tín & Chứng nhận</h2>
          </div>
          <p className="text-zinc-600 mb-6">Hãy chọn sản phẩm có các chứng nhận như <strong>Informed-Sport</strong>, <strong>NSF Certified for Sport</strong> để đảm bảo không chứa chất cấm.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Optimum Nutrition', link: 'https://www.optimumnutrition.com/' },
              { name: 'MyProtein', link: 'https://www.myprotein.com/' },
              { name: 'Thorne', link: 'https://www.thorne.com/' },
              { name: 'Bulk', link: 'https://www.bulk.com/' },
              { name: 'NOW Foods', link: 'https://www.nowfoods.com/' },
              { name: 'Nutricost', link: 'https://nutricost.com/' },
              { name: 'Pure Encapsulations', link: 'https://pureencapsulations.com/' },
              { name: 'PhD Nutrition', link: 'https://phd.com/' },
              { name: 'Dymatize', link: 'https://dymatize.com/' },
              { name: 'MuscleTech', link: 'https://muscletech.com/' },
            ].map((brand) => (
              <a key={brand.name} href={brand.link} target="_blank" rel="noreferrer" className="block p-4 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-emerald-500 transition-colors">
                <span className="font-bold text-zinc-900">{brand.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
