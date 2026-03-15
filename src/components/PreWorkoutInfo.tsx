import React from 'react';
import { Zap, Brain, Activity, Pill, AlertTriangle } from 'lucide-react';

export const PreWorkoutInfo: React.FC = () => {
  return (
    <div className="space-y-8 prose-article">
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
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
              <li><strong>Tăng sức mạnh & sức bền:</strong> Caffeine giúp giảm cảm giác mệt mỏi, tăng khả năng chịu đựng.</li>
              <li><strong>Pump cơ (Bơm máu):</strong> Citrulline Malate và Arginine làm giãn mạch máu, tăng lưu lượng máu và oxy đến cơ bắp.</li>
              <li><strong>Giảm mỏi cơ:</strong> Beta-Alanine giúp trung hòa axit lactic, cho phép tập thêm số rep (lần lặp lại).</li>
              <li><strong>Tăng sinh nhiệt:</strong> Hỗ trợ đốt cháy calo nhiều hơn trong quá trình tập luyện.</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <h4 className="font-serif font-bold text-purple-800 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" /> Tinh thần & Đầu óc (Mental)
            </h4>
            <ul className="list-disc list-inside text-purple-900 space-y-2 text-sm">
              <li><strong>Tăng sự tập trung (Focus):</strong> L-Tyrosine và Caffeine giúp cải thiện sự tỉnh táo và tập trung cao độ vào bài tập.</li>
              <li><strong>Cải thiện tâm trạng:</strong> Kích thích giải phóng Dopamine và Adrenaline, tạo cảm giác hưng phấn và động lực tập luyện.</li>
              <li><strong>Giảm cảm giác đau:</strong> Caffeine có thể làm giảm nhận thức về sự đau đớn trong khi tập nặng.</li>
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
          <p><strong>Tác dụng phụ thông thường:</strong></p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Cảm giác ngứa ngáy, châm chích dưới da (do Beta-Alanine - hoàn toàn vô hại).</li>
            <li>Tim đập nhanh, bồn chồn, khó ngủ (nếu dùng quá gần giờ ngủ hoặc quá liều Caffeine).</li>
            <li>Rối loạn tiêu hóa nhẹ nếu dùng khi bụng quá đói.</li>
          </ul>
          
          <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
            <h4 className="font-serif font-bold text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Tương tác thuốc (Cần lưu ý)
            </h4>
            <ul className="list-disc list-inside text-red-900 space-y-2 text-sm">
              <li><strong>Thuốc điều trị huyết áp/tim mạch:</strong> Pre-workout chứa chất kích thích làm tăng nhịp tim và huyết áp. Tuyệt đối tham khảo ý kiến bác sĩ.</li>
              <li><strong>Thuốc chống trầm cảm (MAOIs, SSRIs):</strong> Có thể tương tác với các thành phần kích thích thần kinh trong Pre-workout.</li>
              <li><strong>Thuốc trị hen suyễn:</strong> Caffeine có thể tương tác với một số loại thuốc giãn phế quản.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <Zap className="w-8 h-8 text-amber-500" />
          <h3 className="text-2xl font-serif font-bold m-0">Sự phối hợp các chất (Synergy) & Hiệu suất</h3>
        </div>
        <div className="space-y-4 text-zinc-600">
          <p>Các thành phần trong Pre-workout không hoạt động độc lập mà phối hợp với nhau tạo ra hiệu ứng cộng hưởng (Synergy), mang lại hiệu suất vượt trội:</p>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Caffeine + L-Theanine:</strong> L-Theanine (một axit amin từ trà xanh) làm dịu sự bồn chồn, lo âu do Caffeine gây ra. Sự kết hợp này mang lại sự "tỉnh táo êm ái" (smooth energy), tăng cường sự tập trung mà không bị "crash" (sập năng lượng) sau tập.</li>
            <li><strong>Citrulline + Malic Acid (Citrulline Malate):</strong> Citrulline tăng N.O (Nitric Oxide) giúp giãn mạch, trong khi Malic Acid tham gia vào chu trình Krebs giúp sản sinh năng lượng. Kết hợp này vừa mang lại cảm giác "Pump" cơ bắp cuồn cuộn, vừa tăng sức bền đáng kể.</li>
            <li><strong>Caffeine + Beta-Alanine:</strong> Caffeine kích thích hệ thần kinh trung ương để phát lực mạnh hơn, trong khi Beta-Alanine trì hoãn sự mỏi cơ tại chỗ. Giúp bạn nâng tạ nặng hơn và được nhiều reps hơn.</li>
          </ul>
          <p className="mt-4 font-semibold text-emerald-700">Kết quả: Mang lại hiệu suất tập luyện vượt trội, cho phép bứt phá giới hạn bản thân, tăng tổng khối lượng tập luyện (Volume), từ đó kích thích cơ bắp phát triển tốt hơn.</p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Các chất cấm & Rủi ro trong Pre-workout</h3>
        </div>
        <div className="space-y-4 text-zinc-600">
          <p>Một số loại Pre-workout "hardcore" trên thị trường chợ đen có thể chứa các chất kích thích mạnh đã bị cấm bởi WADA (Cơ quan Chống Doping Thế giới) và FDA do rủi ro sức khỏe nghiêm trọng:</p>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>DMAA (1,3-dimethylamylamine) & DMHA:</strong> Các chất kích thích thần kinh cực mạnh có cấu trúc tương tự amphetamine. Mang lại sự hưng phấn tột độ nhưng gây co thắt mạch máu, tăng huyết áp đột ngột, có thể dẫn đến nhồi máu cơ tim hoặc đột quỵ.</li>
            <li><strong>Ephedrine / Ephedra:</strong> Từng được dùng để giảm mỡ và tăng năng lượng, nhưng đã bị cấm do gây ra các vấn đề nghiêm trọng về tim mạch và tử vong.</li>
            <li><strong>Synephrine liều cao (Bitter Orange Extract):</strong> Khi kết hợp với lượng lớn Caffeine có thể gây rối loạn nhịp tim.</li>
          </ul>
          <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
            <p className="text-sm text-red-800 font-semibold">
              Khuyến cáo: Chỉ nên sử dụng các sản phẩm Pre-workout từ các thương hiệu uy tín, có chứng nhận bên thứ 3 (như Informed-Choice, NSF) để đảm bảo không chứa chất cấm. Tránh xa các sản phẩm quảng cáo mang lại "năng lượng điên rồ" mà không minh bạch thành phần (Proprietary Blends).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <Zap className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Thành phần chính & Liều lượng chuẩn</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-zinc-200 rounded-xl overflow-hidden mt-4">
            <thead className="bg-zinc-100">
              <tr>
                <th className="p-4 text-left border border-zinc-200">Thành phần</th>
                <th className="p-4 text-left border border-zinc-200">Tác dụng chính</th>
                <th className="p-4 text-left border border-zinc-200">Liều lượng hiệu quả (Lâm sàng)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Caffeine</td>
                <td className="p-4 border border-zinc-200">Tỉnh táo, năng lượng, sức mạnh</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">150mg - 300mg</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Citrulline Malate</td>
                <td className="p-4 border border-zinc-200">Bơm máu (Pump), giãn mạch</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">6g - 8g</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Beta-Alanine</td>
                <td className="p-4 border border-zinc-200">Giảm mỏi cơ, tăng sức bền</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">3.2g - 4g</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">L-Tyrosine</td>
                <td className="p-4 border border-zinc-200">Tập trung tinh thần (Focus)</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">1g - 2g</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500 italic">* Lưu ý: Luôn bắt đầu với nửa liều (half-scoop) để kiểm tra khả năng dung nạp của cơ thể.</p>
      </section>
    </div>
  );
};
