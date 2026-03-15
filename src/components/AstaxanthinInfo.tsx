import React from 'react';
import { Sparkles } from 'lucide-react';

export const AstaxanthinInfo: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
      <img src="https://picsum.photos/seed/astaxanthin/800/400" alt="Astaxanthin" className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
      <div className="flex items-center gap-4 mb-6">
        <Sparkles className="w-8 h-8 text-red-500" />
        <h3 className="text-2xl font-serif font-bold m-0">Astaxanthin (Vua chống oxy hóa)</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 text-zinc-600 text-sm">
          <p><strong>Thể chất & Cơ bắp:</strong> Mạnh hơn Vitamin C 6000 lần. Giảm thiểu tổn thương cơ bắp và viêm nhiễm sau tập nặng, tăng sức bền đáng kể bằng cách bảo vệ ty thể.</p>
          <p><strong>Trí não:</strong> Là một trong số ít chất chống oxy hóa có thể vượt qua hàng rào máu não (Blood-Brain Barrier), bảo vệ tế bào thần kinh khỏi thoái hóa (Alzheimer, Parkinson).</p>
          <p><strong>Nam giới & Ung thư:</strong> Cải thiện rõ rệt chất lượng và độ di động của tinh trùng. Các nghiên cứu in-vitro cho thấy khả năng thúc đẩy quá trình tự chết (apoptosis) của tế bào ung thư.</p>
        </div>
        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h4 className="font-serif font-bold text-red-800 mb-2">Đảo ngược lão hóa</h4>
          <p className="text-red-900 text-sm">Bảo vệ DNA khỏi tổn thương do gốc tự do, bảo vệ da khỏi tia UV từ bên trong, làm chậm quá trình lão hóa tế bào toàn diện.</p>
        </div>
      </div>
    </section>
  );
};
