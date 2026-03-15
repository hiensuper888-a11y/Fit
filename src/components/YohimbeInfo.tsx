import React from 'react';
import { Activity, Brain, Pill, AlertTriangle, Users, HeartPulse } from 'lucide-react';

export const YohimbeInfo: React.FC = () => {
  return (
    <div className="space-y-8 prose-article">
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <img src="https://picsum.photos/seed/yohimbe/800/400" alt="Yohimbe" className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
        <div className="flex items-center gap-4 mb-6">
          <Activity className="w-8 h-8 text-emerald-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Tác dụng Thể chất & Tinh thần</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h4 className="font-serif font-bold text-emerald-800 mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5" /> Thể chất & Sinh lý (Physical)
            </h4>
            <ul className="list-disc list-inside text-emerald-900 space-y-2 text-sm">
              <li><strong>Hỗ trợ sinh lý nam (Rối loạn cương dương - ED):</strong> Yohimbine (hoạt chất chính) là một chất đối kháng thụ thể alpha-2 adrenergic, giúp tăng cường lưu lượng máu đến cơ quan sinh dục. Trước khi có Viagra, nó được kê đơn rộng rãi để điều trị ED.</li>
              <li><strong>Đốt mỡ cứng đầu:</strong> Bằng cách chặn các thụ thể alpha-2 (thường tập trung ở vùng bụng và đùi), nó giúp giải phóng chất béo để đốt cháy làm năng lượng, đặc biệt hiệu quả khi tập luyện lúc bụng đói (fasted cardio).</li>
              <li><strong>Tăng năng lượng:</strong> Kích thích giải phóng adrenaline và noradrenaline, làm tăng nhịp tim và huyết áp nhẹ, tạo cảm giác sung mãn.</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <h4 className="font-serif font-bold text-purple-800 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" /> Tinh thần & Đầu óc (Mental)
            </h4>
            <ul className="list-disc list-inside text-purple-900 space-y-2 text-sm">
              <li><strong>Kích thích thần kinh trung ương:</strong> Tăng cường sự tỉnh táo và tập trung cao độ.</li>
              <li><strong>Tăng hưng phấn (Arousal):</strong> Tác động lên hệ thần kinh giao cảm, làm tăng cảm giác hưng phấn và ham muốn.</li>
              <li><strong>Nguy cơ lo âu:</strong> Do tăng cường adrenaline, nó có thể gây ra cảm giác bồn chồn, lo âu, hoặc hoảng sợ ở những người nhạy cảm hoặc dùng liều cao.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <HeartPulse className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Liều dùng & Đối tượng sử dụng</h3>
        </div>
        <div className="space-y-4 text-zinc-600">
          <p><strong>Liều lượng (Dựa trên nghiên cứu lâm sàng):</strong></p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Đốt mỡ:</strong> Khoảng 0.2mg/kg trọng lượng cơ thể (ví dụ: người 70kg dùng khoảng 14mg). Nên dùng trước khi tập cardio lúc bụng đói.</li>
            <li><strong>Hỗ trợ sinh lý:</strong> Các nghiên cứu thường sử dụng liều từ 15mg - 30mg mỗi ngày, chia làm nhiều lần. Tuy nhiên, cần có sự giám sát y tế.</li>
            <li><em>Lưu ý:</em> Yohimbe Bark Extract (chiết xuất vỏ cây) khó định lượng chính xác hàm lượng Yohimbine HCL. Nên ưu tiên sản phẩm ghi rõ hàm lượng Yohimbine.</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
            <h4 className="font-serif font-bold text-blue-800 mb-2 flex items-center gap-2">
              <Users className="w-5 h-5" /> Đối tượng sử dụng
            </h4>
            <ul className="list-disc list-inside text-blue-900 space-y-2 text-sm">
              <li><strong>Phù hợp:</strong> Vận động viên muốn giảm mỡ ở giai đoạn cuối (cutting), nam giới gặp vấn đề sinh lý nhẹ (đã tham khảo bác sĩ).</li>
              <li><strong>Chống chỉ định:</strong> Người có tiền sử bệnh tim mạch, huyết áp cao, rối loạn lo âu, suy thận, suy gan, phụ nữ có thai hoặc đang cho con bú.</li>
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
          <p><strong>Tác dụng phụ phổ biến:</strong></p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Nhịp tim nhanh, đánh trống ngực, tăng huyết áp.</li>
            <li>Đổ mồ hôi lạnh, run rẩy, chóng mặt.</li>
            <li>Rối loạn tiêu hóa, buồn nôn.</li>
            <li>Mất ngủ nếu dùng quá muộn trong ngày.</li>
          </ul>
          
          <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
            <h4 className="font-serif font-bold text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Tương tác thuốc (Rất nguy hiểm)
            </h4>
            <ul className="list-disc list-inside text-red-900 space-y-2 text-sm">
              <li><strong>Thuốc chống trầm cảm (MAOIs, SSRIs, SNRIs):</strong> Yohimbine là một chất ức chế MAO nhẹ. Dùng chung có thể gây ra cơn tăng huyết áp kịch phát hoặc hội chứng serotonin đe dọa tính mạng.</li>
              <li><strong>Thuốc điều trị huyết áp:</strong> Yohimbine làm tăng huyết áp, đối kháng trực tiếp với tác dụng của thuốc hạ huyết áp.</li>
              <li><strong>Thuốc kích thích khác (Caffeine, Ephedrine):</strong> Tăng nguy cơ gặp tác dụng phụ trên tim mạch (nhịp tim nhanh, hoảng loạn).</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
