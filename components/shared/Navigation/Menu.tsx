import React from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavList } from "./NavList";

export function MainMenuDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div
      style={{
        borderColor: "#88888848",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "transparent",
      }}
      className="w-full border-solid border z-50"
    >
      <Navbar
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="container mx-auto px-0 py-6 bg-transparent shadow-none backdrop-filter-none border-none rounded-none "
      >
        <div className="container mx-auto flex items-center justify-between ">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse className="" open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
