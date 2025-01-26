import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
  title: "Dialogy / Diálogos ",
  content: [
    { title: "conversation 1", url: `${BASE_URL}/dialog/1` },
    { title: "conversation 2", url: `${BASE_URL}/dialog/2` },
    { title: "conversation 3", url: `${BASE_URL}/dialog/3` },
    { title: "conversation 4", url: `${BASE_URL}/dialog/4` },
    { title: "conversation 5", url: `${BASE_URL}/dialog/5` },
  ],
};

export function DialogComponent({ closeSheet }: { closeSheet: () => void }) {
  return (
    <SidebarMenu>
      {/* Use SidebarMenuSection component for each section */}
      <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
    </SidebarMenu>
  );
}
