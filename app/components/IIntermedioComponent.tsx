import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
  title: "Mírně pokročilý / Intermedio ",
  content: [
    { title: "Próximamente disponible...", url: `${BASE_URL}/intermedio/1` },

    
  ],
};

export function IntermedioComponent({ closeSheet }: { closeSheet: () => void }) {
  return (
    <SidebarMenu>
      {/* Use SidebarMenuSection component for each section */}

      <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
 </SidebarMenu>
  );
}
