import React from 'react';
import { Activity, Brain, Shield, Heart, Dna, Sparkles, ShieldCheck, BookOpen } from 'lucide-react';

export const HealthAndLongevityInfo: React.FC = () => {
  return (
    <div className="space-y-12 prose-article">
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
      {/* 10 Top Studies */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen className="w-8 h-8 text-emerald-600" />
          <h3 className="text-2xl font-serif font-bold m-0">10 Nghiên cứu hàng đầu về Chống oxy hóa & Lão hóa</h3>
        </div>
        <ul className="list-disc list-inside text-zinc-600 space-y-2 text-sm">
          <li><strong>NAC (Glutathione):</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/15513326/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">J Clin Invest</a></li>
          <li><strong>NAC (Psychiatry):</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/21262044/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">J Psychiatry Neurosci</a></li>
          <li><strong>Milk Thistle (Liver):</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/32295055/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Antioxidants</a></li>
          <li><strong>Milk Thistle (Cancer):</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/18339498/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Cancer Lett</a></li>
          <li><strong>Astaxanthin:</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/24496084/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Marine Drugs</a></li>
          <li><strong>Omega-3:</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/30905193/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Circulation</a></li>
          <li><strong>Vitamin D3:</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/21527855/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">J Investig Med</a></li>
          <li><strong>Meditation (Telomeres):</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/21381931/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Ann NY Acad Sci</a></li>
          <li><strong>Meditation (Brain Aging):</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/25674064/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Front Aging Neurosci</a></li>
          <li><strong>Meditation (Inflammation):</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/23583363/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Brain Behav Immun</a></li>
        </ul>
      </section>
    </div>
  );
};
