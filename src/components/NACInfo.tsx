import React from 'react';
import { Shield } from 'lucide-react';

export const NACInfo: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
      <img src="https://picsum.photos/seed/liver/800/400" alt="NAC" className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
      <div className="flex items-center gap-4 mb-6">
        <Shield className="w-8 h-8 text-emerald-600" />
        <h3 className="text-2xl font-serif font-bold m-0">NAC (N-Acetyl Cysteine)</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 text-zinc-600 text-sm">
          <p><strong>Thể chất & Cơ bắp:</strong> Tiền chất tạo ra Glutathione (chất chống oxy hóa nội sinh mạnh nhất cơ thể). Giảm mệt mỏi cơ bắp, hỗ trợ giải độc gan và phổi cực kỳ hiệu quả.</p>
          <p><strong>Trí não & Tinh thần:</strong> Điều chỉnh nồng độ Glutamate trong não. Được sử dụng trong y khoa để hỗ trợ điều trị rối loạn ám ảnh cưỡng chế (OCD), trầm cảm và nghiện ngập.</p>
          <p><strong>Nam giới & Ung thư:</strong> Cải thiện thông số tinh dịch. Khả năng chống oxy hóa mạnh giúp ngăn ngừa đột biến DNA, một trong những nguyên nhân gốc rễ của ung thư.</p>
        </div>
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
          <h4 className="font-serif font-bold text-emerald-800 mb-2">Đảo ngược lão hóa</h4>
          <p className="text-emerald-900 text-sm">Duy trì mức Glutathione cao là chìa khóa để kéo dài tuổi thọ, vì Glutathione suy giảm mạnh khi chúng ta già đi, dẫn đến bệnh tật.</p>
        </div>
      </div>
    </section>
  );
};
