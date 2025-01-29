import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
  title: "Lekce / Clases",
  content: [
    { title: "Frases básicas I", url: `${BASE_URL}/lesson/1` },
    { title: "Frases básicas II", url: `${BASE_URL}/lesson/2` },
    { title: 'El verbo "být"', url: `${BASE_URL}/lesson/3` },
    { title: "Vocabulario básico", url: `${BASE_URL}/lesson/4` },
    { title: "Caracteres especiales", url: `${BASE_URL}/lesson/5` },
    { title: "Vocabulario Casa/Colores", url: `${BASE_URL}/lesson/6` },
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
