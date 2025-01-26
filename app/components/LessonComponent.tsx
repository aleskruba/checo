import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
  title: "Lekce / Clases",
  content: [
    { title: "Lekce 1", url: `${BASE_URL}/lesson/1` },
    { title: "Lekce 2", url: `${BASE_URL}/lesson/2` },
    { title: "Lekce 3", url: `${BASE_URL}/lesson/3` },
    { title: "Lekce 4", url: `${BASE_URL}/lesson/4` },
    { title: "Lekce 5", url: `${BASE_URL}/lesson/5` },
  ],
};

export function LessonComponent({ closeSheet }: { closeSheet: () => void }) {
  return (
    <SidebarMenu>
      {/* Use SidebarMenuSection component for each section */}
      <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
    </SidebarMenu>
  );
}
