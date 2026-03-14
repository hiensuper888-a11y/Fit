import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, ExternalLink, Award, Brain, Zap, Activity } from 'lucide-react';
import { CreatineInfo } from './CreatineInfo';
import { WheyInfo } from './WheyInfo';

export const Learn: React.FC = () => {
  const { t } = useLanguage();

  const researchLinks = [
    {
      title: "ISSN Position Stand: Creatine Supplementation in Exercise, Sport, and Medicine",
      source: "Journal of the International Society of Sports Nutrition (JISSN)",
      url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z",
      desc: "Nghiên cứu toàn diện nhất về tính an toàn và hiệu quả của Creatine."
    },
    {
      title: "Creatine Supplementation and Brain Health",
      source: "Nutrients (MDPI)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8228134/",
      desc: "Phân tích tác động của Creatine đối với chức năng nhận thức và bảo vệ thần kinh."
    },
    {
      title: "Effects of Creatine on Mental Health and Depressive Symptoms",
      source: "Biomolecules",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7912247/",
      desc: "Nghiên cứu về vai trò của Creatine trong việc hỗ trợ điều trị trầm cảm và lo âu."
    },
    {
      title: "Creatine supplementation for muscle growth and strength",
      source: "Journal of the International Society of Sports Nutrition",
      url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z",
      desc: "Phân tích sâu về khả năng tăng sức mạnh và khối lượng cơ bắp."
    },
    {
      title: "Creatine and Cognitive Performance",
      source: "Psychopharmacology",
      url: "https://pubmed.ncbi.nlm.nih.gov/12690748/",
      desc: "Nghiên cứu về tác động của creatine đối với trí nhớ và khả năng xử lý thông tin."
    }
  ];

  const brands = [
    {
      name: "Thorne Research",
      cert: "NSF Certified for Sport",
      url: "https://www.thorne.com/products/dp/creatine",
      desc: "Hãng dược phẩm bổ sung uy tín nhất thế giới, được các đội tuyển chuyên nghiệp tin dùng.",
      logo: "https://via.placeholder.com/100?text=Thorne",
      productImage: "https://via.placeholder.com/200?text=Thorne+Creatine"
    },
    {
      name: "Optimum Nutrition (ON)",
      cert: "Informed Choice",
      url: "https://www.optimumnutrition.com/en-us/product/creatine-powder",
      desc: "Tiêu chuẩn vàng trong ngành thực phẩm bổ sung với độ tinh khiết cao.",
      logo: "https://via.placeholder.com/100?text=ON",
      productImage: "https://via.placeholder.com/200?text=ON+Creatine"
    },
    {
      name: "MyProtein (Creapure Line)",
      cert: "Labdoor Ranked",
      url: "https://www.myprotein.com/sports-nutrition/creapure-creatine-monohydrate-powder/10529740.html",
      desc: "Sử dụng nguyên liệu Creapure từ Đức với chứng nhận tinh khiết 99.99%.",
      logo: "https://via.placeholder.com/100?text=MyProtein",
      productImage: "https://via.placeholder.com/200?text=MyProtein+Creatine"
    }
  ];

  return (
    <div className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4"
          >
            <BookOpen className="w-4 h-4" />
            <span>FitSupps Academy</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tight">
            Creatine: "Vua" Của Thực Phẩm Bổ Sung
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Khám phá sức mạnh của Creatine dựa trên các nghiên cứu khoa học uy tín từ Mỹ, Anh và Châu Âu.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-zinc prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-zinc-900 mb-6">
              <Zap className="text-emerald-500" />
              1. Tác động lên Tập luyện & Thể thao
            </h2>
            <p>
              Creatine Monohydrate là thực phẩm bổ sung được nghiên cứu kỹ lưỡng nhất thế giới. Theo <strong>ISSN (International Society of Sports Nutrition)</strong>, Creatine giúp tăng cường dự trữ phosphocreatine trong cơ bắp, từ đó tái tạo ATP nhanh hơn trong các hoạt động cường độ cao.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm my-6">
              <ul className="space-y-3 m-0 list-none">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Tăng sức mạnh bùng nổ:</strong> Cải thiện 5-15% sức mạnh tối đa (1RM).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Phát triển cơ bắp:</strong> Hỗ trợ quá trình tổng hợp protein và giữ nước trong tế bào cơ.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Phục hồi:</strong> Giảm viêm và tổn thương cơ bắp sau khi tập nặng.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-zinc-900 mb-6">
              <Brain className="text-emerald-500" />
              2. Sức khỏe Tinh thần & Trí não
            </h2>
            <p>
              Các nghiên cứu mới nhất từ <strong>Đại học Oxford (Anh)</strong> và <strong>NIH (Mỹ)</strong> cho thấy não bộ cũng tiêu thụ một lượng lớn ATP. Bổ sung Creatine giúp:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-900 mb-2">Chức năng nhận thức</h4>
                <p className="text-sm text-emerald-800 m-0">Cải thiện trí nhớ ngắn hạn và khả năng xử lý thông tin, đặc biệt ở người thiếu ngủ hoặc người ăn chay.</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-900 mb-2">Sức khỏe tâm thần</h4>
                <p className="text-sm text-emerald-800 m-0">Hỗ trợ giảm triệu chứng trầm cảm và lo âu khi kết hợp với các liệu pháp y tế tiêu chuẩn.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-zinc-900 mb-6">
              <Award className="text-emerald-500" />
              3. Creatine Monohydrate vs. Creapure
            </h2>
            <p>
              Đây là câu hỏi phổ biến nhất. Hãy cùng so sánh dựa trên tiêu chuẩn tinh khiết:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-zinc-200 rounded-xl overflow-hidden">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="p-4 text-left border border-zinc-200">Tiêu chí</th>
                    <th className="p-4 text-left border border-zinc-200">Creatine Mono (Thường)</th>
                    <th className="p-4 text-left border border-zinc-200">Creapure® (Đức)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-zinc-200 font-bold">Độ tinh khiết</td>
                    <td className="p-4 border border-zinc-200">98% - 99%</td>
                    <td className="p-4 border border-zinc-200 text-emerald-600 font-bold">99.99%</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-200 font-bold">Tạp chất</td>
                    <td className="p-4 border border-zinc-200">Có thể chứa DCD, DHT</td>
                    <td className="p-4 border border-zinc-200">Không phát hiện tạp chất</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-200 font-bold">Nguồn gốc</td>
                    <td className="p-4 border border-zinc-200">Đa dạng (Trung Quốc, Mỹ...)</td>
                    <td className="p-4 border border-zinc-200">Alzchem Trostberg GmbH (Đức)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm italic text-zinc-500">
              *Nghiên cứu cho thấy cả hai đều có hiệu quả tương đương về mặt sinh học, nhưng Creapure® đảm bảo an toàn tuyệt đối khỏi các tạp chất độc hại.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-zinc-900 mb-6">
              <Activity className="text-emerald-500" />
              4. Các Nghiên cứu Uy tín (Links)
            </h2>
            <div className="space-y-4">
              {researchLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white border border-zinc-200 rounded-2xl hover:border-emerald-500 transition-colors group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">{link.title}</h4>
                      <p className="text-xs text-zinc-500 mb-2">{link.source}</p>
                      <p className="text-sm text-zinc-600 m-0">{link.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">5. Hãng Thực phẩm Bổ sung Uy tín</h2>
            <div className="grid grid-cols-1 gap-6">
              {brands.map((brand, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-zinc-200 rounded-3xl">
                  <div className="w-full md:w-32 flex items-center justify-center p-4 bg-zinc-50 rounded-2xl">
                    <img src={brand.logo} alt={brand.name} className="max-w-full max-h-16" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold text-zinc-900">{brand.name}</h4>
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        {brand.cert}
                      </span>
                    </div>
                    <p className="text-zinc-600 mb-4">{brand.desc}</p>
                    <a 
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:underline"
                    >
                      Xem sản phẩm <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="w-full md:w-40 flex items-center justify-center p-4 bg-zinc-50 rounded-2xl">
                    <img src={brand.productImage} alt={brand.name} className="max-w-full max-h-24" />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">6. Thông tin chi tiết về Creatine</h2>
            <CreatineInfo />
          </section>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">7. Thông tin chi tiết về Whey Protein</h2>
            <WheyInfo />
          </section>
        </div>
      </div>
    </div>
  );
};
