import React from 'react';
import { Activity, Brain, Shield, Heart, Dna, Sparkles, ShieldCheck } from 'lucide-react';

export const HealthAndLongevityInfo: React.FC = () => {
  return (
    <div className="space-y-12 prose-article">
      {/* Astaxanthin */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
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

      {/* NAC */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Milk Thistle */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Omega-3 */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Vitamin D3 */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Meditation & Longevity */}
      <section className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <Dna className="w-8 h-8 text-emerald-400" />
          <h3 className="text-2xl font-serif font-bold text-white m-0">Thiền định & Bí ẩn Đảo ngược Lão hóa</h3>
        </div>
        <div className="space-y-6 text-zinc-300 relative z-10">
          <p className="text-lg font-medium text-emerald-300">Nghiên cứu từ các viện y khoa hàng đầu (Harvard, UCLA) đã chứng minh Thiền định không chỉ là liệu pháp tinh thần mà còn thay đổi sinh học ở cấp độ DNA:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
              <h4 className="font-serif font-bold text-white mb-3 flex items-center gap-2">
                <Dna className="w-5 h-5 text-emerald-400" /> Kéo dài Telomere
              </h4>
              <p className="text-sm">Telomere là các "mũ bảo vệ" ở đầu nhiễm sắc thể. Mỗi lần tế bào phân chia, Telomere ngắn lại (gây lão hóa). Thiền định làm tăng hoạt động của enzyme <strong>Telomerase</strong>, giúp bảo vệ và thậm chí kéo dài Telomere, làm chậm đồng hồ sinh học.</p>
            </div>
            
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
              <h4 className="font-serif font-bold text-white mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" /> Trẻ hóa Não bộ
              </h4>
              <p className="text-sm">Nghiên cứu MRI cho thấy não của những người thiền định lâu năm ở tuổi 50 có lượng chất xám (gray matter) tương đương với người 25 tuổi. Thiền ngăn chặn sự teo não do tuổi tác.</p>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700">
              <h4 className="font-serif font-bold text-white mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400" /> Biểu sinh (Epigenetics)
              </h4>
              <p className="text-sm">Thiền định có khả năng "tắt" các gen gây viêm nhiễm (nguyên nhân của ung thư, tim mạch) và "bật" các gen liên quan đến chuyển hóa năng lượng và bài tiết insulin. Sống lâu không bệnh tật (Healthspan) bắt đầu từ tâm trí.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
