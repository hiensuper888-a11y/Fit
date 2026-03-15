import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, ExternalLink, Award, Brain, Zap, Activity, Star, TrendingUp, Search, Dumbbell, Calendar, Flame, X, Moon, HeartPulse, Filter, AlertTriangle, ShieldAlert } from 'lucide-react';
import { CreatineInfo } from './CreatineInfo';
import { WheyInfo } from './WheyInfo';
import { PreWorkoutInfo } from './PreWorkoutInfo';
import { NutrexOutliftInfo } from './NutrexOutliftInfo';
import { MelatoninInfo } from './MelatoninInfo';
import { YohimbeInfo } from './YohimbeInfo';
import { MeditationInfo } from './MeditationInfo';
import { HealthAndLongevityInfo } from './HealthAndLongevityInfo';
import { InsomniaScience } from './InsomniaScience';
import { ImpactChart } from './ImpactChart';
import { ArticleMetricsChart } from './ArticleMetricsChart';

interface LearnProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

type Category = 'all' | 'muscle' | 'fatloss' | 'focus' | 'sleep' | 'side-effects' | 'interactions';

const SectionWrapper: React.FC<{ title: string; icon: React.ReactNode; chartData?: any; children: React.ReactNode }> = ({ title, icon, chartData, children }) => (
  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-16 bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
    <h3 className="text-2xl font-serif font-bold text-zinc-800 mb-6 flex items-center gap-2">
      {icon}
      {title}
    </h3>
    {chartData && <ArticleMetricsChart data={chartData} title={`Chỉ số khoa học ${title.split(' ').pop()}`} />}
    {children}
  </motion.div>
);

export const Learn: React.FC<LearnProps> = ({ searchQuery = '', setSearchQuery }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('all');

  const categories = [
    { id: 'all', label: 'Tất cả', icon: BookOpen },
    { id: 'muscle', label: 'Tăng cơ & Sức mạnh', icon: Dumbbell },
    { id: 'fatloss', label: 'Giảm mỡ & Chuyển hóa', icon: Flame },
    { id: 'focus', label: 'Tập trung & Trí não', icon: Brain },
    { id: 'sleep', label: 'Giấc ngủ & Phục hồi', icon: Moon },
    { id: 'side-effects', label: 'Tác dụng phụ', icon: AlertTriangle },
    { id: 'interactions', label: 'Tương tác thuốc', icon: ShieldAlert },
  ];

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

  const melatoninResearch = [
    {
      title: "Melatonin, the Hormone of Darkness: From Sleep Promotion to Ebola Treatment",
      source: "Brain Research Bulletin (Europe)",
      url: "https://pubmed.ncbi.nlm.nih.gov/25959674/",
      desc: "Tổng quan về vai trò của Melatonin trong việc điều hòa giấc ngủ và các lợi ích sức khỏe khác."
    },
    {
      title: "Efficacy and Safety of Melatonin for Sleep Disorders",
      source: "Sleep Medicine Reviews (USA)",
      url: "https://pubmed.ncbi.nlm.nih.gov/28460563/",
      desc: "Đánh giá hiệu quả và độ an toàn của việc bổ sung Melatonin đối với các chứng rối loạn giấc ngủ."
    }
  ];

  const yohimbeResearch = [
    {
      title: "Yohimbine: the effects on body composition and exercise performance in soccer players",
      source: "Research in Sports Medicine (Europe)",
      url: "https://pubmed.ncbi.nlm.nih.gov/17214405/",
      desc: "Nghiên cứu cho thấy Yohimbine giúp giảm đáng kể tỷ lệ mỡ cơ thể ở các vận động viên chuyên nghiệp."
    },
    {
      title: "Yohimbine for erectile dysfunction: A systematic review and meta-analysis",
      source: "Journal of Urology (USA)",
      url: "https://pubmed.ncbi.nlm.nih.gov/9643111/",
      desc: "Đánh giá hiệu quả của Yohimbine trong việc điều trị rối loạn cương dương so với giả dược."
    }
  ];

  const meditationResearch = [
    {
      title: "Brief, daily meditation enhances attention, memory, mood, and emotional regulation in non-experienced meditators",
      source: "Behavioural Brain Research (USA)",
      url: "https://pubmed.ncbi.nlm.nih.gov/30153464/",
      desc: "Nghiên cứu chứng minh thiền định hàng ngày giúp cải thiện sự tập trung, trí nhớ và điều chỉnh cảm xúc."
    },
    {
      title: "Mindfulness meditation and physical performance: A systematic review",
      source: "Psychology of Sport and Exercise (Europe)",
      url: "https://www.sciencedirect.com/science/article/pii/S146902921930492X",
      desc: "Phân tích tác động của thiền chánh niệm đối với hiệu suất thể thao, tốc độ phản ứng và trạng thái Flow."
    }
  ];

  const healthLongevityResearch = [
    {
      title: "Astaxanthin: A Review of its Chemistry and Applications",
      source: "Marine Drugs (MDPI - Europe)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3917265/",
      desc: "Nghiên cứu tổng quan về khả năng chống oxy hóa vượt trội của Astaxanthin và ứng dụng y học."
    },
    {
      title: "N-acetylcysteine in psychiatry: current therapeutic evidence and potential mechanisms of action",
      source: "Journal of Psychiatry & Neuroscience (Canada/US)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3044191/",
      desc: "Đánh giá hiệu quả của NAC trong điều trị các bệnh lý tâm thần và bảo vệ thần kinh."
    },
    {
      title: "Silymarin as a Natural Antioxidant: An Overview of its Phytochemistry, Biological Activities, and Pharmacological Properties",
      source: "Antioxidants (MDPI - Europe)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7140758/",
      desc: "Tổng hợp các nghiên cứu về đặc tính bảo vệ gan và chống ung thư của Silymarin (Milk Thistle)."
    },
    {
      title: "Omega-3 Fatty Acids and Cardiovascular Disease",
      source: "Circulation (AHA - USA)",
      url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000709",
      desc: "Khuyến nghị của Hiệp hội Tim mạch Hoa Kỳ về lợi ích của Omega-3 đối với sức khỏe tim mạch."
    },
    {
      title: "Vitamin D and the Immune System",
      source: "Journal of Investigative Medicine (USA)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3166406/",
      desc: "Nghiên cứu chi tiết về vai trò thiết yếu của Vitamin D3 trong việc điều hòa và tăng cường hệ miễn dịch."
    },
    {
      title: "Can meditation slow rate of cellular aging? Cognitive stress, mindfulness, and telomeres",
      source: "Annals of the New York Academy of Sciences (USA)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3057175/",
      desc: "Nghiên cứu đột phá chứng minh thiền định có thể làm chậm quá trình lão hóa tế bào bằng cách bảo vệ Telomere."
    }
  ];

  const insomniaResearch = [
    {
      title: "Mindfulness Meditation for Insomnia: A Meta-analysis",
      source: "JAMA Internal Medicine (USA)",
      url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2110998",
      desc: "Nghiên cứu chứng minh thiền chánh niệm cải thiện đáng kể chất lượng giấc ngủ."
    },
    {
      title: "European guideline for the diagnosis and treatment of insomnia",
      source: "European Sleep Research Society (Europe)",
      url: "https://onlinelibrary.wiley.com/doi/full/10.1111/jsr.12594",
      desc: "Hướng dẫn toàn diện của Châu Âu về chẩn đoán và điều trị mất ngủ."
    }
  ];

  const workoutResearch = [
    {
      title: "Maximizing Muscle Hypertrophy: A Systematic Review of Advanced Resistance Training Techniques and Methods",
      source: "International Journal of Environmental Research and Public Health (Europe)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6950543/",
      desc: "Phân tích toàn diện về các kỹ thuật tập luyện kháng lực nâng cao để tối đa hóa sự phì đại cơ bắp (Hypertrophy)."
    },
    {
      title: "Effects of Resistance Training Frequency on Measures of Muscle Hypertrophy",
      source: "Sports Medicine (USA)",
      url: "https://pubmed.ncbi.nlm.nih.gov/27102172/",
      desc: "Nghiên cứu về tần suất tập luyện. Cho thấy tập mỗi nhóm cơ 2 lần/tuần hiệu quả hơn 1 lần/tuần trong việc phát triển cơ bắp."
    },
    {
      title: "The Effects of Calisthenics Training Interventions on Physical Fitness",
      source: "Sports (MDPI - Europe)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9312210/",
      desc: "Đánh giá hiệu quả của Calisthenics (thể dục trọng lượng cơ thể) đối với sức mạnh và thành phần cơ thể so với tập tạ truyền thống."
    }
  ];

  const workoutMethods = [
    {
      title: "Gym (Tập Tạ Truyền Thống)",
      desc: "Sử dụng tạ đơn, tạ đòn và máy tập để tạo áp lực lên cơ bắp. Dễ dàng áp dụng nguyên tắc Progressive Overload (Tăng tiến khối lượng) để kích thích cơ bắp phát triển tối đa.",
      pros: ["Dễ tăng tiến mức tạ", "Cô lập từng nhóm cơ tốt", "Phù hợp mọi cấp độ từ người mới đến VĐV"],
      cons: ["Cần đến phòng tập hoặc mua thiết bị", "Dễ chấn thương nếu sai tư thế"]
    },
    {
      title: "Calisthenics (Thể thao đường phố)",
      desc: "Sử dụng chính trọng lượng cơ thể (Bodyweight) để tập luyện (Hít đất, kéo xà, dips, muscle-up). Đòi hỏi sự kiểm soát cơ thể và sức mạnh cốt lõi (core) cực tốt.",
      pros: ["Tập được mọi nơi, không cần thiết bị phức tạp", "Phát triển sức mạnh toàn diện, sự dẻo dai và core", "Ít tốn kém"],
      cons: ["Khó tăng tiến độ khó (phải đổi biến thể bài tập thay vì thêm tạ)", "Khó phát triển tối đa kích thước cơ bắp chân"]
    }
  ];

  const workoutSplits = [
    {
      name: "Push / Pull / Legs (PPL)",
      freq: "6 buổi/tuần (PPLPPL-Rest)",
      desc: "Chia theo nhóm cơ đẩy (Ngực, Vai, Tay sau), kéo (Lưng, Tay trước) và chân. Hiệu quả nhất cho người tập trung bình - khá vì mỗi nhóm cơ được tập 2 lần/tuần.",
      efficiency: "Rất cao (Theo nghiên cứu, tập 2 lần/tuần/nhóm cơ tối ưu cho Hypertrophy)."
    },
    {
      name: "Upper / Lower",
      freq: "4 buổi/tuần (UL-Rest-UL-Rest)",
      desc: "Chia thành ngày tập phần thân trên và ngày tập phần thân dưới. Rất tốt cho người bận rộn nhưng vẫn muốn đảm bảo tần suất 2 lần/tuần.",
      efficiency: "Cao, cân bằng tuyệt vời giữa tập luyện và phục hồi hệ thần kinh."
    },
    {
      name: "Bro Split (Mỗi ngày 1 nhóm cơ)",
      freq: "5-6 buổi/tuần",
      desc: "Mỗi ngày chỉ tập trung vào 1 nhóm cơ duy nhất (Thứ 2: Ngực, Thứ 3: Lưng, Thứ 4: Chân...).",
      efficiency: "Trung bình. Phù hợp với VĐV chuyên nghiệp, người bình thường dễ bị lãng phí thời gian phục hồi (cơ bắp chỉ cần 48-72h để phục hồi)."
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

  const filterItems = (items: any[], query: string) => {
    if (!query) return items;
    const lowerQuery = query.toLowerCase();
    return items.filter(item => 
      (item.title && item.title.toLowerCase().includes(lowerQuery)) ||
      (item.desc && item.desc.toLowerCase().includes(lowerQuery)) ||
      (item.name && item.name.toLowerCase().includes(lowerQuery))
    );
  };

  const filteredCreatine = filterItems(creatineResearch, searchQuery);
  const filteredWhey = filterItems(wheyResearch, searchQuery);
  const filteredPreworkout = filterItems(preworkoutResearch, searchQuery);
  const filteredMelatonin = filterItems(melatoninResearch, searchQuery);
  const filteredYohimbe = filterItems(yohimbeResearch, searchQuery);
  const filteredMeditation = filterItems(meditationResearch, searchQuery);
  const filteredHealthLongevity = filterItems(healthLongevityResearch, searchQuery);
  const filteredInsomnia = filterItems(insomniaResearch, searchQuery);
  const filteredBrands = filterItems(brands, searchQuery);
  const filteredWorkoutResearch = filterItems(workoutResearch, searchQuery);
  const filteredWorkoutMethods = filterItems(workoutMethods, searchQuery);
  const filteredWorkoutSplits = filterItems(workoutSplits, searchQuery);

  const shouldShow = (category: Category) => {
    if (selectedCategory === 'all') return true;
    return selectedCategory === category;
  };

  const metricsData = {
    creatine: [
      { name: 'Hiệu quả', value: 95 },
      { name: 'Bằng chứng', value: 100 },
      { name: 'An toàn', value: 98 },
      { name: 'Giá trị', value: 90 },
    ],
    whey: [
      { name: 'Hiệu quả', value: 90 },
      { name: 'Bằng chứng', value: 100 },
      { name: 'An toàn', value: 100 },
      { name: 'Giá trị', value: 75 },
    ],
    preworkout: [
      { name: 'Hiệu quả', value: 85 },
      { name: 'Bằng chứng', value: 90 },
      { name: 'An toàn', value: 80 },
      { name: 'Giá trị', value: 70 },
    ],
    melatonin: [
      { name: 'Hiệu quả', value: 85 },
      { name: 'Bằng chứng', value: 95 },
      { name: 'An toàn', value: 90 },
      { name: 'Giá trị', value: 95 },
    ],
    yohimbe: [
      { name: 'Hiệu quả', value: 75 },
      { name: 'Bằng chứng', value: 70 },
      { name: 'An toàn', value: 65 },
      { name: 'Giá trị', value: 85 },
    ],
    meditation: [
      { name: 'Hiệu quả', value: 80 },
      { name: 'Bằng chứng', value: 90 },
      { name: 'An toàn', value: 100 },
      { name: 'Giá trị', value: 100 },
    ],
    health: [
      { name: 'Hiệu quả', value: 85 },
      { name: 'Bằng chứng', value: 85 },
      { name: 'An toàn', value: 95 },
      { name: 'Giá trị', value: 80 },
    ],
    insomnia: [
      { name: 'Hiệu quả', value: 80 },
      { name: 'Bằng chứng', value: 90 },
      { name: 'An toàn', value: 100 },
      { name: 'Giá trị', value: 100 },
    ],
    workouts: [
      { name: 'Hiệu quả', value: 95 },
      { name: 'Bằng chứng', value: 100 },
      { name: 'An toàn', value: 90 },
      { name: 'Giá trị', value: 100 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderResearchLinks = (links: any[]) => {
    if (links.length === 0) return <p className="text-zinc-500 italic">Không tìm thấy kết quả phù hợp.</p>;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <motion.a 
            variants={itemVariants}
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
    );
  };

  return (
    <div className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-50 to-zinc-50 pointer-events-none"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-6 bg-emerald-100/50 px-4 py-2 rounded-full"
          >
            <BookOpen className="w-4 h-4" />
            <span>FitSupps Academy</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-extrabold text-zinc-900 mb-6 tracking-tight leading-tight"
          >
            Kiến Thức Thể Hình & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Dinh Dưỡng</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 leading-relaxed mb-10"
          >
            Khám phá sức mạnh của các loại thực phẩm bổ sung dựa trên các nghiên cứu khoa học uy tín từ Mỹ, Anh và Châu Âu.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto mb-8"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm bài viết, nghiên cứu, hãng..."
              value={searchQuery}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 bg-white border border-zinc-200 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm transition-all"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as Category)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Impact Chart Section */}
        {!searchQuery && selectedCategory === 'all' && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 justify-center">
              <TrendingUp className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl font-serif font-bold text-zinc-900">Tác động lên Thể chất & Tinh thần</h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <ImpactChart />
            </motion.div>
          </motion.section>
        )}

        {/* Research Section */}
        {(!searchQuery || filteredCreatine.length > 0 || filteredWhey.length > 0 || filteredPreworkout.length > 0 || filteredMelatonin.length > 0 || filteredYohimbe.length > 0 || filteredMeditation.length > 0) && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <Activity className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl font-serif font-bold text-zinc-900">
                1. Các Nghiên cứu Khoa học Uy tín (US & EU)
              </h2>
            </motion.div>
            
            {(!searchQuery || filteredWorkoutResearch.length > 0) && shouldShow('muscle') && (
              <motion.div variants={itemVariants} className="mb-12">
                <h3 className="text-2xl font-serif font-bold text-zinc-800 mb-6 flex items-center gap-2">
                  <Dumbbell className="w-6 h-6 text-orange-500" />
                  Nghiên cứu về Tập luyện & Phát triển cơ bắp
                </h3>
                <ArticleMetricsChart data={metricsData.workouts} title="Chỉ số hiệu quả tập luyện" />
                {renderResearchLinks(filteredWorkoutResearch)}
              </motion.div>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'muscle') && (
              <SectionWrapper title="Nghiên cứu về Creatine" icon={<Zap className="w-6 h-6 text-yellow-500" />} chartData={metricsData.creatine}>
                {renderResearchLinks(filteredCreatine)}
              </SectionWrapper>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'muscle') && (
              <SectionWrapper title="Nghiên cứu về Whey Protein" icon={<CheckCircle2 className="w-6 h-6 text-blue-500" />} chartData={metricsData.whey}>
                {renderResearchLinks(filteredWhey)}
              </SectionWrapper>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'muscle' || selectedCategory === 'focus') && (
              <SectionWrapper title="Nghiên cứu về Pre-workout" icon={<Brain className="w-6 h-6 text-purple-500" />} chartData={metricsData.preworkout}>
                {renderResearchLinks(filteredPreworkout)}
                <div className="mt-8">
                  <NutrexOutliftInfo />
                </div>
              </SectionWrapper>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'sleep') && (
              <SectionWrapper title="Nghiên cứu về Melatonin" icon={<Moon className="w-6 h-6 text-indigo-500" />} chartData={metricsData.melatonin}>
                {renderResearchLinks(filteredMelatonin)}
              </SectionWrapper>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'fatloss') && (
              <SectionWrapper title="Nghiên cứu về Yohimbe Bark" icon={<HeartPulse className="w-6 h-6 text-rose-500" />} chartData={metricsData.yohimbe}>
                {renderResearchLinks(filteredYohimbe)}
              </SectionWrapper>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'focus' || selectedCategory === 'sleep') && (
              <SectionWrapper title="Nghiên cứu về Thiền định (Meditation)" icon={<Brain className="w-6 h-6 text-emerald-500" />} chartData={metricsData.meditation}>
                {renderResearchLinks(filteredMeditation)}
              </SectionWrapper>
            )}

            {(selectedCategory === 'all') && (
              <SectionWrapper title="Nghiên cứu về Sức khỏe & Kéo dài tuổi thọ" icon={<Activity className="w-6 h-6 text-teal-500" />} chartData={metricsData.health}>
                {renderResearchLinks(filteredHealthLongevity)}
              </SectionWrapper>
            )}

            {(selectedCategory === 'all' || selectedCategory === 'sleep') && (
              <SectionWrapper title="Nghiên cứu về Mất ngủ & Giấc ngủ" icon={<Moon className="w-6 h-6 text-indigo-500" />} chartData={metricsData.insomnia}>
                {renderResearchLinks(filteredInsomnia)}
              </SectionWrapper>
            )}
          </motion.section>
        )}

        {/* Workout Methods Section */}
        {(!searchQuery || filteredWorkoutMethods.length > 0 || filteredWorkoutSplits.length > 0) && (shouldShow('muscle') || shouldShow('fatloss')) && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <Flame className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl font-serif font-bold text-zinc-900">
                2. Phương pháp Tập luyện & Chia lịch tập
              </h2>
            </motion.div>
            
            {(!searchQuery || filteredWorkoutMethods.length > 0) && (
              <motion.div variants={itemVariants} className="mb-12">
                <h3 className="text-2xl font-serif font-bold text-zinc-800 mb-6 flex items-center gap-2">
                  <Dumbbell className="w-6 h-6 text-zinc-600" />
                  Gym vs Calisthenics
                </h3>
                <ArticleMetricsChart data={metricsData.workouts} title="So sánh hiệu quả tập luyện" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredWorkoutMethods.map((method, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all">
                      <h4 className="text-2xl font-serif font-black text-zinc-900 mb-4">{method.title}</h4>
                      <p className="text-zinc-600 mb-6 leading-relaxed">{method.desc}</p>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-bold text-emerald-600 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Ưu điểm
                          </h5>
                          <ul className="list-disc list-inside text-sm text-zinc-600 space-y-1">
                            {method.pros.map((pro: string, j: number) => <li key={j}>{pro}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-red-500 mb-2 flex items-center gap-2">
                            <X className="w-4 h-4" /> Nhược điểm
                          </h5>
                          <ul className="list-disc list-inside text-sm text-zinc-600 space-y-1">
                            {method.cons.map((con: string, j: number) => <li key={j}>{con}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {(!searchQuery || filteredWorkoutSplits.length > 0) && (
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-serif font-bold text-zinc-800 mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  Cách chia lịch tập (Workout Splits)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredWorkoutSplits.map((split, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm hover:border-emerald-500 transition-all group">
                      <h4 className="text-xl font-serif font-bold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">{split.name}</h4>
                      <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-4">{split.freq}</p>
                      <p className="text-sm text-zinc-600 mb-4">{split.desc}</p>
                      <div className="bg-zinc-50 p-4 rounded-2xl">
                        <span className="text-xs font-bold text-zinc-400 uppercase block mb-1">Hiệu quả phì đại cơ</span>
                        <span className="text-sm font-medium text-zinc-900">{split.efficiency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.section>
        )}

        {/* Brands Section */}
        {(!searchQuery || filteredBrands.length > 0) && selectedCategory === 'all' && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl font-serif font-bold text-zinc-900">
                3. Top 10 Hãng Thực phẩm Bổ sung Uy tín Toàn cầu
              </h2>
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg text-zinc-600 mb-10 max-w-3xl">
              Danh sách dựa trên các chứng nhận an toàn (NSF, Informed Choice, GMP) và đánh giá khách quan từ các chuyên trang hàng đầu như Labdoor, Bodybuilding.com, và Trustpilot.
            </motion.p>
            
            {filteredBrands.length === 0 ? (
              <p className="text-zinc-500 italic">Không tìm thấy hãng nào phù hợp.</p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredBrands.map((brand, i) => (
                  <motion.div 
                    variants={itemVariants}
                    key={i} 
                    className="flex flex-col sm:flex-row gap-6 p-6 bg-white border border-zinc-200 rounded-3xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-full sm:w-32 flex flex-col items-center gap-4 shrink-0">
                      <div className="w-full aspect-square flex items-center justify-center p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/100?text=' + brand.name.split(' ')[0] }} />
                      </div>
                      <div className="w-full aspect-square rounded-2xl overflow-hidden border border-zinc-100">
                        <img src={brand.productImage} alt={`${brand.name} product`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h4 className="text-2xl font-serif font-bold text-zinc-900 m-0">{brand.name}</h4>
                      </div>
                      <div className="mb-4">
                        <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-200">
                          {brand.cert}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4 bg-zinc-50 w-fit px-3 py-1.5 rounded-xl">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-bold text-zinc-900">{brand.rating}</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">bởi {brand.reviewer}</span>
                      </div>
                      <p className="text-zinc-600 mb-6 text-sm leading-relaxed">{brand.desc}</p>
                      <a 
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors mt-auto"
                      >
                        Truy cập trang chủ <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}

        {/* Detailed Info Sections */}
        {(!searchQuery || "creatine".includes(searchQuery.toLowerCase())) && (shouldShow('muscle') || shouldShow('focus') || shouldShow('side-effects') || shouldShow('interactions')) && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">4. Thông tin chi tiết về Creatine</h2>
              <ArticleMetricsChart data={metricsData.creatine} title="Chỉ số khoa học Creatine" />
              <CreatineInfo />
            </motion.div>
          </motion.section>
        )}
        
        {(!searchQuery || "whey protein".includes(searchQuery.toLowerCase())) && (shouldShow('muscle') || shouldShow('side-effects')) && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">5. Thông tin chi tiết về Whey Protein</h2>
              <ArticleMetricsChart data={metricsData.whey} title="Chỉ số khoa học Whey Protein" />
              <WheyInfo />
            </motion.div>
          </motion.section>
        )}

        {(!searchQuery || "pre-workout".includes(searchQuery.toLowerCase()) || "pre workout".includes(searchQuery.toLowerCase())) && (shouldShow('muscle') || shouldShow('focus') || shouldShow('side-effects') || shouldShow('interactions')) && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">6. Thông tin chi tiết về Pre-workout</h2>
              <ArticleMetricsChart data={metricsData.preworkout} title="Chỉ số khoa học Pre-workout" />
              <PreWorkoutInfo />
            </motion.div>
          </motion.section>
        )}

        {(!searchQuery || "melatonin".includes(searchQuery.toLowerCase())) && (shouldShow('sleep') || shouldShow('side-effects') || shouldShow('interactions')) && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">7. Thông tin chi tiết về Melatonin</h2>
              <ArticleMetricsChart data={metricsData.melatonin} title="Chỉ số khoa học Melatonin" />
              <MelatoninInfo />
            </motion.div>
          </motion.section>
        )}

        {(!searchQuery || "yohimbe".includes(searchQuery.toLowerCase())) && (shouldShow('fatloss') || shouldShow('side-effects') || shouldShow('interactions')) && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">8. Thông tin chi tiết về Yohimbe Bark</h2>
              <ArticleMetricsChart data={metricsData.yohimbe} title="Chỉ số khoa học Yohimbe" />
              <YohimbeInfo />
            </motion.div>
          </motion.section>
        )}

        {(!searchQuery || "thiền".includes(searchQuery.toLowerCase()) || "meditation".includes(searchQuery.toLowerCase())) && (shouldShow('focus') || shouldShow('sleep')) && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">9. Thông tin chi tiết về Thiền định (Meditation)</h2>
              <ArticleMetricsChart data={metricsData.meditation} title="Chỉ số khoa học Thiền định" />
              <MeditationInfo />
            </motion.div>
          </motion.section>
        )}

        {(!searchQuery || "astaxanthin".includes(searchQuery.toLowerCase()) || "nac".includes(searchQuery.toLowerCase()) || "milk thistle".includes(searchQuery.toLowerCase()) || "omega".includes(searchQuery.toLowerCase()) || "vitamin d3".includes(searchQuery.toLowerCase()) || "lão hóa".includes(searchQuery.toLowerCase())) && selectedCategory === 'all' && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">10. Sức khỏe Toàn diện & Đảo ngược Lão hóa</h2>
              <ArticleMetricsChart data={metricsData.health} title="Chỉ số khoa học Sức khỏe" />
              <HealthAndLongevityInfo />
            </motion.div>
          </motion.section>
        )}

        {(!searchQuery || "mất ngủ".includes(searchQuery.toLowerCase()) || "insomnia".includes(searchQuery.toLowerCase()) || "giấc ngủ".includes(searchQuery.toLowerCase())) && shouldShow('sleep') && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">11. Khoa học về Mất ngủ & Cách điều trị</h2>
              <ArticleMetricsChart data={metricsData.insomnia} title="Chỉ số khoa học Giấc ngủ" />
              <InsomniaScience />
            </motion.div>
          </motion.section>
        )}
      </div>
    </div>
  );
};
