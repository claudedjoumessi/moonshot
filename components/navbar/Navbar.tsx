import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ShareIcon, Ellipsis } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 backdrop-blur-2xl">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <span>Moonshot Assist</span>
      </div>
      <div className="flex items-center gap-2 px-4">
        <Button className="text-foreground bg-transparent hover:bg-neutral-700 rounded-xl">
          <ShareIcon />
          <span className="">Share</span>
        </Button>
        <Button
          size={"icon"}
          className="text-foreground bg-transparent hover:bg-neutral-700 rounded-full"
        >
          <Ellipsis />
          <span className="sr-only">Options</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
