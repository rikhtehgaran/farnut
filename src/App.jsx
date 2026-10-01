import React, { useState } from 'react';
import {
  Phone,
  Calendar,
  CheckCircle2,
  Award,
  Users,
  Clock,
  HeartPulse,
  Activity,
  Apple,
  Dumbbell,
  Baby,
  Smile,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Sparkles,
  MapPin,
  Send,
  Calculator,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Menu,
  X,
  Stethoscope,
  Info,
  Check,
} from 'lucide-react';
import niloofarImg from './assets/niloofar-nassaj.png';
import logoImg from './assets/farnut-logo.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('all');

  // BMI Calculator States
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(72);
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState('female');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [bmiResult, setBmiResult] = useState(null);

  // Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dietType: 'تناسب اندام (کاهش/افزایش وزن)',
    age: '',
    height: '',
    weight: '',
    medicalCondition: '',
    description: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Modal Article State
  const [activeArticle, setActiveArticle] = useState(null);

  // Accordion FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // Calculate BMI
  const handleCalculateBmi = (e) => {
    if (e) e.preventDefault();
    const hMeter = height / 100;
    const bmi = (weight / (hMeter * hMeter)).toFixed(1);
    const minIdealWeight = (18.5 * hMeter * hMeter).toFixed(1);
    const maxIdealWeight = (24.9 * hMeter * hMeter).toFixed(1);

    let status = '';
    let color = '';
    let recommendation = '';

    if (bmi < 18.5) {
      status = 'کمبود وزن (لاغری)';
      color = 'text-amber-500 bg-amber-50 border-amber-200';
      recommendation = 'نیاز به رژیم افزایش وزن اصولی، افزایش حجم عضلانی و بهبود دریافت کالری و مواد مغذی دارید.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = 'وزن طبیعی و ایده‌آل';
      color = 'text-emerald-600 bg-emerald-50 border-emerald-200';
      recommendation = 'تبریک! شاخص بدنی شما در محدوده سالم است. رژیم تثبیت وزن و ارتقای کیفیت تغذیه به حفظ شادابی شما کمک می‌کند.';
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = 'اضافه وزن';
      color = 'text-orange-600 bg-orange-50 border-orange-200';
      recommendation = 'با رژیم کاهش وزن اصولی فرنوت بدون گرسنگی، می‌توانید به راحتی به محدوده وزن طبیعی بازگردید.';
    } else if (bmi >= 30 && bmi <= 34.9) {
      status = 'چاقی درجه ۱';
      color = 'text-red-500 bg-red-50 border-red-200';
      recommendation = 'برای پیشگیری از بیماری‌های متابولیک، کبد چرب و فشار خون، دریافت برنامه غذایی علمی و پایش مستمر توصیه می‌شود.';
    } else {
      status = 'چاقی مفرط (درجه ۲ و ۳)';
      color = 'text-red-700 bg-red-100 border-red-300';
      recommendation = 'نیاز به مداخله جدی تغذیه‌ای، ارزیابی آزمایشات بالینی و رژیم درمانی تحت نظارت دقیق متخصص تغذیه دارید.';
    }

    setBmiResult({
      bmi,
      status,
      color,
      recommendation,
      idealRange: `${minIdealWeight} تا ${maxIdealWeight} کیلوگرم`,
    });
  };

  const services = [
    {
      id: 'fitness',
      title: 'تنظیم برنامه غذایی تناسب اندام',
      tag: 'کاهش / افزایش / تثبیت وزن',
      icon: HeartPulse,
      desc: 'دستیابی به وزن ایده‌آل بدون گرسنگی، بدون حذف گروه‌های غذایی و کاملاً متناسب با سفره غذایی خانواده ایرانی.',
      features: ['کاهش چربی‌های احشایی و شکمی', 'حفظ شادابی پوست و جلوگیری از ریزش مو', 'تثبیت پایدار و بدون بازگشت'],
    },
    {
      id: 'diseases',
      title: 'تنظیم برنامه غذایی بیماری‌ها',
      tag: 'دیابت، کبد چرب، فشار خون، چربی',
      icon: Stethoscope,
      desc: 'رژیم‌درمانی تخصصی بیماری‌های غیرواگیر بر اساس آخرین آزمایشات خون و شرح حال دارویی جهت بهبود علائم و کنترل بیماری.',
      features: ['کنترل قند خون و HbA1c', 'پاکسازی کبد چرب گرید ۱ تا ۳', 'تنظیم فشار خون و چربی خون'],
    },
    {
      id: 'athletes',
      title: 'تنظیم برنامه غذایی ورزشکاران',
      tag: 'حجم، کات، افزایش استقامت',
      icon: Dumbbell,
      desc: 'طراحی ماکروها و ریزمغذی‌ها، تغذیه قبل و بعد تمرین و راهنمایی مکمل‌های مجاز بر اساس نوع رشته ورزشی.',
      features: ['افزایش توده خالص عضلانی', 'تسریع ریکاوری بعد تمرین', 'بهبود رکورد و استقامت بدنی'],
    },
    {
      id: 'pregnancy',
      title: 'تنظیم برنامه غذایی خانم باردار',
      tag: 'مراقبت مادر و جنین',
      icon: Baby,
      desc: 'تأمین کامل نیازهای تکاملی جنین، مدیریت وزن‌گیری مادر، کنترل ویار و پیشگیری از دیابت و مسمومیت بارداری.',
      features: ['رشد بهینه سیستم عصبی جنین', 'جلوگیری از کم‌خونی و ضعف مادر', 'کنترل اضافه وزن بی‌رویه دوران بارداری'],
    },
    {
      id: 'lactation',
      title: 'تنظیم برنامه غذایی خانم شیرده',
      tag: 'تداوم شیردهی و کاهش وزن',
      icon: Sparkles,
      desc: 'افزایش کیفیت و غلظت شیر مادر در کنار کاهش تدریجی چربی‌های اضافه بارداری بدون افت انرژی مادر.',
      features: ['تأمین کلسیم، آهن و روی', 'رفع خستگی و کمبود املاح', 'بازگشت فرم بدنی پس از زایمان'],
    },
    {
      id: 'kids',
      title: 'تنظیم برنامه غذایی کودک و نوجوان',
      tag: 'رشد قدی و پیشگیری از چاقی',
      icon: Smile,
      desc: 'رژیم ویژه دوران رشد سریع، افزایش قد، تقویت حافظه و یادگیری و اصلاح عادات غذایی بدغذایی کودکان.',
      features: ['بهینه‌سازی جهش رشد قدی', 'تقویت سیستم ایمنی و تمرکز', 'جلوگیری از بلوغ زودرس'],
    },
    {
      id: 'youth',
      title: 'تنظیم برنامه غذایی جوانان',
      tag: 'انرژی روزانه و زندگی دانشجویی',
      icon: Activity,
      desc: 'برنامه غذایی منعطف و سریع متناسب با فعالیت‌های پرمشغله کاری و تحصیلی جوانان با حفظ تناسب اندام.',
      features: ['افزایش سطح انرژی روزانه', 'برنامه غذایی ساده و در دسترس', 'مدیریت استرس و عادات غذایی سالم'],
    },
    {
      id: 'middleage',
      title: 'تنظیم برنامه غذایی میانسالان',
      tag: 'حفظ تراکم استخوان و متابولیسم',
      icon: ShieldCheck,
      desc: 'پیشگیری از افت متابولیسم، حفظ حجم عضلانی، سلامت قلب و عروق و کنترل تغییرات هورمونی میانسالی.',
      features: ['جلوگیری از پوکی استخوان', 'بهبود خلق‌وخو و خواب', 'تنظیم وزن در تغییرات هورمونی'],
    },
    {
      id: 'seniors',
      title: 'تنظیم برنامه غذایی سالمندان',
      tag: 'تغذیه زودهضم و سلامت مفاصل',
      icon: Award,
      desc: 'تغذیه مغذی، زودهضم و سازگار با سیستم گوارش سالمندان برای حفظ استقلال حرکتی، شادابی و شادابی ذهن.',
      features: ['بهبود هضم و رفع یبوست', 'تقویت مفاصل و استخوان‌ها', 'پیشگیری از زوال عقل و آلزایمر'],
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'بهترین روش لاغری کدام است؟',
      category: 'کاهش وزن و تناسب اندام',
      readTime: '۴ دقیقه مطالعه',
      summary: 'چاقی یکی از بیماری‌های شایع و از عوامل مهم مرگ‌زودرس در سراسر دنیا و کشور ما است. اما بهترین روش لاغری کدام است؟ روشی که بدون گرسنگی شدید، متکی به سفره خانواده و بر پایه تغییر سبک زندگی پایدار باشد.',
      fullText: `اضافه وزن و چاقی به یکی از دغدغه‌های جدی جامعه امروز تبدیل شده است. بسیاری از افراد به دنبال راه‌های میانبر مثل دمنوش‌ها، رژیم‌های تک‌غذایی یا حذف کامل کربوهیدرات هستند. اما تجربیات بالینی و پژوهش‌های روز دنیا نشان می‌دهند که بهترین روش لاغری، روشی است که سه ویژگی بنیادین داشته باشد:
1. قابلیت ادامه‌دادن طولانی‌مدت (Sustainability): رژیمی که نتوانید ۶ ماه رعایت کنید، بعد از رهاسازی باعث بازگشت ۲ برابری وزن می‌شود.
2. انطباق با سفره ایرانی و خانواده: نیازی به پخت غذاهای مجزا و پرهزینه نیست؛ کنترل اندازه سهم غذا (Portion Control) کلید اصلی است.
3. حفظ توده عضلانی و متابولیسم: با تأمین پروتئین کافی و تقسیم اصولی وعده‌ها، متابولیسم بدن افت نمی‌کند و چربی‌سوزی خالص رخ می‌دهد.`,
    },
    {
      id: 2,
      title: '۱۰ مشکلی که با کمبود ویتامین دی در بدن اتفاق می‌افتد',
      category: 'ریز‌مغذی‌ها و سلامت عمومی',
      readTime: '۳ دقیقه مطالعه',
      summary: 'ویتامین D بیشتر از یک ویتامین ساده، نقش هورمونی در بدن ایفا می‌کند. کمبود آن فراتر از درد مفاصل، بر سیستم ایمنی، خلق‌وخو و حتی مقاومت به انسولین تأثیر مستقیم دارد.',
      fullText: `کمبود ویتامین دی یکی از شایع‌ترین مشکلات در آزمایشات مراجعین ایرانی است. ۱۰ پیامد شایع کمبود ویتامین دی عبارتند از:
1. خستگی و ضعف مزمن در طول روز
2. دردهای اسکلتی و عضلانی به خصوص در کمر و پاها
3. افت سیستم ایمنی و ابتلا مکرر به سرماخوردگی و عفونت‌ها
4. ریزش مو و افت کیفیت تارهای مو
5. افسردگی فصلی و نوسانات خلقی
6. ترمیم کند زخم‌ها و آسیب‌دیدگی‌ها
7. کاهش تراکم استخوان و خطر استئوپروز
8. افزایش مقاومت به انسولین و سخت‌تر شدن کاهش وزن
9. اختلالات خواب و خستگی پس از بیدار شدن
10. افزایش ریسک بیماری‌های خودایمنی.
تنظیم دوز مکمل ویتامین D حتماً باید بر اساس عدد دقیق آزمایش سرمی خون شما و تحت نظر متخصص تغذیه انجام گیرد.`,
    },
    {
      id: 3,
      title: 'بهترین رژیم غذایی پیشگیری از آلزایمر (رژیم MIND)',
      category: 'سلامت مغز و اعصاب',
      readTime: '۵ دقیقه مطالعه',
      summary: 'رژیم غذایی ترکیبی مدیترانه‌ای-دش به نام MIND می‌تواند تا ۵۳ درصد ریسک ابتلا به زوال عقل و آلزایمر را در دوران میانسالی و کهنسالی کاهش دهد.',
      fullText: `پژوهش‌های نورولوژی و تغذیه ثابت کرده‌اند آنچه می‌خوریم، ارتباط مستقیمی با سرعت پیر شدن سلول‌های مغز دارد. رژیم غذایی MIND با تمرکز بر آنتی‌اکسیدان‌ها و اسیدهای چرب امگا-۳ از تجمع پلاک‌های آمیلوئید در مغز جلوگیری می‌کند:
- مصرف روزانه سبزیجات برگ سبز تیره (مانند اسفناج)
- مصرف انواع توت‌ها و تمشک به عنوان میوه‌های تقویت‌کننده حافظه
- مغزها و آجیل‌های خام به ویژه گردو
- روغن زیتون بکر به عنوان منبع اصلی روغن مصرفی
- مصرف ماهی‌های چرب ۲ بار در هفته
- محدودسازی گوشت‌های فرآوری‌شده، فست‌فودها، شیرینی‌جات و کره حیوانی.`,
    },
    {
      id: 4,
      title: 'مراحل پیشرفت بیماری آلزایمر و عوامل مؤثر در بروز آن',
      category: 'بیماری‌های نورودژنراتیو',
      readTime: '۴ دقیقه مطالعه',
      summary: 'بررسی جامع علائم اولیه، مراحل پیشرفت تدریجی آلزایمر و راهکارهای تغذیه‌ای برای کاهش التهاب سیستم عصبی مرکزی.',
      fullText: `آلزایمر بیماری تدریجی است که سال‌ها قبل از بروز علائم بالینی در مغز آغاز می‌شود. عوامل خطرزایی همچون دیابت کنترل‌نشده، فشار خون بالا، کم‌تحرکی و تغذیه سرشار از چربی‌های ترانس، روند پیشرفت آن را تسریع می‌کنند.
مراحل پیشرفت شامل مرحله پیش‌بالینی، اختلال شناختی خفیف (MCI) و مراحل زوال عقل خفیف، متوسط و شدید است. رژیم غذایی ضدالتهاب، مصرف امگا-۳، ویتامین‌های گروه B (به خصوص B12 و فولات) و ویتامین E در کنار ورزش و فعالیت فکری، مؤثرترین سد دفاعی ما در برابر این بیماری هستند.`,
    },
  ];

  const faqs = [
    {
      q: 'رژیم آنلاین فرنوت چه فرقی با رژیم‌های آماده یا اپلیکیشن‌ها دارد؟',
      a: 'در فرنوت تمام برنامه‌ها به صورت ۱۰۰٪ اختصاصی توسط خانم نیلوفر نساج (کارشناس تغذیه ت-۶۸۸۹) و بر اساس آنالیز آزمایشات خون، مشخصات بدنی، سابقه بیماری، داروهای مصرفی و علاقه‌مندی‌های غذایی شما نوشته می‌شود. هیچ برنامه رباتیک یا کپی‌شده‌ای وجود ندارد.',
    },
    {
      q: 'آیا برای این رژیم نیاز به پخت غذاهای خاص یا خرید خوراکی‌های گران است؟',
      a: 'خیر، اساس کار کلینیک فرنوت «تغذیه بر پایه سفره خانواده ایرانی» است. شما همان غذایی را میل می‌کنید که برای سایر اعضای خانه طبخ می‌شود، اما با حجم کنترل‌شده، ترکیب اصولی و اصلاح روش طبخ.',
    },
    {
      q: 'پشتیبانی و ارتباط با کارشناس تغذیه چگونه است؟',
      a: 'پس از دریافت برنامه غذایی، ارتباط مستقیم شما با خانم نساج از طریق پیام‌رسان‌ها برقرار است. شما می‌توانید گزارش‌های هفتگی وزن و اندازه، عکس بشقاب غذایی یا سوالات و چالش‌های خود را ارسال کرده و راهنمایی دریافت کنید.',
    },
    {
      q: 'آیا افراد دارای بیماری‌های خاص مانند دیابت یا کبد چرب هم می‌توانند رژیم بگیرند؟',
      a: 'بله، با توجه به ۷ سال سابقه بالینی خانم نساج در مراکز جامع بهداشت و ویزیت بیش از ۱۴ هزار مراجع، تخصص اصلی ایشان مدیریت تغذیه‌ای بیماری‌های غیرواگیر (دیابت، کبد چرب، فشار خون، چربی، مشکلات تیروئید و گوارش) است.',
    },
    {
      q: 'برنامه غذایی چند روز پس از ثبت اطلاعات آماده می‌شود؟',
      a: 'معمولاً بین ۲۴ الی ۴۸ ساعت کاری پس از تکمیل فرم، بررسی آزمایشات و مشاوره اولیه، رژیم غذایی جامع همراه با راهنمای جایگزینی برای شما ارسال می‌گردد.',
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('لطفاً نام و شماره تماس خود را وارد نمایید.');
      return;
    }
    setFormSubmitted(true);
  };

  const filteredServices =
    selectedService === 'all'
      ? services
      : services.filter((s) => s.id === selectedService);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* ===================== TOP ANNOUNCEMENT BAR ===================== */}
      <div className="bg-emerald-950 text-emerald-100 py-2.5 px-4 text-xs sm:text-sm border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium text-emerald-300">
              <Award size={15} />
              کد نظام پزشکی: ت-۶۸۸۹
            </span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
            <span className="flex items-center gap-1.5">
              <Users size={15} />
              بیش از ۱۴,۰۰۰ ویزیت موفق بالینی در استان اصفهان
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:09304585419"
              className="flex items-center gap-1.5 font-semibold text-emerald-200 hover:text-white transition-colors"
              dir="ltr"
            >
              <span>0930 45 85 419</span>
              <Phone size={14} className="text-emerald-400" />
            </a>
          </div>
        </div>
      </div>

      {/* ===================== NAVBAR ===================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Info */}
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="لوگوی فرنوت"
              className="w-12 h-12 object-contain rounded-xl p-1 bg-emerald-50 border border-emerald-100 shadow-sm"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-emerald-800 tracking-tight">فرنوت</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">FARNUT</span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                کلینیک رژیم درمانی آنلاین نیلوفر نساج
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#hero" className="hover:text-emerald-700 transition-colors">
              صفحه اصلی
            </a>
            <a href="#services" className="hover:text-emerald-700 transition-colors">
              خدمات رژیم
            </a>
            <a href="#about" className="hover:text-emerald-700 transition-colors">
              درباره نیلوفر نساج
            </a>
            <a href="#calculator" className="hover:text-emerald-700 transition-colors">
              محاسبه BMI
            </a>
            <a href="#process" className="hover:text-emerald-700 transition-colors">
              مراحل دریافت رژیم
            </a>
            <a href="#articles" className="hover:text-emerald-700 transition-colors">
              مقالات سلامت
            </a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">
              سوالات متداول
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#order-form"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-emerald-700/20 hover:shadow-emerald-800/30 transition-all duration-200 cursor-pointer"
            >
              <span>دریافت رژیم آنلاین</span>
              <ArrowLeft size={16} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-emerald-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="منوی موبایل"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-semibold hover:text-emerald-700"
            >
              صفحه اصلی
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-semibold hover:text-emerald-700"
            >
              خدمات رژیم درمانی
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-semibold hover:text-emerald-700"
            >
              درباره نیلوفر نساج
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-semibold hover:text-emerald-700"
            >
              محاسبه آنلاین BMI
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-semibold hover:text-emerald-700"
            >
              مراحل دریافت رژیم
            </a>
            <a
              href="#articles"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-semibold hover:text-emerald-700"
            >
              مقالات سلامت
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-800 font-semibold hover:text-emerald-700"
            >
              سوالات متداول
            </a>
            <div className="pt-2">
              <a
                href="#order-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm shadow-md"
              >
                <span>ثبت درخواست رژیم آنلاین</span>
                <ArrowLeft size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ===================== HERO SECTION ===================== */}
      <section
        id="hero"
        className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-emerald-50/70 via-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Right text content (RTL) */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border border-emerald-200 shadow-sm">
                <Sparkles size={16} className="text-emerald-600" />
                <span>کلینیک تخصصی تغذیه و رژیم‌درمانی فرنوت</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 leading-[1.25] tracking-tight">
                تناسب اندام و زندگی سالم{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-700 to-teal-600">
                  در هر لحظه
                </span>{' '}
                با رژیم غذایی اصولی
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                با دریافت رژیم غذایی آنلاین فرنوت، به‌راحتی به تناسب اندام دست یابید و از سلامتی لذت ببرید.
                برنامه‌ریزی ۱۰۰٪ اختصاصی توسط <strong>نیلوفر نساج</strong> (کارشناس تغذیه و رژیم‌درمانی، کد نظام پزشکی
                ت-۶۸۸۹)، با تکیه بر ۷ سال تجربه بالینی در مراکز بهداشت دانشگاه علوم پزشکی اصفهان و ویزیت بیش از ۱۴ هزار
                مراجع موفق.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-800">بر پایه سفره ایرانی</p>
                    <p className="text-slate-400">بدون غذاهای عجیب</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Users size={18} />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-800">۱۴,۰۰۰+ ویزیت</p>
                    <p className="text-slate-400">سابقه درخشان درمانی</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <HeartPulse size={18} />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-800">پشتیبانی مستمر</p>
                    <p className="text-slate-400">همراهی گام‌به‌گام</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="#order-form"
                  className="inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-700/25 hover:shadow-emerald-800/35 transition-all duration-200"
                >
                  <span>دریافت رژیم آنلاین فرنوت</span>
                  <ArrowLeft size={18} />
                </a>

                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-6 py-4 rounded-xl border border-slate-300 shadow-sm transition-all duration-200"
                >
                  <Calculator size={18} className="text-emerald-700" />
                  <span>محاسبه رایگان شاخص BMI</span>
                </a>
              </div>
            </div>

            {/* Left image showcase with User Image (RTL) */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Decorative backdrops */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/50 via-teal-100/40 to-emerald-300/30 rounded-3xl blur-2xl transform -rotate-3 scale-95"></div>

              <div className="relative w-full max-w-md bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-emerald-100/80">
                {/* Doctor Portrait Image */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50/60 to-slate-100 flex items-center justify-center pt-4">
                  <img
                    src={niloofarImg}
                    alt="نیلوفر نساج - متخصص تغذیه و رژیم درمانی فرنوت"
                    className="w-full h-auto max-h-[440px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-md text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                    <Award size={15} className="text-emerald-600" />
                    <span>کد نظام پزشکی: ت-۶۸۸۹</span>
                  </div>
                </div>

                {/* Doctor Credentials Caption */}
                <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                  <h3 className="text-xl font-black text-slate-900">نیلوفر نساج</h3>
                  <p className="text-sm font-semibold text-emerald-700 mt-0.5">
                    متخصص تغذیه و رژیم‌درمانی بالینی
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    ۷ سال سابقه در مراکز بهداشتی دانشگاه علوم پزشکی اصفهان
                  </p>
                </div>

                {/* Floating highlight badge */}
                <div className="absolute -top-4 -right-4 bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 border-2 border-white">
                  <Users size={16} className="text-emerald-300" />
                  <span>۱۴,۰۰۰ ویزیت موفق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BMI CALCULATOR SECTION ===================== */}
      <section id="calculator" className="py-16 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-700 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ارزیابی اولیه وضعیت بدنی
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3">
              محاسبه‌گر آنلاین شاخص توده بدنی (BMI)
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              قد و وزن خود را وارد کنید تا وضعیت کنونی بدنی شما ارزیابی شده و وزن ایده‌آلتان مشخص گردد.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Input Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              {/* Gender Selection */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">جنسیت</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                      gender === 'female'
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    خانم
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 rounded-xl font-bold text-sm border transition-all ${
                      gender === 'male'
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                    }`}
                  >
                    آقا
                  </button>
                </div>
              </div>

              {/* Height slider & input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-700">قد (سانتی‌متر)</label>
                  <span className="text-base font-black text-emerald-800">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="210"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-emerald-700 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Weight slider & input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-700">وزن (کیلوگرم)</label>
                  <span className="text-base font-black text-emerald-800">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-emerald-700 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Age slider & input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-700">سن (سال)</label>
                  <span className="text-base font-black text-emerald-800">{age} سال</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-emerald-700 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">سطح فعالیت روزانه</label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                >
                  <option value="sedentary">کم‌تحرک / پشت‌میز نشین (بدون ورزش)</option>
                  <option value="light">فعالیت سبک (۱ تا ۳ روز پیاده‌روی در هفته)</option>
                  <option value="moderate">فعالیت متوسط (۳ تا ۵ روز ورزش در هفته)</option>
                  <option value="high">بسیار فعال / ورزشکار پرکار</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handleCalculateBmi}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator size={18} />
                <span>محاسبه و تحلیل شاخص بدنی</span>
              </button>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
                  <h3 className="font-bold text-lg text-emerald-200">نتیجه سنجش BMI</h3>
                  <span className="text-xs bg-emerald-800/70 text-emerald-300 px-3 py-1 rounded-full">
                    شاخص توده بدنی
                  </span>
                </div>

                {bmiResult ? (
                  <div className="mt-6 space-y-5 animate-fadeIn">
                    <div className="text-center py-3 bg-emerald-950/60 rounded-2xl border border-emerald-800/60">
                      <p className="text-xs text-emerald-300">شاخص توده بدنی شما:</p>
                      <p className="text-5xl font-black text-white mt-1 tracking-tight">{bmiResult.bmi}</p>
                      <span className={`inline-block mt-3 px-4 py-1 rounded-full text-xs font-bold border ${bmiResult.color}`}>
                        {bmiResult.status}
                      </span>
                    </div>

                    <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-800/40 text-xs sm:text-sm space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-300">محدوده وزن ایده‌آل شما:</span>
                        <span className="font-bold text-white">{bmiResult.idealRange}</span>
                      </div>
                    </div>

                    <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-700/40 text-xs sm:text-sm leading-relaxed text-emerald-100">
                      <p className="font-bold text-emerald-300 mb-1">توصیه بالینی کارشناس تغذیه:</p>
                      <p>{bmiResult.recommendation}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-800/50 text-emerald-300 flex items-center justify-center mx-auto">
                      <Activity size={32} />
                    </div>
                    <p className="text-emerald-200 text-sm">
                      مشخصات خود را تنظیم کرده و روی دکمه «محاسبه و تحلیل» کلیک کنید تا گزارش وضعیت شما نمایش داده شود.
                    </p>
                  </div>
                )}
              </div>

              {bmiResult && (
                <div className="pt-6 border-t border-emerald-800/80">
                  <a
                    href="#order-form"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        height: String(height),
                        weight: String(weight),
                        age: String(age),
                      }));
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold py-3 rounded-xl transition-colors text-sm shadow-md cursor-pointer"
                  >
                    <span>ثبت این مشخصات برای دریافت رژیم</span>
                    <ArrowLeft size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES SECTION ===================== */}
      <section id="services" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-700 font-bold text-sm bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
              خدمات جامع کلینیک فرنوت
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              آشنایی با خدمات من در حوزه تغذیه و رژیم‌درمانی
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              ارائه برنامه‌های غذایی کاملاً علمی و اختصاصی متناسب با سن، شرایط بالینی، اهداف فردی و عادات روزمره.
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <button
                onClick={() => setSelectedService('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedService === 'all'
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                تمام خدمات (۹ رده)
              </button>
              <button
                onClick={() => setSelectedService('fitness')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedService === 'fitness'
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                تناسب اندام
              </button>
              <button
                onClick={() => setSelectedService('diseases')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedService === 'diseases'
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                بیماری‌ها
              </button>
              <button
                onClick={() => setSelectedService('pregnancy')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedService === 'pregnancy'
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                بارداری و شیردهی
              </button>
              <button
                onClick={() => setSelectedService('athletes')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedService === 'athletes'
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                ورزشکاران
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                        <IconComp size={28} />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">{service.desc}</p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <Check size={14} className="text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4">
                    <a
                      href="#order-form"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          dietType: service.title,
                        }));
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-50 hover:bg-emerald-700 text-slate-800 hover:text-white rounded-xl text-xs sm:text-sm font-bold transition-all border border-slate-200 hover:border-emerald-700 group-hover:bg-emerald-50 group-hover:text-emerald-900"
                    >
                      <span>دریافت این برنامه غذایی</span>
                      <ArrowLeft size={15} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT NILOOFAR NASSAJ SECTION ===================== */}
      <section id="about" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image & Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-tr from-emerald-100 via-teal-50 to-slate-100 p-2 border border-emerald-200 shadow-xl">
                  <img
                    src={niloofarImg}
                    alt="نیلوفر نساج"
                    className="w-full h-auto rounded-2xl object-contain bg-white"
                  />
                </div>

                <div className="absolute -bottom-6 -left-4 bg-emerald-900 text-white p-4 rounded-2xl shadow-xl border border-emerald-700 max-w-[240px]">
                  <p className="text-2xl font-black text-emerald-300">۷ سال</p>
                  <p className="text-xs text-emerald-100 mt-1 leading-snug">
                    سابقه در مراکز بهداشتی زیر نظر دانشگاه علوم پزشکی اصفهان
                  </p>
                </div>
              </div>
            </div>

            {/* Biography details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-emerald-700 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  رزومه و سوابق تخصصی
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
                  درباره من | نیلوفر نساج
                </h2>
                <p className="text-emerald-700 font-bold text-base mt-1">
                  متخصص تغذیه و رژیم‌درمانی با کد نظام پزشکی ت-۶۸۸۹
                </p>
              </div>

              <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-slate-800 font-medium">
                  «با سلام، من <strong>نیلوفر نساج</strong>، متخصص تغذیه و رژیم درمانی با کد نظام پزشکی ت_6889 هستم و با هفت
                  سال سابقه کار در مراکز بهداشتی استان اصفهان زیر نظر دانشگاه علوم پزشکی اصفهان، تاکنون حدود ۱۴ هزار نفر را
                  ویزیت کرده‌ام.»
                </p>

                <p>
                  این ویزیت‌ها شامل کودکان، نوجوانان، جوانان، میانسالان، سالمندان و به ویژه بیماران غیرواگیر (افراد مبتلا به
                  دیابت، فشار خون بالا، چربی خون بالا، کبد چرب و مشکلات متابولیک) بوده است. رویکرد من در فرنوت مبتنی بر
                  شنیدن صبورانه دغدغه‌های مراجعین، بررسی آنتروپومتری و آزمایشات و تنظیم برنامه غذایی علمی و متناسب با سفره
                  خانواده است.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>ارتباط چندتخصصی</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    در صورت نیاز، مراجعین را با روانشناس و مربی ورزش لینک می‌کنم تا از نظر روحی و بدنی پشتیبانی شوند.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>دانش به‌روز دانشگاهی</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    مطالعه مداوم مقالات علمی و دوره‌های آموزشی بین‌المللی جهت ارائه جدیدترین استانداردهای تغذیه.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>اختصاص زمان کافی</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    تنظیم برنامه اختصاصی بر اساس شرح حال، داروها، نتایج آزمایشات و ترجیحات غذایی هر فرد.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>انگیزش و همراهی مستمر</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    شنیدن باحوصله موانع و چالش‌ها و ارائه راهکارهای انگیزشی تا رسیدن به هدف نهایی سلامتی.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4-STEP PROCESS SECTION ===================== */}
      <section id="process" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/40 to-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-emerald-700 font-bold text-sm bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              مسیر ساده شما تا سلامتی
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              مراحل ارائه خدمات رژیم غذایی آنلاین فرنوت
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              از ثبت اطلاعات تا تثبیت وزن نهایی در ۴ مرحله علمی و بدون نیاز به مراجعه حضوری
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <span className="text-6xl font-black text-emerald-100 absolute top-2 left-4 select-none">۱</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  ۱
                </div>
                <h3 className="text-lg font-bold text-slate-900">مشاوره اولیه و تشکیل پرونده</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  ثبت مشخصات آنتروپومتری (قد، وزن، سن، دور مچ یا شکم)، بررسی سوابق بیماری، داروهای مصرفی و ارسال آزمایشات
                  اخیر.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <span className="text-6xl font-black text-emerald-100 absolute top-2 left-4 select-none">۲</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  ۲
                </div>
                <h3 className="text-lg font-bold text-slate-900">تنظیم رژیم و تجویز مکمل</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  طراحی علمی کالری و ماکروها بر پایه سفره خانواده، بدون حذف مواد غذایی مفید و در صورت نیاز تجویز مکمل‌های
                  تخصصی.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <span className="text-6xl font-black text-emerald-100 absolute top-2 left-4 select-none">۳</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  ۳
                </div>
                <h3 className="text-lg font-bold text-slate-900">آموزش و راهنمایی اجرا</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  ارائه جداول جایگزینی مواد غذایی، پاسخ به پرسش‌های شما، آموزش نحوه کنترل سهم غذا و راهکارهای مناسب مهمانی و
                  سفر.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <span className="text-6xl font-black text-emerald-100 absolute top-2 left-4 select-none">۴</span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  ۴
                </div>
                <h3 className="text-lg font-bold text-slate-900">پیگیری و ارزیابی مجدد</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  پایش هفتگی پیشرفت وزن و سایز، اصلاح نقاط ضعف رژیم، رفع استپ وزنی و همراهی تا تثبیت کامل وزن هدف.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ARTICLES / BLOG SECTION ===================== */}
      <section id="articles" className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-700 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              دانشنامه سلامت فرنوت
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              مقالات و آموزش‌های تخصصی تغذیه
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              مطالب علمی و کاربردی گردآوری‌شده توسط نیلوفر نساج جهت افزایش آگاهی جامعه نسبت به سلامت و تغذیه سالم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug hover:text-emerald-700 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(art)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors cursor-pointer"
                  >
                    <span>مطالعه کامل مقاله</span>
                    <ArrowLeft size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-fadeIn">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="بستن"
            >
              <X size={20} />
            </button>

            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {activeArticle.category}
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-3 leading-snug">
              {activeArticle.title}
            </h3>

            <div className="mt-6 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
              {activeArticle.fullText}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">نویسنده: نیلوفر نساج (کارشناس تغذیه فرنوت)</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                بستن پنجره
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== ORDER FORM SECTION ===================== */}
      <section id="order-form" className="py-16 lg:py-24 bg-gradient-to-b from-emerald-900 to-teal-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-800/80 px-3 py-1 rounded-full border border-emerald-700">
              شروع مسیر تحول سلامتی شما
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
              فرم آنلاین دریافت رژیم غذایی فرنوت
            </h2>
            <p className="text-emerald-200 mt-2 text-sm sm:text-base">
              اطلاعات زیر را تکمیل کنید تا پرونده تغذیه‌ای شما تشکیل شده و توسط نیلوفر نساج بررسی گردد.
            </p>
          </div>

          <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-800/40">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">درخواست شما با موفقیت ثبت گردید</h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                  با تشکر از اعتماد شما به کلینیک فرنوت. اطلاعات شما برای خانم <strong>نیلوفر نساج</strong> ارسال شد.
                  کارشناسان ما به زودی با شماره تماس <strong>{formData.phone}</strong> جهت هماهنگی تماس خواهند گرفت.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:09304585419"
                    className="inline-flex items-center gap-2 bg-emerald-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:bg-emerald-800 transition-colors"
                  >
                    <Phone size={16} />
                    <span>تماس فوری: ۰۹۳۰۴۵۸۵۴۱۹</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        dietType: 'تناسب اندام (کاهش/افزایش وزن)',
                        age: '',
                        height: '',
                        weight: '',
                        medicalCondition: '',
                        description: '',
                      });
                    }}
                    className="text-sm font-bold text-slate-500 hover:text-slate-800 px-4 py-3"
                  >
                    ثبت درخواست جدید
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      نام و نام خانوادگی <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: سارا محمدی"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      شماره تماس / موبایل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="مثال: 09123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">نوع رژیم درخواستی</label>
                    <select
                      value={formData.dietType}
                      onChange={(e) => setFormData({ ...formData, dietType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none font-medium"
                    >
                      <option value="تنظیم برنامه غذایی تناسب اندام">تناسب اندام (کاهش/افزایش وزن)</option>
                      <option value="تنظیم برنامه غذایی بیماری‌ها">بیماری‌ها (دیابت، کبد چرب، چربی...)</option>
                      <option value="تنظیم برنامه غذایی ورزشکاران">ورزشکاران و بدنسازی</option>
                      <option value="تنظیم برنامه غذایی خانم باردار">دوران بارداری</option>
                      <option value="تنظیم برنامه غذایی خانم شیرده">دوران شیردهی</option>
                      <option value="تنظیم برنامه غذایی کودک و نوجوان">کودک و نوجوان (رشد قدی)</option>
                      <option value="تنظیم برنامه غذایی سالمندان">سالمندان</option>
                      <option value="سایر موارد">سایر اهداف تغذیه‌ای</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">قد (سانتی‌متر)</label>
                    <input
                      type="number"
                      placeholder="مثال: 168"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-left"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">وزن فعلی (کیلوگرم)</label>
                    <input
                      type="number"
                      placeholder="مثال: 74"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    سابقه بیماری، مصرف داروی خاص یا حساسیت غذایی
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: کم‌کاری تیروئید، کبد چرب گرید ۱، مصرف لووتیروکسین و..."
                    value={formData.medicalCondition}
                    onChange={(e) => setFormData({ ...formData, medicalCondition: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    توضیحات تکمیلی و هدف شما
                  </label>
                  <textarea
                    rows={3}
                    placeholder="هر نکته‌ای که لازم است خانم نساج در تنظیم برنامه شما بداند (عادات غذایی، ساعات کاری و...)"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-700/25 transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={18} />
                    <span>ارسال اطلاعات و ثبت نوبت مشاوره</span>
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                    اطلاعات پزشکی شما کاملاً محرمانه بوده و مستقیماً توسط نیلوفر نساج بررسی خواهد شد.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION ===================== */}
      <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-700 font-bold text-sm bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              پاسخ به ابهامات شما
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3">سوالات متداول مراجعین</h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              پاسخ به سوالاتی که معمولاً مراجعین قبل از دریافت رژیم آنلاین می‌پرسند.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-800 hover:text-emerald-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={logoImg}
                  alt="فرنوت"
                  className="w-12 h-12 object-contain rounded-xl p-1 bg-white/10"
                />
                <div>
                  <h3 className="text-2xl font-black text-white">فرنوت (Farnut)</h3>
                  <p className="text-xs text-emerald-400 font-semibold">کلینیک تخصصی رژیم غذایی و سلامت</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                ارائه خدمات رژیم غذایی علمی و فردمحور توسط نیلوفر نساج، متخصص تغذیه با کد نظام پزشکی ت-۶۸۸۹ و ۷ سال سابقه
                در مراکز بهداشتی استان اصفهان.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/60 p-3 rounded-xl border border-emerald-900 w-fit">
                <Award size={16} />
                <span>عضو رسمی سازمان نظام پزشکی جمهوری اسلامی ایران</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white mb-2">دسترسی سریع</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    تنظیم برنامه غذایی تناسب اندام
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    برنامه غذایی کنترل دیابت و بیماری‌ها
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    رژیم بارداری و شیردهی
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                    محاسبه آنلاین شاخص توده بدنی
                  </a>
                </li>
                <li>
                  <a href="#articles" className="hover:text-emerald-400 transition-colors">
                    مقالات و دانستنی‌های تغذیه
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Address */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-sm font-bold text-white mb-2">اطلاعات تماس و نشانی</h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>اصفهان، خیابان ۲۲ بهمن، ساختمان اداری شهرک علمی و تحقیقاتی</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                  <a href="tel:09304585419" className="hover:text-white font-bold text-emerald-300" dir="ltr">
                    0930 45 85 419
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>پاسخگویی و مشاوره آنلاین: همه روزه از ۹ الی ۲۱</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© تمامی حقوق برای وب‌سایت فرنوت (نیلوفر نساج) محفوظ است.</p>
            <p className="text-slate-400 font-medium">طراحی با عشق برای ارتقای سلامت ایرانیان</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
