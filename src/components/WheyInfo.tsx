import React from 'react';
import { FlaskConical, Zap, Scale } from 'lucide-react';

export const WheyInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <FlaskConical className="w-8 h-8 text-emerald-600" />
          <h3 className="text-2xl font-bold m-0">Công nghệ & Quy trình sản xuất</h3>
        </div>
        <p className="text-zinc-600 mb-4">Whey protein được chiết xuất từ sữa trong quá trình sản xuất phô mai. Các công nghệ chính bao gồm:</p>
        <ul className="list-disc list-inside text-zinc-600 space-y-2">
          <li><strong>Ultrafiltration (Siêu lọc):</strong> Loại bỏ phần lớn chất béo và lactose, tạo ra Whey Concentrate (WPC).</li>
          <li><strong>Microfiltration (Vi lọc):</strong> Loại bỏ gần như hoàn toàn chất béo và lactose, tạo ra Whey Isolate (WPI) với độ tinh khiết cao.</li>
          <li><strong>Ion Exchange (Trao đổi ion):</strong> Sử dụng điện tích để tách protein, tạo ra Whey Isolate tinh khiết nhất nhưng có thể làm mất một số phân đoạn protein có lợi.</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <Zap className="w-8 h-8 text-emerald-600" />
          <h3 className="text-2xl font-bold m-0">Tác dụng & Lợi ích</h3>
        </div>
        <p className="text-zinc-600 mb-4">Nghiên cứu từ các tổ chức uy tín (EFSA - Châu Âu, ISSN - Mỹ) cho thấy:</p>
        <ul className="list-disc list-inside text-zinc-600 space-y-2">
          <li><strong>Tăng tổng hợp protein cơ bắp:</strong> Nhờ hàm lượng Leucine cao, kích hoạt con đường mTOR.</li>
          <li><strong>Phục hồi nhanh chóng:</strong> Hấp thụ nhanh giúp cung cấp acid amin cho cơ bắp ngay sau tập luyện.</li>
          <li><strong>Tiện lợi:</strong> Cung cấp lượng protein chất lượng cao mà không cần chuẩn bị thức ăn phức tạp.</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <Scale className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-bold m-0">Whey vs. Thức ăn tự nhiên</h3>
        </div>
        <p className="text-zinc-600 mb-4">Whey không "tốt hơn" thức ăn tự nhiên (thịt, cá, trứng), mà là một công cụ bổ sung:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-zinc-200 rounded-xl overflow-hidden mt-4">
            <thead className="bg-zinc-100">
              <tr>
                <th className="p-4 text-left border border-zinc-200">Tiêu chí</th>
                <th className="p-4 text-left border border-zinc-200">Whey Protein</th>
                <th className="p-4 text-left border border-zinc-200">Thức ăn tự nhiên</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Tốc độ hấp thụ</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">Rất nhanh</td>
                <td className="p-4 border border-zinc-200">Chậm đến trung bình</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Tiện lợi</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">Rất cao</td>
                <td className="p-4 border border-zinc-200">Thấp</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Dinh dưỡng khác</td>
                <td className="p-4 border border-zinc-200">Ít (chủ yếu protein)</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">Cao (vitamin, khoáng)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-zinc-600"><strong>Kết luận:</strong> Dùng Whey khi bạn cần protein nhanh (sau tập) hoặc không đủ thời gian chuẩn bị bữa ăn. Thức ăn tự nhiên vẫn là nền tảng cho sức khỏe lâu dài.</p>
      </section>
    </div>
  );
};

