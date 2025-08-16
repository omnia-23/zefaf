import React from "react";
import { Typography, List, ListItem } from "@material-tailwind/react";
import Image from "next/image";
import { DropDownItem } from "./DropDownItem";
import {
  Bars4Icon,
  SquaresPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon } from "lucide-react";

const navListItems = [
  {
    id: 1,
    title: "الرئيسية",
    url: "/",
    icon: "/images/nav/gps.svg",
    isDropDown: false,
    subMenu: [],
  },
  {
    id: 2,
    title: "قاعات الزفاف",
    url: "/wedding-venues",
    icon: "/images/nav/wedding-invitation.svg",
    isDropDown: true,
    subMenu: [
      {
        title: "قصور الأفراح",
        description: "Find the perfect solution for your needs.",
        icon: <SquaresPlusIcon className="w-5 h-5" />,
        image: "/images/bannerEachPage.png",
        link: "/halls",
      },
      {
        title: "قاعات الفنادق",
        description: "Meet and learn about our dedication",
        icon: <UserGroupIcon className="w-5 h-5" />,
        image: "/images/banner.png",
        link: "/hotels",
      },
      {
        title: "استراحات الزفاف",
        description: "Find the perfect solution for your needs.",
        icon: <Bars4Icon className="w-5 h-5" />,
        image: "/images/1440×1024.png",
        link: "/resorts",
      },
    ],
  },
  {
    id: 3,
    title: "خدمات الافراح",
    url: "/wedding-services",
    icon: "/images/nav/group.svg",
    isDropDown: true,
    subMenu: [
      {
        title: "فساتين الزفاف والازياء",
        icon: <HeartIcon className="w-5 h-5" />,
        link: "/wedding-services/dresses",
      },
      {
        title: "الاكسسوارات",
        icon: <HeartIcon className="w-5 h-5" />,
        link: "/wedding-services/accessories",
      },
      {
        title: "الديكور",
        icon: <HeartIcon className="w-5 h-5" />,
        link: "/wedding-services/decor",
      },
      {
        title: "تنظيم الزفاف",
        icon: <HeartIcon className="w-5 h-5" />,
        link: "/wedding-services/planning",
      },
    ],
  },
  {
    id: 4,
    title: "صحة العروسين",
    url: "/bride-groom-health",
    icon: "/images/Health.svg",
    isDropDown: true,
    subMenu: [
      {
        title: "التجميل والعناية",
        icon: <HeartIcon className="w-5 h-5" />,
        link: "/health",
      },
      {
        title: "الشعر والمكياج",
        icon: <HeartIcon className="w-5 h-5" />,
        link: "/health",
      },
      {
        title: "نقش حناء",
        icon: <HeartIcon className="w-5 h-5" />,
        link: "/health",
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "اكتشف",
  //   url: "/discover",
  //   icon: "/images/nav/gps.svg",
  //   isDropDown: false,
  //   subMenu: [],
  // },
  {
    id: 6,
    title: "عروض خاصة",
    url: "/special-offers",
    icon: "/images/discount-2.svg",
    isDropDown: false,
    subMenu: [],
  },
  {
    id: 7,
    title:  "اتصل بنا",
    url: "/plan-your-wedding",
    icon: "/images/nav/wedding-rings.svg",
    isDropDown: false,
    subMenu: [],
  },
  {
    id: 8,
    title: "المقالات",
    url: "/blogs",
    icon: "/images/discount-2.svg",
    isDropDown: false,
    subMenu: [],
  },
  {
    id: 9,
    title: "من نحن",
    url: "/contactus",
    icon: "/images/nav/gps.svg",
    isDropDown: false,
    subMenu: [],
  },
];

export function NavList() {
  return (
    <List
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      className="mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 !font-bold"
    >
      {navListItems.map(
        ({ id, title, url, icon, isDropDown, subMenu }, key) => (
          <>
            {isDropDown ? (
              <DropDownItem
                title={title}
                starterIcon={icon}
                mainLink={url}
                subMenu={subMenu}
              />
            ) : (
              <Typography
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                as="a"
                href={url}
                key={key}
                variant="small"
                color="blue-gray"
                className="font-noto !font-bold text-black !bg-transparent !hover:bg-transparent"
              >
                <ListItem
                  key={id}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  className="flex items-center gap-2 py-2 pr-4 !bg-transparent text-black hover:text-[#db0962]"
                >
                  <Image
                    width={24}
                    height={24}
                    src={icon}
                    alt={title}
                    className="w-6 h-6"
                  />
                  {title}
                </ListItem>
              </Typography>
            )}
          </>
        )
      )}
    </List>
  );
}
