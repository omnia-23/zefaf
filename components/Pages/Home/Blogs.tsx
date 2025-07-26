"use client";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PopularArticles = () => {
  // const articles = [
  //     {
  //         id: 1,
  //         title: "عنوان المقال الأول",
  //         content:
  //             "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي.",
  //         image: "https://crm.zafaf.sa/public/sample-image-1.jpg",
  //     },
  //     {
  //         id: 2,
  //         title: "عنوان المقال الثاني",
  //         content:
  //             "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي.",
  //         image: "https://crm.zafaf.sa/public/sample-image-2.jpg",
  //     },
  //     {
  //         id: 3,
  //         title: "عنوان المقال الثالث",
  //         content:
  //             "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي.",
  //         image: "https://crm.zafaf.sa/public/sample-image-3.jpg",
  //     },
  //     {
  //         id: 4,
  //         title: "عنوان المقال الرابع",
  //         content:
  //             "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي.",
  //         image: "https://crm.zafaf.sa/public/sample-image-4.jpg",
  //     },
  // ];

  const { data } = useSWR("https://zafaf.sa/public/api/minBlog", fetcher);
  // console.log(data);
  console.log(data, "ALL");
  return (
    <section className="container mx-auto  lg:px-8 flex flex-col items-start gap-20 self-stretch py-[120px] text-black">
      {/* Section Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="w-6 h-[5px] rounded-lg bg-[#DB0962]"></span>
          <p className="text-[#221F20] text-2xl font-bold leading-normal">
            أشهر المقالات
          </p>
        </div>
        <p className="text-[#555] text-right text-base font-normal leading-[normal]">
          اكتشف أشهر المقالات على عالم زفاف، من نصائح تنسيق الزفاف وأحدث صيحات
          الموضة إلى أفكار إبداعية لضمان يوم زفاف لا يُنسى.{" "}
        </p>
      </div>

      {/* Articles Grid */}
      <div
        className="w-full
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6"
      >
        {data?.map((article) => (
          <div key={article.id} className="w-full h-[460px] relative">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {/* Image with overlay */}
              <img
                className="w-full h-full object-cover"
                src={article.image}
                alt={article.title}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Article details overlay */}
              <div className="absolute bottom-0 p-4 w-full text-white bg-gradient-to-t from-black to-transparent">
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>

                {/* Content Preview */}
                <p className="text-sm mb-4 line-clamp-3">
                  {/* {article.content} */}
                </p>

                {/* Button to view full article */}
                <a
                  href={`/blogs/${article.id}`}
                  className="bg-[#DB0962] text-white py-2 px-4 rounded-full inline-block hover:bg-[#B4296E] transition-colors duration-300 text-center"
                >
                  اقرأ المزيد
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularArticles;
