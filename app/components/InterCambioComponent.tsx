import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";
import { FaYoutube } from "react-icons/fa";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
    title: "INTERCAMBIO",
    content: [
      {
        title: "Informaciones",
        url: `${BASE_URL}/intercambio`,
        icon: <FaYoutube className="w-5 h-5 text-red-600" />,
      },
    ],
  };

export function InterCambioComponent({ closeSheet }: { closeSheet: () => void }) {
  return (
    <SidebarMenu>
      {/* Use SidebarMenuSection component for each section */}
 
      <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
      

    </SidebarMenu>
  );
}