import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import Head from "next/head";
import Image from "next/image";
import { FaRibbon, FaHandshake, FaHeart } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>عالم زفاف - من نحن</title>
        <meta
          name="description"
          content="تعرف على عالم زفاف ورسالتنا لخدمة المقبلين على الزواج"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <HeaderSection
        title="من نحن"
        description="في عالم زفاف، نصنع أحلام الزفاف حقيقة. نقدم تجربة استثنائية تجمع بين الأصالة والحداثة لنسهل رحلتكم نحو ليلة العمر."
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "من نحن", href: "/about-us" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <Image
                src="/images/aboutus.png"
                alt="عالم زفاف من نحن"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#DB0962]/10 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold text-[#2E2E2E] leading-tight">
              نصنع لحظات <span className="text-[#DB0962]">تبقى للأبد</span>
            </h1>

            <div className="space-y-6 text-[#555] leading-relaxed text-lg">
              <p>
                عالم زفاف هو منصة رائدة في المملكة العربية السعودية، تأسس برؤية
                واضحة لتحويل تجربة التخطيط للزفاف من مهمة معقدة إلى رحلة سلسة
                وممتعة. نربط بين العرسان وأفضل مزودي خدمات الزفاف بلمسة من
                الابتكار والجودة.
              </p>

              <p>
                نؤمن بأن كل تفصيل في حفل الزفاف يحمل قصة، ونسعى جاهدين لنجعل
                قصتكم فريدة كما تستحقون. من خلال أدواتنا الذكية وخبراتنا
                الواسعة، نوفر لكم كل ما تحتاجونه لتحقيق حفل زفاف أحلامكم.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#FFF0F5] z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-8 text-center">
              قصتنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6 text-[#555] leading-relaxed text-lg">
                <p>
                  بدأت رحلتنا عام 2015 بفريق صغير من خبراء التخطيط للزفاف
                  والمطورين التقنيين الذين لاحظوا التحديات التي تواجه العرسان في
                  البحث عن خدمات الزفاف المناسبة.
                </p>
                <p>
                  اليوم، نحن فخورون بأننا أصبحنا المنصة الأكثر ثقة في السعودية
                  لتخطيط الزفاف، حيث ساعدنا أكثر من 50,000 عريس وعروسة في تحقيق
                  حفل زفافهم المثالي.
                </p>
              </div>
              <div className="space-y-6 text-[#555] leading-relaxed text-lg">
                <p>
                  نتميز بشبكة واسعة من الشراكات مع أفضل الفنادق والقاعات ومزودي
                  الخدمات في المملكة، مع ضمان الجودة والموثوقية في كل تفصيل
                  نقدمه لكم.
                </p>
                <p>
                  فريقنا من الخبراء يعمل دائماً على تطوير أدوات وخدمات جديدة
                  لتسهيل كل خطوة من رحلتكم، بدءاً من التخطيط وحتى ليلة الحفل.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#2E2E2E] mb-16 text-center">
            ما يميزنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#DB0962]">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-4xl text-[#DB0962]">
                  <FaRibbon />
                </div>
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                  الرؤية
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الوجهة الأولى للزفاف في المنطقة، بإعادة تعريف تجربة
                  التخطيط للزفاف عبر حلول رقمية مبتكرة تواكب رؤية 2030.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#8B5A2B]">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-4xl text-[#8B5A2B]">
                  <FaHandshake />
                </div>
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                  الرسالة
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  تمكين العرسان من اتخاذ قرارات واثقة عبر منصة شاملة توفر
                  الشفافية، التنوع، والجودة في كل خدمة نقدمها.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#E83E8C]">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-4xl text-[#E83E8C]">
                  <FaHeart />
                </div>
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                  قيمنا
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  الأصالة، الإبداع، الشغف، والتميز. نضع تجربة العميل أولاً ونسعى
                  لتحقيق أعلى معايير الجودة في كل تفصيل.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Help */}
        <div className="bg-gradient-to-r from-[#FFF0F5] to-[#F8F4FF] rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-[#2E2E2E] mb-8 text-center">
            كيف نساعدكم؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-[#DB0962] mb-6">
                للعرسان
              </h3>
              <ul className="space-y-4 text-[#555]">
                <li className="flex items-start gap-3">
                  <span className="text-[#DB0962] font-bold">✓</span>
                  <span>منصة واحدة لكل احتياجات زفافكم</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DB0962] font-bold">✓</span>
                  <span>أدوات ذكية لمقارنة الأسعار والتقييمات</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DB0962] font-bold">✓</span>
                  <span>حجوزات مباشرة مع أفضل مزودي الخدمات</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DB0962] font-bold">✓</span>
                  <span>نصائح وإرشادات من خبراء الزفاف</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DB0962] font-bold">✓</span>
                  <span>عروض حصرية وتخفيضات خاصة لأعضائنا</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#8B5A2B] mb-6">
                لمزودي الخدمات
              </h3>
              <ul className="space-y-4 text-[#555]">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5A2B] font-bold">✓</span>
                  <span>منصة لعرض خدماتكم على آلاف العرسان</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5A2B] font-bold">✓</span>
                  <span>أدوات تسويقية متقدمة لزيادة الحجوزات</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5A2B] font-bold">✓</span>
                  <span>نظام إدارة حجوزات متكامل</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5A2B] font-bold">✓</span>
                  <span>تحليلات وأبحاث سوقية لخدمات الزفاف</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5A2B] font-bold">✓</span>
                  <span>فرص للتواصل مع شركاء جدد في المجال</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-6">
            مستعدون لبدء رحلتكم معنا؟
          </h2>
          <p className="text-xl text-[#555] mb-8 max-w-2xl mx-auto">
            سواء كنتم عروسين تبحثون عن خدمات زفاف، أو مزود خدمة تريدون الوصول
            إلى آلاف العملاء، عالم زفاف هو شريككم المثالي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#DB0962] hover:bg-[#C40856] text-white font-bold py-3 px-8 rounded-full transition duration-300">
              تصفح القاعات
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#DB0962] font-bold py-3 px-8 rounded-full border border-[#DB0962] transition duration-300">
              انضم كمزود خدمة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
