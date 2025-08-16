import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import { Quote } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
export default function AboutUs() {
  interface Testimonial {
    title: string;
    description: string;
    author: string;
    image: string;
  }

  const testimonials: Testimonial[] = [
    {
      title: "خدمة جدا جدا",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي لصناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو ببساطة نص وهمي لصناعة الطباعة والتنضيد.",
      author: "ساره باسم",
      image: "/images/sara.png",
    },
    {
      title: "إنها تجربة حقا مميزة",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي لصناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو ببساطة نص وهمي لصناعة الطباعة والتنضيد.",
      author: "ساره باسم",
      image: "/images/sara.png",
    },
    {
      title: "خدمة جدا جدا",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي لصناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم هو ببساطة نص وهمي لصناعة الطباعة والتنضيد.",
      author: "ساره باسم",
      image: "/images/sara.png",
    },
  ];

  const aboutus = [
    {
      title: "هدفنا",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم",
    },
    {
      title: "مهمتنا",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم",
    },
    {
      title: "مبادئنا",
      description:
        "لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم لوريم إيبسوم هو ببساطة نص وهمي صناعة الطباعة والتنضيد. لقد كان لوريم",
    },
  ];
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          {aboutus.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-md bg-[#FDF3F7] p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-1 mb-4">
                  <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
                  <h2 className="text-[color:var(--Primary,#DB0962)] text-xl font-medium">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </h2>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="my-20">
          <div className="flex items-center gap-1 mb-4">
            <span className="w-6 h-[5px] rounded-lg bg-[color:var(--Primary,#DB0962)]"></span>
            <h2 className="text-black text-xl font-medium">كيف بدأ زفاف.نت؟</h2>
          </div>

          <div className="my-4 text-lg">
            <p>
              زفاف.نت هو الإصدار العربي لمجموعة بيرادور العالمية المالكة لأكبر
              موقعين في عالم التخطيط للزفاف في كلّ من المانيا و تركيا. وكان لابد
              من نقل هذه التجربة المميزة للعالم العربي, فكان زفاف.نت الذي بدأ
              عام 2015 و استقطب مئات الآلاف من المقبلين على الزواج حتى هذه
              اللحظة, وأصبح الدليل الأول لخدمات الزفاف في الوطن العربي والوحيد
              الذي يتيح للزوار التصفح عبر الويب و الموبايل أيضاً.
            </p>
            <p>
              زفاف.نت اليوم هو دليل تخطيط حفلات الزفاف الرائد في الشرق الأوسط
              وشمال أفريقيا. يستطيع العرسان استكشاف المئات من مزودي خدمات الزفاف
              في مدنهم والتواصل معهم مباشرة بطريقة بسيطة ومريحة للحصول على أفضل
              الأسعار والعروض.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/aboutus.png"
              alt="about-us"
              width={600}
              height={486}
              className="w-full max-h-[460px] object-cover object-center rounded-lg"
            />
          </div>
        </div>

        <div className="py-12 bg-white" dir="rtl">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                آراء عملائنا المميزين
              </h2>
              <p className="text-gray-600 mt-2">
                استمع إلى تجارب عملائنا الذين يشاركون رضاهم عن خدماتنا المميزة
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-[#FDF3F7] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  {/* Quote Icon */}
                  <div className="text-[color:var(--Primary,#DB0962)] text-4xl mb-4">
                    <Quote />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-6">
                    <Image
                      src={item.image}
                      alt={item.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-semibold text-gray-900">
                      {item.author}
                    </span>
                  </div>
                </div>
              ))}
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
