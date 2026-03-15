import React from 'react';
import { Activity, Brain, Dumbbell, Zap } from 'lucide-react';

export const MeditationInfo: React.FC = () => {
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
              <li><strong>Giảm Cortisol:</strong> Giảm nồng độ hormone căng thẳng, từ đó giảm dị hóa cơ bắp (mất cơ) và hạn chế tích tụ mỡ bụng.</li>
              <li><strong>Tăng cường phục hồi:</strong> Kích hoạt hệ thần kinh phó giao cảm (Parasympathetic), giúp cơ thể chuyển từ trạng thái "chiến đấu hay bỏ chạy" sang trạng thái "nghỉ ngơi và tiêu hóa", đẩy nhanh quá trình sửa chữa mô cơ.</li>
              <li><strong>Giảm viêm:</strong> Các nghiên cứu cho thấy thiền định thường xuyên làm giảm các dấu ấn sinh học gây viêm (như CRP), giúp giảm đau nhức cơ bắp (DOMS).</li>
              <li><strong>Tăng khả năng chịu đau:</strong> Thay đổi cấu trúc não bộ giúp vận động viên chịu đựng ngưỡng đau tốt hơn khi tập nặng.</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <h4 className="font-serif font-bold text-purple-800 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" /> Tinh thần & Đầu óc (Mental)
            </h4>
            <ul className="list-disc list-inside text-purple-900 space-y-2 text-sm">
              <li><strong>Tăng cường sự tập trung (Focus):</strong> Cải thiện mật độ chất xám ở vùng vỏ não trước trán, giúp duy trì sự chú ý lâu hơn và không bị xao nhãng.</li>
              <li><strong>Kiểm soát cảm xúc:</strong> Giảm kích thước hạch hạnh nhân (Amygdala - trung tâm xử lý sợ hãi), giúp giữ bình tĩnh trước áp lực thi đấu hoặc mức tạ nặng.</li>
              <li><strong>Mind-Muscle Connection:</strong> Tăng cường nhận thức về cơ thể (Proprioception), giúp cảm nhận cơ bắp tốt hơn trong từng chuyển động.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <Dumbbell className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-serif font-bold m-0">Áp dụng vào Võ thuật & Gym</h3>
        </div>
        <div className="space-y-6 text-zinc-600">
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h4 className="font-serif font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Trong Võ thuật (Martial Arts)
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Trạng thái "Flow" (Vô ngã):</strong> Thiền giúp võ sĩ dễ dàng bước vào trạng thái Flow, nơi các phản xạ diễn ra tự nhiên, không bị độ trễ do suy nghĩ (Overthinking).</li>
              <li><strong>Tốc độ phản ứng (Reaction Time):</strong> Nghiên cứu chứng minh thiền chánh niệm (Mindfulness) giúp cải thiện tốc độ xử lý thông tin thị giác và phản xạ né đòn.</li>
              <li><strong>Kiểm soát nhịp thở:</strong> Kỹ thuật thở trong thiền giúp võ sĩ điều hòa nhịp tim, tiết kiệm thể lực và phục hồi nhanh giữa các hiệp đấu.</li>
            </ul>
          </div>

          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <h4 className="font-serif font-bold text-zinc-900 mb-3 flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-blue-500" /> Trong Thể hình (Gym/Powerlifting)
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Tối ưu hóa kỹ thuật:</strong> Sự tập trung cao độ giúp kiểm soát form tập chuẩn xác, giảm nguy cơ chấn thương khi nâng mức tạ tối đa (1RM).</li>
              <li><strong>Vượt qua rào cản tâm lý:</strong> Giúp loại bỏ nỗi sợ hãi khi đứng trước mức tạ nặng, tăng sự tự tin.</li>
              <li><strong>Tăng hiệu quả phì đại cơ:</strong> Kết nối tâm trí - cơ bắp (Mind-Muscle Connection) tốt hơn giúp huy động nhiều sợi cơ hơn trong mỗi hiệp tập, tối đa hóa sự phát triển.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
