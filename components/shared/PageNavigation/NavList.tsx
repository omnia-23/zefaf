import React from "react";
import { Typography, List, ListItem } from "@material-tailwind/react";
import Image from "next/image";
import { DropDownItem } from "./DropDownItem";

const navListItems = [
  {
    id: 1,
    title: "الرئيسية",
    url: "/",
    icon: "/images/navbar/navbar-black-4.svg",
    isDropDown: false,
    subMenu: [],
  },
  {
    id: 2,
    title: "قاعات الزفاف",
    url: "/wedding-venues",
    icon: "/images/navbar/navbar-black-1.svg",
    isDropDown: true,
    subMenu: [],
  },
  {
    id: 3,
    title: "خدمات الافراح",
    url: "/wedding-services",
    icon: "/images/navbar/navbar-black-2.svg",
    isDropDown: true,
    subMenu: [],
  },
  {
    id: 4,
    title: "صحة العروسين",
    url: "/bride-groom-health",
    icon: "/images/navbar/navbar-black-3.svg",
    isDropDown: true,
    subMenu: [],
  },
  {
    id: 5,
    title: "اكتشف",
    url: "/discover",
    icon: "/images/navbar/navbar-black-4.svg",
    isDropDown: true,
    subMenu: [],
  },
  {
    id: 6,
    title: "عروض خاصة",
    url: "/special-offers",
    icon: "/images/navbar/navbar-black-5.svg",
    isDropDown: false,
    subMenu: [],
  },
  {
    id: 7,
    title: "خطط لحفل زفافك",
    url: "/plan-your-wedding",
    icon: "/images/navbar/navbar-black-6.svg",
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
      {navListItems.map(({ id, title, url, icon, isDropDown }, key) => (
        <>
          {isDropDown ? (
            <DropDownItem title={title} starterIcon={icon} mainLink={url} />
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
      ))}
    </List>
  );
}
