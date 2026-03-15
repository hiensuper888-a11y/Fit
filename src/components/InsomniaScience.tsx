import React from 'react';
import { Moon, Brain, Activity, BookOpen, ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export const InsomniaScience: React.FC = () => {
  const researchLinks = [
    {
      title: "Mindfulness Meditation for Insomnia: A Meta-analysis",
      source: "JAMA Internal Medicine (USA)",
      url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2110998",
      desc: "Nghiên cứu chứng minh thiền chánh niệm cải thiện đáng kể chất lượng giấc ngủ so với các phương pháp giáo dục vệ sinh giấc ngủ thông thường."
    },
    {
      title: "European guideline for the diagnosis and treatment of insomnia",
      source: "European Sleep Research Society (Europe)",
      url: "https://onlinelibrary.wiley.com/doi/full/10.1111/jsr.12594",
      desc: "Hướng dẫn toàn diện của Châu Âu về chẩn đoán và điều trị mất ngủ, nhấn mạnh vai trò của liệu pháp hành vi và các can thiệp không dùng thuốc."
    },
    {
      title: "Melatonin for the treatment of primary sleep disorders",
      source: "PLOS ONE (USA/Global)",
      url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0063773",
      desc: "Phân tích gộp cho thấy Melatonin giúp giảm thời gian đi vào giấc ngủ và tăng tổng thời gian ngủ."
    },
    {
      title: "The Role of Magnesium in Sleep Health",
      source: "Nutrients (MDPI - Europe)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8912646/",
      desc: "Nghiên cứu về cơ chế của Magie trong việc điều hòa hệ thần kinh và cải thiện các triệu chứng mất ngủ ở người lớn tuổi."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="space-y-12 prose-article">
      {/* 1. Overview of Insomnia */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Moon className="w-8 h-8 text-indigo-600" />
          <h3 className="text-2xl font-serif font-bold m-0">1. Hiểu về Mất ngủ (Insomnia)</h3>
        </div>
        <div className="space-y-4 text-zinc-600 leading-relaxed">
          <p>
            Mất ngủ không chỉ là việc không ngủ được, mà là một tình trạng rối loạn giấc ngủ kéo dài, ảnh hưởng đến khả năng hoạt động vào ban ngày. Theo <strong>American Academy of Sleep Medicine (AASM)</strong>, mất ngủ được chia thành cấp tính (ngắn hạn) và mãn tính (ít nhất 3 lần/tuần trong 3 tháng).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-500" /> Nguyên nhân phổ biến
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Căng thẳng, lo âu kéo dài (Stress).</li>
                <li>Nhịp sinh học bị xáo trộn (Jet lag, làm ca đêm).</li>
                <li>Thói quen vệ sinh giấc ngủ kém (Sử dụng điện thoại trước khi ngủ).</li>
                <li>Sử dụng chất kích thích (Caffeine, Nicotine) quá muộn.</li>
              </ul>
            </div>
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-2 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-500" /> Hệ lụy sức khỏe
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Suy giảm trí nhớ và khả năng tập trung.</li>
                <li>Tăng nguy cơ mắc bệnh tim mạch và tiểu đường.</li>
                <li>Rối loạn tâm trạng (Trầm cảm, cáu gắt).</li>
                <li>Suy giảm hệ miễn dịch và khả năng phục hồi cơ bắp.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meditation as a Cure */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Brain className="w-8 h-8 text-emerald-600" />
          <h3 className="text-2xl font-serif font-bold m-0">2. Chữa mất ngủ bằng Thiền định (Meditation)</h3>
        </div>
        <div className="space-y-6 text-zinc-600">
          <p>
            Các nghiên cứu từ <strong>Harvard Medical School</strong> và <strong>Oxford Mindfulness Centre</strong> đã chứng minh rằng thiền chánh niệm (Mindfulness) là một công cụ mạnh mẽ để điều trị mất ngủ mà không cần dùng thuốc.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">1</div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Giảm sự hưng phấn quá mức (Hyperarousal)</h4>
                <p className="text-sm">Thiền giúp làm dịu hệ thần kinh giao cảm, giảm nhịp tim và huyết áp, đưa cơ thể vào trạng thái thư giãn sâu cần thiết để đi vào giấc ngủ.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">2</div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Ngắt dòng suy nghĩ tiêu cực (Rumination)</h4>
                <p className="text-sm">Kỹ thuật chánh niệm dạy bạn cách quan sát các suy nghĩ lo âu mà không bị cuốn theo chúng, giúp ngăn chặn tình trạng "não không chịu tắt" khi nằm trên giường.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">3</div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Cải thiện cấu trúc giấc ngủ</h4>
                <p className="text-sm">Nghiên cứu cho thấy người hành thiền thường xuyên có thời gian ngủ sâu (Deep Sleep) và ngủ mơ (REM) chất lượng hơn.</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mt-6">
            <h4 className="font-bold text-emerald-800 mb-2 italic">Lời khuyên thực hành:</h4>
            <p className="text-sm text-emerald-900">Thử phương pháp <strong>Body Scan (Quét cơ thể)</strong> trong 10-15 phút trước khi ngủ. Tập trung cảm nhận từng bộ phận từ ngón chân lên đến đỉnh đầu để giải phóng căng thẳng tích tụ.</p>
          </div>
        </div>
      </section>

      {/* 3. Supplements as a Cure */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-serif font-bold m-0">3. Thực phẩm bổ sung hỗ trợ giấc ngủ (Science-Based)</h3>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                <Moon className="w-5 h-5 text-indigo-500" /> Melatonin
              </h4>
              <p className="text-sm text-zinc-600 mb-4">Hormone tự nhiên điều hòa nhịp sinh học. Rất hiệu quả cho người bị lệch múi giờ hoặc khó đi vào giấc ngủ.</p>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Bằng chứng: Loại A (Rất mạnh)</div>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-500" /> Magnesium (Magie)
              </h4>
              <p className="text-sm text-zinc-600 mb-4">Giúp thư giãn cơ bắp và kích hoạt GABA (chất ức chế thần kinh giúp làm dịu não bộ). Ưu tiên dạng Glycinate để hấp thụ tốt nhất.</p>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Bằng chứng: Loại B (Mạnh)</div>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-500" /> L-Theanine
              </h4>
              <p className="text-sm text-zinc-600 mb-4">Axit amin tìm thấy trong trà xanh, giúp tăng sóng não Alpha (trạng thái thư giãn tỉnh táo) mà không gây buồn ngủ lờ đờ vào sáng hôm sau.</p>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Bằng chứng: Loại B</div>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                <Moon className="w-5 h-5 text-amber-600" /> Valerian Root (Rễ cây nữ lang)
              </h4>
              <p className="text-sm text-zinc-600 mb-4">Thảo dược truyền thống Châu Âu được sử dụng hàng thế kỷ để giảm lo âu và cải thiện chất lượng giấc ngủ.</p>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Bằng chứng: Loại C (Hỗ trợ)</div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Phác đồ kết hợp tối ưu (Stack)
            </h4>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>Magnesium Glycinate:</strong> 200-400mg (Dùng kèm bữa tối).</li>
              <li><strong>L-Theanine:</strong> 100-200mg (30-60 phút trước khi ngủ).</li>
              <li><strong>Melatonin:</strong> 0.5-1mg (Chỉ dùng khi cần thiết để điều chỉnh nhịp sinh học).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Research Links */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-emerald-500" />
          <h2 className="text-3xl font-serif font-bold text-zinc-900">
            Nghiên cứu Khoa học Tham khảo (US & EU)
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchLinks.map((link, i) => (
            <motion.a 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between p-6 bg-white border border-zinc-200 rounded-3xl hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div>
                <h4 className="font-serif font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors mb-2 leading-tight">{link.title}</h4>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">{link.source}</p>
                <p className="text-sm text-zinc-600 m-0">{link.desc}</p>
              </div>
              <div className="mt-4 flex items-center text-sm font-bold text-zinc-400 group-hover:text-emerald-500 transition-colors">
                Đọc nghiên cứu <ExternalLink className="w-4 h-4 ml-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
};
