// components/FeaturesSection.tsx
import { FaAngleRight, FaFastForward } from "react-icons/fa";
import { GiPartyPopper, GiLoveLetter, GiNotebook } from "react-icons/gi";
import { MdChecklist, MdDiversity3 } from "react-icons/md";

type Feature = {
  title: string;
  icon: JSX.Element;
  link: string;
};

const features: Feature[] = [
  {
    title: "سهولة الوصول",
    icon: <FaFastForward className="text-3xl text-pink-600" />,
    link: "https://zafaf.sa/",
  },
  {
    title: "التواصل السريع",
    icon: <GiPartyPopper className="text-3xl text-pink-600" />,
    link: "#",
  },
  {
    title: "خيارات متنوعة",
    icon: <MdDiversity3 className="text-3xl text-pink-600" />,
    link: "#",
  },
  {
    title: "مساعدة خبراء الزفاف",
    icon: <MdChecklist className="text-3xl text-pink-600" />,
    link: "#",
  },
  {
    title: "حلول شاملة",
    icon: <GiNotebook className="text-3xl text-pink-600" />,
    link: "#",
  },
  {
    title: "حجز مباشر",
    icon: <GiLoveLetter className="text-3xl text-pink-600" />,
    link: "#",
  },
];

export default function FeaturesSection() {
  return (
    // bg-[#FDF3F7]
    <section className=" lg:min-h-[500px] flex flex-col justify-center">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          مزايا عالم زفاف
        </h1>
        <h4 className="text-lg text-gray-500">
          نحن هنا لجعل تخطيط حفل زفافك أسهل وأمتع.
        </h4>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center group"
          >
            <a
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-pink-500 mb-3 transition-transform group-hover:scale-110"
            >
              {feature.icon}
            </a>
            <span className="text-gray-700 font-medium">{feature.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
