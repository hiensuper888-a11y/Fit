import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Activity, Brain, ShieldCheck, Dumbbell, BookOpen, HeartPulse, Scale, ExternalLink, Star, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const articleContent = {
  en: {
    title: "Creatine: The Science of Performance & Health",
    subtitle: "An evidence-based deep dive into the world's most researched supplement, featuring clinical data from the US, UK, and European health authorities.",
    brandsTitle: "Top Reputable Brands (US, UK & Europe)",
    brandsSubtitle: "Based on real-world reviews, third-party testing (Labdoor, Informed-Choice), and manufacturing standards.",
    reviewsText: "reviews",
    sections: [
      {
        icon: <Activity className="w-6 h-6 text-emerald-500" />,
        title: "1. The Mechanism: ATP Regeneration",
        content: "Creatine is a naturally occurring compound stored primarily in skeletal muscle. According to the International Society of Sports Nutrition (ISSN) in the US, creatine supplementation increases intramuscular creatine phosphate stores by up to 40%. This allows for rapid regeneration of Adenosine Triphosphate (ATP)—the primary energy currency of the cell—during high-intensity, short-duration exercise.",
        source: "Kreider et al. (2017). International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation.",
        link: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z"
      },
      {
        icon: <Dumbbell className="w-6 h-6 text-emerald-500" />,
        title: "2. Strength & Muscle Hypertrophy",
        content: "Extensive research from the UK and Europe demonstrates that creatine significantly enhances resistance training adaptations. A meta-analysis published in the European Journal of Applied Physiology found that subjects using creatine alongside resistance training experienced an average 8% greater increase in maximum strength (1RM) and a 14% greater increase in endurance strength compared to placebo groups. Furthermore, creatine promotes cell volumization (drawing water into muscle cells), which acts as an anabolic signal for muscle protein synthesis.",
        source: "Rawson & Volek (2003). Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance.",
        link: "https://pubmed.ncbi.nlm.nih.gov/14636102/"
      },
      {
        icon: <Brain className="w-6 h-6 text-emerald-500" />,
        title: "3. Cognitive Function & Brain Health",
        content: "The brain consumes roughly 20% of the body's resting energy. Recent studies from the University of Chichester (UK) and various European institutions have shown that creatine supplementation improves cognitive processing, especially under conditions of sleep deprivation or mental fatigue. Research published by the Royal Society indicates significant improvements in working memory and intelligence test scores, particularly in individuals with low dietary creatine intake (such as vegetarians).",
        source: "Rae et al. (2003). Oral creatine monohydrate supplementation improves brain performance: a double-blind, placebo-controlled, cross-over trial.",
        link: "https://royalsocietypublishing.org/doi/10.1098/rspb.2003.2492"
      },
      {
        icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
        title: "4. Long-Term Safety & Aging (Sarcopenia)",
        content: "The European Food Safety Authority (EFSA) has thoroughly evaluated creatine and confirmed its safety for long-term daily consumption (3-5g/day) in healthy adults. Contrary to outdated myths, clinical trials lasting up to 5 years have found no detrimental effects on kidney or liver function in healthy individuals. Additionally, emerging US research highlights creatine's role in combating sarcopenia (age-related muscle loss) and improving bone mineral density in older adults when combined with resistance training.",
        source: "EFSA Panel on Dietetic Products, Nutrition and Allergies (2011). Scientific Opinion on the substantiation of health claims related to creatine.",
        link: "https://efsa.onlinelibrary.wiley.com/doi/epdf/10.2903/j.efsa.2011.2303"
      },
      {
        icon: <HeartPulse className="w-6 h-6 text-emerald-500" />,
        title: "5. Enhanced Recovery & Glucose Metabolism",
        content: "Beyond building muscle, creatine reduces muscle damage and inflammation following exhaustive exercise, accelerating recovery. Furthermore, research indicates that creatine supplementation combined with aerobic exercise improves glucose tolerance and insulin sensitivity. This suggests a potential therapeutic role in managing type 2 diabetes by helping transport sugar from the blood into the muscles more efficiently.",
        source: "Gualano et al. (2008). Effects of creatine supplementation on glucose tolerance and insulin sensitivity in sedentary healthy males.",
        link: "https://pubmed.ncbi.nlm.nih.gov/17396216/"
      },
      {
        icon: <Scale className="w-6 h-6 text-emerald-500" />,
        title: "6. Standard Creatine Monohydrate vs. Creapure®",
        content: "Creapure® is a patented brand of creatine monohydrate manufactured in Germany by AlzChem. The primary difference is purity. Standard monohydrate is typically 98-99% pure, while Creapure® guarantees 99.99% purity, strictly limiting trace byproducts like dicyandiamide (DCD) and dihydrotriazine (DHT). However, clinical studies show NO significant physiological difference in muscle saturation, strength gains, or athletic performance between standard high-quality monohydrate and Creapure®. The choice comes down to paying a premium for rigorous European manufacturing standards (IFS Food certification) versus cost-effectiveness.",
        source: "Jäger et al. (2011). Analysis of the efficacy, safety, and regulatory status of novel forms of creatine.",
        link: "https://pubmed.ncbi.nlm.nih.gov/21424716/"
      }
    ]
  },
  vi: {
    title: "Creatine: Khoa Học Về Hiệu Suất & Sức Khỏe",
    subtitle: "Phân tích chuyên sâu dựa trên bằng chứng về thực phẩm bổ sung được nghiên cứu nhiều nhất thế giới, với dữ liệu lâm sàng từ Mỹ, Anh và các cơ quan y tế Châu Âu.",
    brandsTitle: "Các Thương Hiệu Uy Tín Hàng Đầu (Mỹ, Anh & Châu Âu)",
    brandsSubtitle: "Dựa trên đánh giá thực tế, kiểm định của bên thứ ba (Labdoor, Informed-Choice) và tiêu chuẩn sản xuất.",
    reviewsText: "đánh giá",
    sections: [
      {
        icon: <Activity className="w-6 h-6 text-emerald-500" />,
        title: "1. Cơ Chế Hoạt Động: Tái Tạo ATP",
        content: "Creatine là một hợp chất tự nhiên được lưu trữ chủ yếu trong cơ xương. Theo Hiệp hội Dinh dưỡng Thể thao Quốc tế (ISSN) tại Mỹ, việc bổ sung creatine làm tăng dự trữ creatine phosphate trong cơ bắp lên đến 40%. Điều này cho phép tái tạo nhanh chóng Adenosine Triphosphate (ATP) — đồng tiền năng lượng chính của tế bào — trong các bài tập cường độ cao, thời gian ngắn.",
        source: "Kreider và cộng sự (2017). Tuyên bố quan điểm của Hiệp hội Dinh dưỡng Thể thao Quốc tế: tính an toàn và hiệu quả của việc bổ sung creatine.",
        link: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z"
      },
      {
        icon: <Dumbbell className="w-6 h-6 text-emerald-500" />,
        title: "2. Sức Mạnh & Phì Đại Cơ Bắp",
        content: "Nghiên cứu sâu rộng từ Anh và Châu Âu chứng minh rằng creatine tăng cường đáng kể sự thích nghi với tập luyện sức mạnh. Một phân tích tổng hợp trên Tạp chí Sinh lý học Ứng dụng Châu Âu cho thấy những người sử dụng creatine kết hợp tập tạ có mức tăng sức mạnh tối đa (1RM) trung bình cao hơn 8% và sức bền cao hơn 14% so với nhóm dùng giả dược. Hơn nữa, creatine thúc đẩy quá trình hydrat hóa tế bào (kéo nước vào tế bào cơ), hoạt động như một tín hiệu đồng hóa để tổng hợp protein cơ bắp.",
        source: "Rawson & Volek (2003). Tác dụng của việc bổ sung creatine và tập luyện sức mạnh đối với sức mạnh cơ bắp và hiệu suất cử tạ.",
        link: "https://pubmed.ncbi.nlm.nih.gov/14636102/"
      },
      {
        icon: <Brain className="w-6 h-6 text-emerald-500" />,
        title: "3. Chức Năng Nhận Thức & Sức Khỏe Não Bộ",
        content: "Não bộ tiêu thụ khoảng 20% năng lượng nghỉ ngơi của cơ thể. Các nghiên cứu gần đây từ Đại học Chichester (Anh) và các tổ chức Châu Âu đã chỉ ra rằng bổ sung creatine cải thiện quá trình xử lý nhận thức, đặc biệt trong điều kiện thiếu ngủ hoặc mệt mỏi tinh thần. Nghiên cứu do Hiệp hội Hoàng gia Anh công bố cho thấy sự cải thiện đáng kể về trí nhớ làm việc và điểm kiểm tra trí thông minh, đặc biệt ở những người có lượng creatine trong chế độ ăn thấp (như người ăn chay).",
        source: "Rae và cộng sự (2003). Bổ sung creatine monohydrate qua đường uống giúp cải thiện hiệu suất não bộ: thử nghiệm chéo, mù đôi, đối chứng giả dược.",
        link: "https://royalsocietypublishing.org/doi/10.1098/rspb.2003.2492"
      },
      {
        icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
        title: "4. An Toàn Dài Hạn & Chống Lão Hóa (Sarcopenia)",
        content: "Cơ quan An toàn Thực phẩm Châu Âu (EFSA) đã đánh giá kỹ lưỡng creatine và xác nhận tính an toàn của nó khi tiêu thụ hàng ngày lâu dài (3-5g/ngày) ở người lớn khỏe mạnh. Trái ngược với những lầm tưởng lỗi thời, các thử nghiệm lâm sàng kéo dài tới 5 năm không tìm thấy tác động bất lợi nào đối với chức năng thận hoặc gan ở những người khỏe mạnh. Ngoài ra, nghiên cứu mới nổi của Mỹ nhấn mạnh vai trò của creatine trong việc chống lại chứng thiểu cơ (mất cơ do tuổi tác) và cải thiện mật độ khoáng của xương ở người lớn tuổi khi kết hợp với tập luyện sức mạnh.",
        source: "Cơ quan An toàn Thực phẩm Châu Âu (EFSA) (2011). Ý kiến khoa học về việc chứng minh các tuyên bố sức khỏe liên quan đến creatine.",
        link: "https://efsa.onlinelibrary.wiley.com/doi/epdf/10.2903/j.efsa.2011.2303"
      },
      {
        icon: <HeartPulse className="w-6 h-6 text-emerald-500" />,
        title: "5. Phục Hồi Nhanh & Chuyển Hóa Glucose",
        content: "Bên cạnh việc xây dựng cơ bắp, creatine làm giảm tổn thương cơ và viêm nhiễm sau các bài tập kiệt sức, giúp tăng tốc độ phục hồi. Hơn nữa, nghiên cứu chỉ ra rằng bổ sung creatine kết hợp với tập thể dục nhịp điệu giúp cải thiện khả năng dung nạp glucose và độ nhạy insulin. Điều này cho thấy vai trò hỗ trợ điều trị tiềm năng trong việc quản lý bệnh tiểu đường loại 2 bằng cách giúp vận chuyển đường từ máu vào cơ bắp hiệu quả hơn.",
        source: "Gualano và cộng sự (2008). Tác dụng của việc bổ sung creatine đối với khả năng dung nạp glucose và độ nhạy insulin ở nam giới khỏe mạnh ít vận động.",
        link: "https://pubmed.ncbi.nlm.nih.gov/17396216/"
      },
      {
        icon: <Scale className="w-6 h-6 text-emerald-500" />,
        title: "6. Creatine Monohydrate Tiêu Chuẩn vs. Creapure®",
        content: "Creapure® là thương hiệu creatine monohydrate được cấp bằng sáng chế, sản xuất tại Đức bởi AlzChem. Sự khác biệt chính là độ tinh khiết. Monohydrate tiêu chuẩn thường tinh khiết 98-99%, trong khi Creapure® đảm bảo độ tinh khiết 99,99%, kiểm soát nghiêm ngặt các tạp chất như dicyandiamide (DCD) và dihydrotriazine (DHT). Tuy nhiên, các nghiên cứu lâm sàng cho thấy KHÔNG CÓ SỰ KHÁC BIỆT đáng kể về sinh lý học đối với độ bão hòa cơ bắp, tăng sức mạnh hoặc hiệu suất thể thao giữa monohydrate tiêu chuẩn chất lượng cao và Creapure®. Sự lựa chọn nằm ở việc trả thêm tiền cho các tiêu chuẩn sản xuất khắt khe của Châu Âu (chứng nhận IFS Food) hay ưu tiên tính tiết kiệm.",
        source: "Jäger và cộng sự (2011). Phân tích hiệu quả, tính an toàn và tình trạng pháp lý của các dạng creatine mới.",
        link: "https://pubmed.ncbi.nlm.nih.gov/21424716/"
      }
    ]
  }
};

const brandsData = [
  {
    id: 'on',
    name: 'Optimum Nutrition',
    origin: 'US',
    logo: 'https://logo.clearbit.com/optimumnutrition.com',
    productImg: 'https://m.media-amazon.com/images/I/61pX9p-mSCL._AC_SL1500_.jpg',
    rating: 4.9,
    reviews: '124k+',
    certifications: ['Informed-Choice', 'GMP Certified'],
    desc: {
      en: "The gold standard in the US. Third-party tested by Informed-Choice, offering 5g of pure micronized creatine monohydrate per serving. Highly rated for mixability and zero grittiness.",
      vi: "Tiêu chuẩn vàng tại Mỹ. Được kiểm định bởi bên thứ ba (Informed-Choice), cung cấp 5g creatine monohydrate tinh khiết siêu mịn mỗi khẩu phần. Được đánh giá rất cao về độ hòa tan và không bị lợn cợn."
    }
  },
  {
    id: 'myprotein',
    name: 'MyProtein',
    origin: 'UK',
    logo: 'https://logo.clearbit.com/myprotein.com',
    productImg: 'https://m.media-amazon.com/images/I/61N-mN-6F0L._AC_SL1500_.jpg',
    rating: 4.8,
    reviews: '89k+',
    certifications: ['Labdoor Approved', 'Cologne List'],
    desc: {
      en: "A UK powerhouse. Ranked highly by independent tester Labdoor for purity and value. Offers both unflavored and flavored options, making it a staple in European gyms.",
      vi: "Thương hiệu hàng đầu từ Anh Quốc. Được Labdoor đánh giá cao về độ tinh khiết và giá trị. Có cả loại không mùi và có mùi, là sản phẩm chủ đạo tại các phòng gym Châu Âu."
    }
  },
  {
    id: 'transparentlabs',
    name: 'Transparent Labs',
    origin: 'US',
    logo: 'https://logo.clearbit.com/transparentlabs.com',
    productImg: 'https://m.media-amazon.com/images/I/71Y-tL-WJvL._AC_SL1500_.jpg',
    rating: 4.9,
    reviews: '12k+',
    certifications: ['Informed Choice', 'No Artificial Sweeteners'],
    desc: {
      en: "Premium US brand known for 100% formula transparency. Combines creatine with HMB and BioPerine for enhanced absorption, recovery, and lean muscle preservation.",
      vi: "Thương hiệu cao cấp của Mỹ nổi tiếng với sự minh bạch 100% về thành phần. Kết hợp creatine với HMB và BioPerine để tăng cường hấp thu, phục hồi và bảo vệ cơ nạc."
    }
  },
  {
    id: 'creapure',
    name: 'Creapure® (AlzChem)',
    origin: 'Germany (EU)',
    logo: 'https://www.creapure.com/sites/default/files/styles/medium/public/2020-03/creapure_logo_rgb_0.png',
    productImg: 'https://m.media-amazon.com/images/I/51w7-z-8YqL._AC_SL1000_.jpg',
    rating: 5.0,
    reviews: 'B2B Standard',
    certifications: ['IFS Food', 'Vegan', 'Halal', 'Kosher'],
    desc: {
      en: "Not a direct-to-consumer brand, but the gold standard raw material manufacturer in Germany. Look for the Creapure® logo on other brands' tubs to guarantee 99.99% purity.",
      vi: "Không phải thương hiệu bán lẻ trực tiếp, mà là nhà sản xuất nguyên liệu tiêu chuẩn vàng tại Đức. Hãy tìm logo Creapure® trên hộp của các hãng khác để đảm bảo độ tinh khiết 99.99%."
    }
  }
];

export const CreatineArticle: React.FC = () => {
  const { language } = useLanguage();
  const content = articleContent[language];

  return (
    <div className="bg-zinc-50 min-h-screen pb-24">
      
      {/* Hero Image Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-zinc-900 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/creatine_powder_scoop/1920/1080?blur=2" 
          alt="Creatine Powder" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center px-4 max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {content.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        
        {/* Article Content */}
        <div className="space-y-8 mb-20">
          {content.sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 p-4 bg-emerald-50 rounded-2xl">
                {section.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{section.title}</h3>
                <p className="text-lg text-zinc-700 leading-relaxed mb-6">{section.content}</p>
                <a 
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 bg-zinc-50 p-4 rounded-xl border border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors" />
                  <div className="flex-1">
                    <p className="text-sm text-zinc-600 italic leading-relaxed group-hover:text-zinc-900 transition-colors">
                      {section.source}
                    </p>
                    <div className="flex items-center mt-2 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
                      <span>{language === 'vi' ? 'Xem nghiên cứu' : 'View Research'}</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brands Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-zinc-200"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-zinc-900 mb-4">{content.brandsTitle}</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">{content.brandsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandsData.map((brand, index) => (
              <motion.div 
                key={brand.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Brand Header */}
                <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-xl border border-zinc-200 p-2 flex items-center justify-center shadow-sm">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`} 
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/fallback_logo/100/100';
                        }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-zinc-900">{brand.name}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-200 text-zinc-800 mt-1">
                        {brand.origin}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Image & Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-6 mb-6">
                    <div className="w-1/3 aspect-square rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 flex-shrink-0">
                      <img 
                        src={brand.productImg} 
                        alt={brand.name} 
                        className="w-full h-full object-cover mix-blend-multiply"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-5 h-5 text-amber-400 fill-current" />
                        <span className="font-bold text-zinc-900">{brand.rating}</span>
                        <span className="text-sm text-zinc-500">({brand.reviews} {content.reviewsText})</span>
                      </div>
                      <div className="space-y-2">
                        {brand.certifications.map((cert, i) => (
                          <div key={i} className="flex items-center text-sm text-emerald-700 font-medium">
                            <CheckCircle className="w-4 h-4 mr-1.5 text-emerald-500" />
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-zinc-600 leading-relaxed flex-1">
                    {brand.desc[language as 'en' | 'vi']}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};
