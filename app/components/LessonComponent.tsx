import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
  title: "Principiantes I ",
  content: [
    { title: "Introducción", url: `${BASE_URL}/lesson/1` },
    { title: "Números y palabras básicas", url: `${BASE_URL}/lesson/2` },
    { title: 'El verbo "být"', url: `${BASE_URL}/lesson/3` },
    { title: "Eso es + Vocabulario ", url: `${BASE_URL}/lesson/4` },
    { title: "Caracteres especiales", url: `${BASE_URL}/lesson/5` },
    { title: "Introducción a los adjetivos", url: `${BASE_URL}/lesson/6` },
    { title: "Los posesivos básicos", url: `${BASE_URL}/lesson/7` },
    { title: "Los plurales/sustantivos", url: `${BASE_URL}/lesson/8` },
    { title: "Los plurales/sustantivos II", url: `${BASE_URL}/lesson/9` },
    { title: 'El verbo "mít" + acusativo', url: `${BASE_URL}/lesson/10`},
    { title: 'El verbo "vidět" + acusativo', url: `${BASE_URL}/lesson/11`},
    { title: 'Verbos que usan el acusativo', url: `${BASE_URL}/lesson/12` },

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
