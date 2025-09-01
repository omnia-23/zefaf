"use client";
import React from "react";
import HeaderSection from "@/components/Pages/Halls/HeaderSection";
import { RenderHTML } from "@/components/shared";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  // const { hall, isLoading, error } = useHall(slug);
  // const [isOpen, setIsOpen] = useState(false);

  console.log({ slug: params.slug });
  const article = {
    id: 1,
    title: "لوريوم ابيسوم",
    description: `
    <div class="article-desc" style="font-family: 'Noto Naskh Arabic', serif; direction: rtl; color: #1f2937;">
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;  color: #db0962">
        لوريم إيبسوم هو ببساطة نص وهمي في صناعة الطباعة والتنضيد، يستخدم لملء الفراغات أثناء التصميم.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        يعود تاريخ استخدام لوريم إيبسوم إلى قرون، وقد أصبح معياراً في النماذج والطباعة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        يتيح لوريم إيبسوم للمصممين تقييم الشكل البصري دون التشتت بالمحتوى الفعلي.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        يمكن تعديل طول النص وعدد الفقرات لتجربة تخطيطات متعددة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        استخدام الوسوم داخل الفقرات يساعد في اختبار نمط العناوين والروابط والصور.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        <strong>لوريم إيبسوم</strong> يُستخدم أيضاً لاختبار تنسيقات الخطوط واتساقها عبر المتصفحات.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        تحتوي هذه الفقرة على نص تجريبي يظهر كيف سيبدو المحتوى العربي في الواجهة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        عند تصميم المقالات، يُفضل تقسيم النص إلى فقرات قصيرة لسهولة القراءة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        يمكن وضع روابط داخل النص لتوجيه القارئ إلى مصادر إضافية عند الحاجة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        تُستخدم الأنماط (CSS) لتحسين المسافات وحجم الخط ولون النص بما يناسب هوية الموقع.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        تم تصميم هذا النص ليكون مثالاً عملياً على وصف مقال طويل باللغة العربية.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        <em>هذا السطر مائل</em> لإظهار كيف يظهر النص المائل داخل الفقرة العربية.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        إضافة تمييز باستخدام &lt;mark&gt; توضح أجزاء مهمة من المحتوى بسرعة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        تباين الألوان بين العناوين والنص يزيد من قابلية القراءة والانتقال البصري.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        عند كتابة محتوى طويل، استخدم عناوين فرعية لتقسيم الفقرات ونقاط رئيسية.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        النص الوهمي لا يعبر عن أفكار حقيقية لكنه مفيد لاختبار الشكل والهيكل.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        <code style="background:#f3f4f6; padding:0.1rem 0.3rem; border-radius:4px;">مثال كود</code> يظهر كيفية تضمين شظايا برمجية داخل المقال.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        يمكن إضافة صور مع تعليق توضيحي لشرح النقاط المهمة بصريًا.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        جودة الخطوط وحجمها تؤثر بشكل كبير على تجربة القراءة للمستخدم العربي.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        هذه الجملة تبين كيف تتدفق الكلمات العربية من اليمين إلى اليسار بشكل طبيعي.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        استخدم فواصل منطقية بين الفقرات لتقليل إجهاد القارئ وزيادة الفهم.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        عند الحاجة، ضع ملخصًا قصيرًا في بداية المقال لتوجيه القارئ بسرعة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        في هذا السطر نذكر أن الألوان اللطيفة وخط القراءة السهل يحسن التفاعل.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        يمكن تجربة طول السطر (max-width) لتحديد أفضل عرض للنص العربي.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        استخدم قوائم نقطية لعرض المميزات أو الخطوات بشكل منظم وسريع.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        هذا السطر يوضح أهمية استخدام فواصل وعناوين قوية داخل المقال.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        جرب مسافات داخلية (padding) مناسبة لعناصر البلوكات لتحسين المظهر.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        عند تضمين اقتباسات استخدم &lt;blockquote&gt; مع تنسيق واضح لتمييزها.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        هذا السطر يدعو المصمم لتجربة الخطوط المفضلة للجمهور المستهدف.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        تأكد من توافق النص مع الشاشات الصغيرة عبر اختبارات الاستجابة (responsive).
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        اللغة العربية تحتاج عناية خاصة في التشكيل والمواءمة بين الأسطر.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        يمكن استخدام أيقونات صغيرة مع النص للإشارة إلى ملاحظات أو تنبيهات.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        هذا السطر يعرض مثالًا على تكرار نمط الفقرة للحفاظ على التناسق البصري.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        اعمل على تقصير الفقرات الطويلة لتجنب فقدان انتباه القارئ.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        استخدم روابط داخلية لربط أجزاء المقال ببعضها لسهولة التصفح.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        يمكن إضافة جدول محتويات آلي لسهولة التنقل داخل المقالات الطويلة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        التدرج الهرمي للعناوين يساعد القارئ على فهم بنية الموضوع بسرعة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        هذا السطر ينهي مجموعة الفقرات بتأكيد على أن لوريم إيبسوم أداة تصميم مفيدة.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        عند نشر المقال، تحقق من تباين الألوان لضمان إمكانية القراءة لضعاف البصر.
      </p>
      <p style="margin:0 0 0.75rem; line-height:1.8; font-size:16px;">
        أخيرًا، قم بمراجعة النص وتجربته عبر متصفحات وأجهزة متعددة قبل الإطلاق.
      </p>
      </div>
      `,
    image: "/images/Frame 18 (1).svg",
    slug: "slug-1",
  };

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  // if (error) {
  //   return <ErrorMessage message="Failed to load hall details" />;
  // }

  // if (!hall) {
  //   return <ErrorMessage message="Hall not found" />;
  // }

  return (
    <div>
      <HeaderSection
        title={article.title}
        // description={hall.description}
        breadcrumbs={[
          { label: "الرئيسية", href: "/" },
          { label: "اكتشف", href: "/مقالات" },
          { label: article.title, href: `/مقالات/${params.slug}` },
        ]}
      />

      <div className="container mx-auto px-4 py-10">
        {/* Main content area */}

        <RenderHTML
          seeAll={true}
          htmlContent={article.description}
          seeMore={false}
        />
      </div>
    </div>
  );
}
