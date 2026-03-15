import React from 'react';
import { Moon, Brain, Activity, Pill, AlertTriangle } from 'lucide-react';

export const MelatoninInfo: React.FC = () => {
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
              <li><strong>Phục hồi cơ bắp:</strong> Giấc ngủ sâu là thời điểm cơ thể tiết ra Hormone tăng trưởng (HGH) nhiều nhất, giúp sửa chữa và xây dựng cơ bắp.</li>
              <li><strong>Chống oxy hóa mạnh:</strong> Melatonin là một chất chống oxy hóa tự nhiên, giúp giảm viêm và tổn thương tế bào sau khi tập luyện cường độ cao.</li>
              <li><strong>Điều hòa nhịp sinh học:</strong> Giúp cơ thể nhận biết thời điểm cần nghỉ ngơi, đặc biệt hữu ích cho người thường xuyên thay đổi múi giờ (Jet lag) hoặc làm ca đêm.</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <h4 className="font-serif font-bold text-purple-800 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" /> Tinh thần & Đầu óc (Mental)
            </h4>
            <ul className="list-disc list-inside text-purple-900 space-y-2 text-sm">
              <li><strong>Cải thiện chất lượng giấc ngủ:</strong> Giúp rút ngắn thời gian đi vào giấc ngủ và tăng thời lượng giấc ngủ sâu (REM sleep).</li>
              <li><strong>Giảm căng thẳng & lo âu:</strong> Một giấc ngủ ngon giúp hệ thần kinh phục hồi, giảm nồng độ Cortisol (hormone stress) vào ngày hôm sau.</li>
              <li><strong>Tăng cường nhận thức:</strong> Ngủ đủ giấc giúp cải thiện trí nhớ, sự tập trung và khả năng ra quyết định trong tập luyện cũng như công việc.</li>
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
          <p><strong>Tác dụng phụ thông thường (thường nhẹ và thoáng qua):</strong></p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Buồn ngủ vào ban ngày (nếu dùng liều quá cao hoặc ngủ không đủ giấc sau khi dùng).</li>
            <li>Đau đầu, chóng mặt nhẹ.</li>
            <li>Những giấc mơ sống động hoặc ác mộng (ở một số người nhạy cảm).</li>
          </ul>
          
          <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
            <h4 className="font-serif font-bold text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Tương tác thuốc (Cần lưu ý)
            </h4>
            <ul className="list-disc list-inside text-red-900 space-y-2 text-sm">
              <li><strong>Thuốc an thần & Thuốc ngủ:</strong> Dùng chung với Melatonin có thể làm tăng tác dụng an thần quá mức.</li>
              <li><strong>Thuốc chống đông máu:</strong> Melatonin có thể làm tăng nguy cơ chảy máu khi dùng chung với Warfarin hoặc Aspirin.</li>
              <li><strong>Thuốc ức chế miễn dịch:</strong> Melatonin có thể kích thích hệ miễn dịch, làm giảm hiệu quả của các loại thuốc này.</li>
              <li><strong>Thuốc tránh thai:</strong> Có thể làm tăng nồng độ Melatonin tự nhiên trong cơ thể, dẫn đến tăng tác dụng phụ nếu bổ sung thêm.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <Moon className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Sử dụng & Liều lượng (Dựa trên nghiên cứu)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-zinc-200 rounded-xl overflow-hidden mt-4">
            <thead className="bg-zinc-100">
              <tr>
                <th className="p-4 text-left border border-zinc-200">Mục đích sử dụng</th>
                <th className="p-4 text-left border border-zinc-200">Liều lượng khuyến nghị</th>
                <th className="p-4 text-left border border-zinc-200">Thời điểm sử dụng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Khó ngủ nhẹ, cải thiện giấc ngủ</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">0.5mg - 3mg</td>
                <td className="p-4 border border-zinc-200">30 - 60 phút trước khi ngủ</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Jet lag (Thay đổi múi giờ)</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">3mg - 5mg</td>
                <td className="p-4 border border-zinc-200">Vào giờ đi ngủ tại múi giờ mới</td>
              </tr>
              <tr>
                <td className="p-4 border border-zinc-200 font-bold">Mất ngủ mãn tính (Cần tư vấn BS)</td>
                <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">Lên đến 10mg</td>
                <td className="p-4 border border-zinc-200">Theo chỉ định của bác sĩ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500 italic">* Lời khuyên: "More is not always better" (Nhiều hơn không phải lúc nào cũng tốt hơn). Liều thấp (0.5mg - 1mg) thường mô phỏng sát nhất lượng Melatonin tự nhiên cơ thể sản sinh và ít gây buồn ngủ vào ngày hôm sau.</p>
      </section>
    </div>
  );
};
