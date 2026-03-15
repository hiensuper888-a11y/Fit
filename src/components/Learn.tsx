import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, ExternalLink, Award, Brain, Zap, Activity, Star } from 'lucide-react';
import { CreatineInfo } from './CreatineInfo';
import { WheyInfo } from './WheyInfo';

export const Learn: React.FC = () => {
  const { t } = useLanguage();

  const creatineResearch = [
    {
      title: "ISSN Position Stand: Creatine Supplementation in Exercise, Sport, and Medicine",
      source: "Journal of the International Society of Sports Nutrition (JISSN - USA)",
      url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z",
      desc: "Nghiên cứu toàn diện nhất về tính an toàn và hiệu quả của Creatine."
    },
    {
      title: "Creatine Supplementation and Brain Health",
      source: "Nutrients (MDPI - Europe)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8228134/",
      desc: "Phân tích tác động của Creatine đối với chức năng nhận thức và bảo vệ thần kinh."
    }
  ];

  const wheyResearch = [
    {
      title: "Protein Requirements and Supplementation in Strength Sports",
      source: "European Journal of Sport Science (EU)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25811544/",
      desc: "Đánh giá nhu cầu protein và hiệu quả của Whey Protein đối với vận động viên sức mạnh."
    },
    {
      title: "Effects of Whey Protein Supplementation on Muscle Mass and Strength",
      source: "Journal of the American College of Nutrition (USA)",
      url: "https://pubmed.ncbi.nlm.nih.gov/24015719/",
      desc: "Nghiên cứu lâm sàng về khả năng tăng cơ và sức mạnh của Whey Protein Isolate."
    }
  ];

  const preworkoutResearch = [
    {
      title: "Multi-ingredient pre-workout supplements, safety implications, and performance outcomes",
      source: "Journal of the International Society of Sports Nutrition (USA)",
      url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-018-0247-6",
      desc: "Đánh giá mức độ an toàn và hiệu suất của các thành phần trong Pre-workout (Caffeine, Beta-Alanine, Citrulline)."
    },
    {
      title: "Effect of caffeine supplementation on sports performance",
      source: "Sports Medicine (Europe)",
      url: "https://pubmed.ncbi.nlm.nih.gov/29527526/",
      desc: "Phân tích toàn diện về tác dụng của Caffeine (thành phần chính trong Pre-workout) đối với hiệu suất thể thao."
    }
  ];

  const brands = [
    {
      name: "Optimum Nutrition (ON)",
      cert: "Informed Choice",
      url: "https://www.optimumnutrition.com/",
      desc: "Thương hiệu Whey Protein bán chạy nhất thế giới. Tiêu chuẩn vàng trong ngành thực phẩm bổ sung.",
      logo: "https://logo.clearbit.com/optimumnutrition.com",
      productImage: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=200&q=80",
      rating: "98/100",
      reviewer: "Labdoor"
    },
    {
      name: "MyProtein",
      cert: "Labdoor Ranked",
      url: "https://www.myprotein.com/",
      desc: "Thương hiệu số 1 Châu Âu. Nổi tiếng với dòng Impact Whey Protein chất lượng cao, giá cả phải chăng.",
      logo: "https://logo.clearbit.com/myprotein.com",
      productImage: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=200&q=80",
      rating: "4.4/5",
      reviewer: "Trustpilot"
    },
    {
      name: "Thorne Research",
      cert: "NSF Certified for Sport",
      url: "https://www.thorne.com/",
      desc: "Hãng dược phẩm bổ sung uy tín nhất thế giới, được các đội tuyển chuyên nghiệp và Olympic tin dùng.",
      logo: "https://logo.clearbit.com/thorne.com",
      productImage: "https://images.unsplash.com/photo-1646401666491-04df8a482d8c?auto=format&fit=crop&w=200&q=80",
      rating: "4.5/5",
      reviewer: "Trustpilot"
    },
    {
      name: "Dymatize",
      cert: "Informed Choice",
      url: "https://www.dymatize.com/",
      desc: "Nổi tiếng với dòng ISO100 - Whey Protein Isolate thủy phân siêu tinh khiết, hấp thụ cực nhanh.",
      logo: "https://logo.clearbit.com/dymatize.com",
      productImage: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=200&q=80",
      rating: "9.3/10",
      reviewer: "Bodybuilding.com"
    },
    {
      name: "Transparent Labs",
      cert: "Informed Choice",
      url: "https://www.transparentlabs.com/",
      desc: "Cam kết minh bạch 100% thành phần, không sử dụng chất tạo màu hay chất làm ngọt nhân tạo.",
      logo: "https://logo.clearbit.com/transparentlabs.com",
      productImage: "https://images.unsplash.com/photo-1584735175315-9d582320ad30?auto=format&fit=crop&w=200&q=80",
      rating: "99/100",
      reviewer: "Labdoor"
    },
    {
      name: "MuscleTech",
      cert: "GMP Certified",
      url: "https://www.muscletech.com/",
      desc: "Thương hiệu lâu đời với nhiều bằng sáng chế độc quyền về công thức tăng cơ và giảm mỡ.",
      logo: "https://logo.clearbit.com/muscletech.com",
      productImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=200&q=80",
      rating: "9.0/10",
      reviewer: "Bodybuilding.com"
    },
    {
      name: "Cellucor",
      cert: "NSF Certified",
      url: "https://cellucor.com/",
      desc: "Nhà sản xuất của C4 - dòng Pre-workout bán chạy nhất toàn cầu với công thức bùng nổ năng lượng.",
      logo: "https://logo.clearbit.com/cellucor.com",
      productImage: "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=200&q=80",
      rating: "4.2/5",
      reviewer: "Trustpilot"
    },
    {
      name: "Ghost Lifestyle",
      cert: "GMP Certified",
      url: "https://www.ghostlifestyle.com/",
      desc: "Thương hiệu mang phong cách lifestyle độc đáo, hợp tác hương vị với các hãng kẹo nổi tiếng (Oreo, Chips Ahoy).",
      logo: "https://logo.clearbit.com/ghostlifestyle.com",
      productImage: "https://images.unsplash.com/photo-1526506114642-54bc23e7748f?auto=format&fit=crop&w=200&q=80",
      rating: "4.6/5",
      reviewer: "Trustpilot"
    },
    {
      name: "JYM Supplement Science",
      cert: "GMP Certified",
      url: "https://jymsupplementscience.com/",
      desc: "Sáng lập bởi Tiến sĩ Jim Stoppani, công thức dựa trên khoa học với liều lượng chuẩn xác, không pha trộn.",
      logo: "https://logo.clearbit.com/jymsupplementscience.com",
      productImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=200&q=80",
      rating: "9.5/10",
      reviewer: "Bodybuilding.com"
    },
    {
      name: "BSN",
      cert: "GMP Certified",
      url: "https://www.gobsn.com/",
      desc: "Nổi tiếng với Syntha-6 (Protein blend) và N.O.-Xplode (Pre-workout) mang lại hương vị tuyệt đỉnh.",
      logo: "https://logo.clearbit.com/gobsn.com",
      productImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=200&q=80",
      rating: "9.1/10",
      reviewer: "Bodybuilding.com"
    }
  ];

  const renderResearchLinks = (links: any[]) => (
    <div className="space-y-4">
      {links.map((link, i) => (
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
            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-500 shrink-0 ml-4" />
          </div>
        </a>
      ))}
    </div>
  );

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
            Kiến Thức Thể Hình & Dinh Dưỡng
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Khám phá sức mạnh của các loại thực phẩm bổ sung dựa trên các nghiên cứu khoa học uy tín từ Mỹ, Anh và Châu Âu.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-zinc prose-lg max-w-none">
          
          {/* Research Section */}
          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-zinc-900 mb-6">
              <Activity className="text-emerald-500" />
              1. Các Nghiên cứu Khoa học Uy tín (US & EU)
            </h2>
            
            <h3 className="text-xl font-bold text-zinc-800 mt-8 mb-4">Nghiên cứu về Creatine</h3>
            {renderResearchLinks(creatineResearch)}

            <h3 className="text-xl font-bold text-zinc-800 mt-8 mb-4">Nghiên cứu về Whey Protein</h3>
            {renderResearchLinks(wheyResearch)}

            <h3 className="text-xl font-bold text-zinc-800 mt-8 mb-4">Nghiên cứu về Pre-workout</h3>
            {renderResearchLinks(preworkoutResearch)}
          </section>

          {/* Brands Section */}
          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-zinc-900 mb-6">
              <Award className="text-emerald-500" />
              2. Top 10 Hãng Thực phẩm Bổ sung Uy tín Toàn cầu
            </h2>
            <p className="text-zinc-600 mb-8">
              Danh sách dựa trên các chứng nhận an toàn (NSF, Informed Choice, GMP) và đánh giá khách quan từ các chuyên trang hàng đầu như Labdoor, Bodybuilding.com, và Trustpilot.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {brands.map((brand, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-zinc-200 rounded-3xl hover:shadow-lg transition-shadow">
                  <div className="w-full md:w-32 flex items-center justify-center p-4 bg-zinc-50 rounded-2xl shrink-0">
                    <img src={brand.logo} alt={brand.name} className="max-w-full max-h-16 object-contain" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/100?text=' + brand.name.split(' ')[0] }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold text-zinc-900 m-0">{brand.name}</h4>
                      <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        {brand.cert}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-zinc-900">{brand.rating}</span>
                      <span className="text-sm text-zinc-500">bởi {brand.reviewer}</span>
                    </div>
                    <p className="text-zinc-600 mb-4 text-sm leading-relaxed">{brand.desc}</p>
                    <a 
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:underline"
                    >
                      Trang chủ hãng <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="w-full md:w-48 flex items-center justify-center p-2 bg-zinc-50 rounded-2xl shrink-0 overflow-hidden">
                    <img src={brand.productImage} alt={`${brand.name} product`} className="w-full h-32 object-cover rounded-xl" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">3. Thông tin chi tiết về Creatine</h2>
            <CreatineInfo />
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">4. Thông tin chi tiết về Whey Protein</h2>
            <WheyInfo />
          </section>
        </div>
      </div>
    </div>
  );
};
