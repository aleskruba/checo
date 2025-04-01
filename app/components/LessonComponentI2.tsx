import { SidebarMenu } from "@/components/ui/sidebar";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Menu items
const items = {
  title: "Principiantes II ",
  content: [
    { title: "La conjugación de los verbos", url: `${BASE_URL}/lesson/13` },
    { title: "Verbos - chtít, potřebovat", url: `${BASE_URL}/lesson/16` },
    { title: "Cocina - palabras y frases", url: `${BASE_URL}/lesson/14` },
    { title: "Verbos - mluvit, rozumět", url: `${BASE_URL}/lesson/15` },
    { title: "Verbos - jít, chodit", url: `${BASE_URL}/lesson/17` },
    { title: "Próximamente disponible...", url: `${BASE_URL}/intermedio/1` },

    
  ],
};

export function LessonComponent2({ closeSheet }: { closeSheet: () => void }) {
  return (
    <SidebarMenu>
      {/* Use SidebarMenuSection component for each section */}
      <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
    </SidebarMenu>
  );
}
