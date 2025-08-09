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
        borderTopColor: "#88888848",
      }}
      className="md:w-full border-solid border z-50"
    >
      <Navbar
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="container mx-auto py-0 px-0 lg:py-4 bg-transparent shadow-none backdrop-filter-none border-none rounded-none "
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="text"
            color="blue-gray"
            className="lg:hidden py-0 px-2 border-0 text-[#db0962]"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse
          open={openNav}
          className="absolute top-[145px] right-5 z-50 w-2/3 bg-black/90 text-white rounded-md shadow-lg border-0"
        >
          <div className="p-2">
            <NavList />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
