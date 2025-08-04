import React from "react";
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  SquaresPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useWindowWidth } from "@react-hook/window-size";

const HallsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#fff"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

export const navListMenuItems = [
  {
    title: "قصور الأفراح",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    image: "/images/bannerEachPage.png",
    link: "/halls",
  },
  {
    title: "الفنادق",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    image: "/images/banner.png",
    link: "/hotels",
  },
  {
    title: "الاستراحات",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    image: "/images/1440×1024.png",
    link: "/resorts",
  },
  {
    title: "قاعات الزفاف",
    description: "Find the perfect solution for your needs.",
    icon: HallsIcon,
    image: "/images/1440×1024.png",
    link: "/wedding-venues",
  },
];

export function DropDownItem({
  title = "Contact Us",
  starterIcon,
  mainLink = "#",
}: {
  title?: string;
  starterIcon?: string;
  mainLink?: string;
}) {
  // const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(navListMenuItems[0]);
  const onlyWidth = useWindowWidth();

  // console.log({ onlyWidth });
  // React.useEffect(() => {
  //     window.addEventListener(
  //         "resize",
  //         () => window.innerWidth <= 960 && setIsSmallScreen(true)
  //     );
  // }, []);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <a href={link} key={key}>
        <MenuItem
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          onMouseEnter={() => {
            if (onlyWidth > 960) {
              setSelectedItem(navListMenuItems[key]);
            }
          }}
          onMouseLeave={() => {
            if (onlyWidth > 960) {
              setSelectedItem(navListMenuItems[0]);
            }
          }}
          className={`flex items-center gap-3 p-0 rounded-lg font-bold text-[#db0962] hover:bg-gray-200 ${
            selectedItem.title === title ? (onlyWidth > 960 ? "" : " ") : ""
          }`}
        >
          <div className="flex items-center justify-center rounded-lg p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: `h-6 w-6 text-white
                // onlyWidth > 960 ? "text-gray-900" : "text-white"
              }
                                  `,
            })}
          </div>
          <div>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="h6"
              color="blue-gray"
              className={`font-noto flex items-center text-sm font-bold ${
                onlyWidth > 960 ? "text-white" : "text-white"
              }`}
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <div>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        // allowHover={onlyWidth > 960}
        offset={{ mainAxis: 20 }}
        placement="bottom"
      >
        <MenuHandler className="">
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="small"
            className="font-noto font-medium text-white !bg-transparent !hover:bg-transparent outline-none border-none"
          >
            <ListItem
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="font-noto flex items-center gap-2 py-2 pr-4 !bg-transparent  text-white hover:text-[#db0962] outline-none border-none"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {starterIcon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={starterIcon} alt={title} className="w-6 h-6" />
              )}

              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          className="hidden bg-black/50 border-0 rounded-xl lg:block container w-fit"
        >
          <ul className="flex flex-col gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </div>
  );
}

// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description }, key) => (
//       <a href="#" key={key}>
//         <MenuItem
//           placeholder=""
//           onPointerEnterCapture={() => {}}
//           onPointerLeaveCapture={() => {}}
//           className="flex items-center  gap-3 rounded-lg"
//         >
//           <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50">
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//               variant="h6"
//               className="flex items-center !text-black text-sm font-bold"
//             >
//               <span className="!text-red-300">{title}</span>
//             </Typography>
//             <Typography
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//               variant="paragraph"
//               className="text-xs !font-medium "
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );

//   return (
//     <div>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//       >
//         <MenuHandler>
//           <Typography
//             placeholder=""
//             onPointerEnterCapture={() => {}}
//             onPointerLeaveCapture={() => {}}
//             as="div"
//             variant="small"
//             className="font-medium"
//           >
//             <ListItem
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//               className="flex items-center gap-2 py-2 pr-4 font-bold text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Resources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList
//           placeholder=""
//           onPointerEnterCapture={() => {}}
//           onPointerLeaveCapture={() => {}}
//           className="hidden rounded-xl lg:block container w-full"
//         >
//           <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </div>
//   );
// }
