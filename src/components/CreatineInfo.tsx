import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, BookOpen, AlertTriangle, Award, Brain, Activity, Pill } from 'lucide-react';

export const CreatineInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 prose-article">
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <img src="https://picsum.photos/seed/muscle/800/400" alt="Creatine" className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
        <div className="flex items-center gap-4 mb-6">
          <Activity className="w-8 h-8 text-emerald-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Tác dụng Thể chất & Tinh thần</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h4 className="font-serif font-bold text-emerald-800 mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5" /> Thể chất (Physical)
            </h4>
            <ul className="list-disc list-inside text-emerald-900 space-y-2 text-sm">
              <li>Tăng cường dự trữ Phosphocreatine, giúp sản sinh ATP nhanh chóng.</li>
              <li>Cải thiện sức mạnh bùng nổ (sprint, cử tạ) lên đến 15%.</li>
              <li>Hỗ trợ phục hồi cơ bắp nhanh hơn giữa các hiệp tập.</li>
              <li>Tăng khối lượng cơ bắp (Hypertrophy) thông qua việc giữ nước nội bào và kích thích tổng hợp protein.</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <h4 className="font-serif font-bold text-purple-800 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" /> Tinh thần & Đầu óc (Mental)
            </h4>
            <ul className="list-disc list-inside text-purple-900 space-y-2 text-sm">
              <li>Cung cấp năng lượng cho não bộ (não tiêu thụ 20% năng lượng cơ thể).</li>
              <li>Cải thiện trí nhớ ngắn hạn và khả năng suy luận, đặc biệt ở người ăn chay hoặc thiếu ngủ.</li>
              <li>Giảm mệt mỏi tinh thần khi thực hiện các tác vụ nhận thức phức tạp.</li>
              <li>Có tiềm năng hỗ trợ giảm các triệu chứng trầm cảm nhẹ nhờ tăng cường năng lượng sinh học cho não.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <Pill className="w-8 h-8 text-red-500" />
          <h3 className="text-2xl font-serif font-bold m-0">Tác dụng phụ & Tương tác thuốc</h3>
        </div>
        <div className="space-y-4 text-zinc-600">
          <p><strong>Tác dụng phụ thông thường:</strong> Tăng cân nhẹ (do giữ nước trong cơ), đầy hơi hoặc tiêu chảy nhẹ nếu uống quá nhiều một lúc (khắc phục bằng cách chia nhỏ liều hoặc uống nhiều nước).</p>
          <p><strong>Tương tác thuốc (Cần lưu ý):</strong></p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Thuốc chống viêm không steroid (NSAIDs):</strong> Dùng chung Creatine với Ibuprofen, Naproxen có thể làm tăng áp lực lên thận.</li>
            <li><strong>Thuốc lợi tiểu:</strong> Tăng nguy cơ mất nước và tổn thương thận do Creatine hút nước vào cơ bắp trong khi thuốc lợi tiểu đào thải nước.</li>
            <li><strong>Caffeine:</strong> Dùng liều lượng lớn Caffeine (&gt;5mg/kg) cùng lúc với Creatine có thể làm giảm hiệu quả hấp thu Creatine và gây khó chịu dạ dày.</li>
          </ul>
          <p className="text-sm text-red-600 mt-4 bg-red-50 p-3 rounded-xl border border-red-100">
            <em>Lưu ý: Người có tiền sử bệnh thận nên tham khảo ý kiến bác sĩ trước khi sử dụng Creatine.</em>
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Nghiên cứu khoa học</h3>
        </div>
        <p className="text-zinc-600 mb-4">Creatine là một trong những chất bổ sung được nghiên cứu kỹ lưỡng nhất trong thể thao.</p>
        <ul className="list-disc list-inside text-zinc-600 space-y-2">
          <li><a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">ISSN Position Stand (Mỹ)</a>: Khẳng định creatine monohydrate là chất bổ sung hiệu quả nhất cho vận động viên.</li>
          <li><a href="https://www.efsa.europa.eu/en/efsajournal/pub/2303" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">EFSA (Châu Âu)</a>: Xác nhận creatine giúp tăng hiệu suất trong các bài tập cường độ cao.</li>
          <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8228134/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Creatine & Brain Health</a>: Phân tích tác động bảo vệ thần kinh và cải thiện nhận thức.</li>
        </ul>
      </section>
    </div>
  );
};

