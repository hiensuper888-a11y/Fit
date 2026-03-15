import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const MilkThistleInfo: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
      <img src="https://picsum.photos/seed/milk-thistle/800/400" alt="Milk Thistle" className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
      <div className="flex items-center gap-4 mb-6">
        <ShieldCheck className="w-8 h-8 text-green-600" />
        <h3 className="text-2xl font-serif font-bold m-0">Milk Thistle (Cây kế sữa - Silymarin)</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 text-zinc-600 text-sm">
          <p><strong>Thể chất & Cơ bắp:</strong> Bảo vệ và tái tạo tế bào gan. Gan khỏe mạnh là điều kiện tiên quyết để tổng hợp protein phát triển cơ bắp và chuyển hóa mỡ thừa.</p>
          <p><strong>Trí não:</strong> Silymarin có đặc tính bảo vệ thần kinh, ngăn ngừa sự suy giảm nhận thức do tuổi tác nhờ khả năng chống lại stress oxy hóa trong não.</p>
          <p><strong>Nam giới & Ung thư:</strong> Hỗ trợ gan đào thải hormone dư thừa (như estrogen), giúp cân bằng testosterone ở nam giới. Chiết xuất Silymarin cho thấy khả năng ức chế sự phát triển của tế bào ung thư tuyến tiền liệt và ung thư vú trong các nghiên cứu phòng thí nghiệm.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
          <h4 className="font-serif font-bold text-green-800 mb-2">Đảo ngược lão hóa</h4>
          <p className="text-green-900 text-sm">Một lá gan hoạt động tối ưu giúp cơ thể liên tục đào thải độc tố, ngăn chặn sự tích tụ của các chất gây lão hóa (AGEs).</p>
        </div>
      </div>
    </section>
  );
};
