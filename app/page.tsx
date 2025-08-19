import ChatArea from "@/components/chat/ChatArea";
import Navbar from "@/components/navbar/Navbar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <ChatArea />
      </SidebarInset>
    </SidebarProvider>
  );
}
