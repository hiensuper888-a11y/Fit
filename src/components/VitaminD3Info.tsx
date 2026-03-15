import React from 'react';
import { Activity } from 'lucide-react';

export const VitaminD3Info: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
      <img src="https://picsum.photos/seed/sunlight/800/400" alt="Vitamin D3" className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
      <div className="flex items-center gap-4 mb-6">
        <Activity className="w-8 h-8 text-yellow-500" />
        <h3 className="text-2xl font-serif font-bold m-0">Vitamin D3 (Hormone ánh sáng)</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 text-zinc-600 text-sm">
          <p><strong>Thể chất & Cơ bắp:</strong> Hoạt động như một hormone. Cần thiết cho sự hấp thụ canxi, sức mạnh của sợi cơ type II (sợi cơ nhanh, to). Tăng cường hệ miễn dịch tối đa.</p>
          <p><strong>Trí não:</strong> Có các thụ thể Vitamin D trên khắp não bộ. Thiếu hụt D3 liên quan mật thiết đến trầm cảm, lo âu và suy giảm nhận thức.</p>
          <p><strong>Nam giới & Ung thư:</strong> Nồng độ D3 tối ưu tỷ lệ thuận với mức Testosterone tự nhiên. D3 đóng vai trò quan trọng trong việc điều chỉnh sự phát triển tế bào, giảm đáng kể nguy cơ ung thư đại trực tràng và các bệnh tự miễn.</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
          <h4 className="font-serif font-bold text-yellow-800 mb-2">Đảo ngược lão hóa</h4>
          <p className="text-yellow-900 text-sm">Mức Vitamin D3 đầy đủ liên quan đến việc giảm tỷ lệ tử vong do mọi nguyên nhân (all-cause mortality), giúp kéo dài tuổi thọ khỏe mạnh.</p>
        </div>
      </div>
    </section>
  );
};
