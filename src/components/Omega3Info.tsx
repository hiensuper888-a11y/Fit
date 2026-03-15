import React from 'react';
import { Heart } from 'lucide-react';

export const Omega3Info: React.FC = () => {
  return (
    <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
      <img src="https://picsum.photos/seed/salmon/800/400" alt="Omega-3" className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
      <div className="flex items-center gap-4 mb-6">
        <Heart className="w-8 h-8 text-blue-500" />
        <h3 className="text-2xl font-serif font-bold m-0">Dầu cá Omega-3 (EPA & DHA)</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 text-zinc-600 text-sm">
          <p><strong>Thể chất & Cơ bắp:</strong> Chống viêm toàn thân. Tăng cường độ nhạy insulin, kích hoạt con đường mTOR giúp tăng tổng hợp protein cơ bắp. Giảm đau nhức xương khớp.</p>
          <p><strong>Trí não:</strong> DHA chiếm phần lớn cấu trúc não bộ. EPA được chứng minh lâm sàng có hiệu quả tương đương thuốc chống trầm cảm nhẹ. Cải thiện trí nhớ và sự tập trung.</p>
          <p><strong>Nam giới & Ung thư:</strong> Cải thiện lưu thông máu (hỗ trợ rối loạn cương dương). Chế độ ăn giàu Omega-3 liên quan đến việc giảm nguy cơ mắc ung thư ruột kết và tuyến tiền liệt.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h4 className="font-serif font-bold text-blue-800 mb-2">Đảo ngược lão hóa</h4>
          <p className="text-blue-900 text-sm">Nghiên cứu cho thấy nồng độ Omega-3 trong máu cao có liên quan trực tiếp đến việc bảo tồn chiều dài Telomere (thước đo sinh học của sự lão hóa).</p>
        </div>
      </div>
    </section>
  );
};
