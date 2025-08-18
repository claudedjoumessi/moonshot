import ChatInput from "@/components/chat/ChatInput";
import MessageStack from "@/components/chat/MessageStack";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { fakeMessages } from "@/constants";
import { Ellipsis, ShareIcon } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
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
            <Button size={"icon"} className="text-foreground bg-transparent hover:bg-neutral-700 rounded-full">
              <Ellipsis />
              <span className="sr-only">Options</span>
            </Button>
          </div>
        </header>
        <div className="w-full h-full flex justify-center">
          <div className="relative w-full md:max-w-2xl max-w-lg mx-4 mb-5">
            <section className="w-full h-full flex flex-col gap-y-5">
              <MessageStack messages={fakeMessages} />
            </section>
            <section className="absolute bottom-0 left-0 w-full">
              <ChatInput />
            </section>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
