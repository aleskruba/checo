import {SidebarMenu,} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import SidebarMenuSection from "./SidebarMenuSection ";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
// Menu items.

const items = {
  title: "Testy / Tests",
  content: [
    {
      title: "Vocabulario básico",
        url: `${BASE_URL}/test/vocabulario` 

    },
    {
      title: "Vocabulario + frases básicas",
        url: `${BASE_URL}/test/1` 

    },
    {
        title: "Vocabulario + frases básicas",
        url: `${BASE_URL}/test/2` 
     
    },
    {
      title: 'El verbo "být" ',
        url: `${BASE_URL}/test/3` 

    },
    {
      title: "Los posesivos básicos",
        url: `${BASE_URL}/test/4` 

    },
    {
      title: "Acusativo  ",
        url: `${BASE_URL}/test/5` 

    },
    {
      title: "Plural de sustantivos I",
        url: `${BASE_URL}/test/6` 

    },
    {
      title: "Plural de sustantivos II",
        url: `${BASE_URL}/test/7` 

    },
    {
      title: "La conjug. de los verbos",
        url: `${BASE_URL}/test/8` 

    },    {
      title: "Adjetivos y colores",
        url: `${BASE_URL}/test/9` 

    },
    {
      title: "Cocina - frases",
        url: `${BASE_URL}/test/10` 

    },
    {
      title: "Verbos - jíst, pít, vařit",
        url: `${BASE_URL}/test/11` 
    },
    {
      title: "Verbos - mluvit, rozumět",
        url: `${BASE_URL}/test/12` 
    }
    ,
    {
      title: "El verbo - jít",
        url: `${BASE_URL}/test/13` 
    },
    {
      title: "Días, meses, estaciones",
        url: `${BASE_URL}/test/14` 
    }
    ,
    {
      title: "El cuerpo humano",
        url: `${BASE_URL}/test/15` 
    }
  ],
};export function TestComponent({ closeSheet }: { closeSheet: () => void }) {

  return (
    <SidebarMenu>
      {/* Use SidebarMenuSection component for each section */}
      <SidebarMenuSection title={items.title} content={items.content} closeSheet={closeSheet} />
    </SidebarMenu>
  );
}