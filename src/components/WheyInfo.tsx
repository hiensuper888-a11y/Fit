import React from 'react';
import { FlaskConical, Zap, Scale, Brain, Activity, Pill } from 'lucide-react';

export const WheyInfo: React.FC = () => {
  return (
    <div className="space-y-8 prose-article">
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <img src="https://picsum.photos/seed/protein/800/400" alt="Whey Protein" className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
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
              <li><strong>Tăng tổng hợp protein cơ bắp:</strong> Nhờ hàm lượng Leucine cao, kích hoạt con đường mTOR.</li>
              <li><strong>Phục hồi nhanh chóng:</strong> Hấp thụ nhanh giúp cung cấp acid amin cho cơ bắp ngay sau tập luyện.</li>
              <li>Hỗ trợ giảm mỡ khi kết hợp tập luyện nhờ tác dụng tăng sinh nhiệt (thermic effect of food).</li>
              <li>Tăng cường hệ miễn dịch nhờ chứa các immunoglobulins và lactoferrin.</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <h4 className="font-serif font-bold text-purple-800 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" /> Tinh thần & Đầu óc (Mental)
            </h4>
            <ul className="list-disc list-inside text-purple-900 space-y-2 text-sm">
              <li>Cung cấp Tryptophan, một axit amin thiết yếu là tiền chất của Serotonin (hormone hạnh phúc).</li>
              <li>Giúp cải thiện tâm trạng và giảm căng thẳng trong các giai đoạn tập luyện cường độ cao.</li>
              <li>Hỗ trợ chất lượng giấc ngủ tốt hơn khi dùng vào buổi tối (đặc biệt là Casein hoặc Whey blend).</li>
              <li>Không gây tác động tiêu cực đến sức khỏe tinh thần; ngược lại, việc đạt được mục tiêu thể hình giúp tăng sự tự tin.</li>
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
          <p><strong>Tác dụng phụ thông thường:</strong> Đầy hơi, khó tiêu, nổi mụn (thường do dị ứng Lactose trong Whey Concentrate). Giải pháp là chuyển sang Whey Isolate hoặc Hydrolyzed.</p>
          <p><strong>Tương tác thuốc (Cần lưu ý):</strong></p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Kháng sinh (Tetracycline, Quinolone):</strong> Canxi trong Whey Protein có thể liên kết với kháng sinh, làm giảm sự hấp thu của thuốc. Nên uống cách nhau ít nhất 2 giờ.</li>
            <li><strong>Thuốc trị Parkinson (Levodopa):</strong> Protein có thể làm giảm lượng Levodopa được hấp thu vào cơ thể và não bộ.</li>
            <li><strong>Thuốc loãng xương (Alendronate):</strong> Tương tự như kháng sinh, canxi trong whey làm giảm hấp thu thuốc này.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <FlaskConical className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Công nghệ & Quy trình sản xuất</h3>
        </div>
        <p className="text-zinc-600 mb-4">Whey protein được chiết xuất từ sữa trong quá trình sản xuất phô mai. Các công nghệ chính bao gồm:</p>
        <ul className="list-disc list-inside text-zinc-600 space-y-2">
          <li><strong>Ultrafiltration (Siêu lọc):</strong> Loại bỏ phần lớn chất béo và lactose, tạo ra Whey Concentrate (WPC).</li>
          <li><strong>Microfiltration (Vi lọc):</strong> Loại bỏ gần như hoàn toàn chất béo và lactose, tạo ra Whey Isolate (WPI) với độ tinh khiết cao.</li>
          <li><strong>Ion Exchange (Trao đổi ion):</strong> Sử dụng điện tích để tách protein, tạo ra Whey Isolate tinh khiết nhất nhưng có thể làm mất một số phân đoạn protein có lợi.</li>
        </ul>
      </section>
    </div>
  );
};

