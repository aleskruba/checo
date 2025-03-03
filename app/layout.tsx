"use client";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";
import YouTube from "@/public/youtube.png";
import Logo from "@/public/man1.png";
import Flag from "@/public/czflag.png";
import Image from "next/image";
import Link from "next/link";
import CookieBanner from "./components/Cookie";
import Script from "next/script"; // Importujeme Script z next/script

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LessonComponent } from "./components/LessonComponent";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TestComponent } from "./components/TestComponent";
import { useEffect, useState } from "react";
import { ThemeComponent } from "./components/ThemeComponent";
import { DialogComponent } from "./components/DialogComponent";
import ViajerosComponent from "./components/ViajerosComponent";
import { IntermedioComponent } from "./components/IIntermedioComponent";
import { LessonComponent2 } from "./components/LessonComponentI2";
import { AudioProvider } from "./context/AudioContext";
import SubscribeComponent from "./components/SubscribeComponent";
const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Adjust to expect a Promise
}) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => {
    setIsSheetOpen(false); // Close the sheet
  };



  
  return (
    <html lang="cz" suppressHydrationWarning>
  

      <head>
      <title>Aprender checo con Aleš</title>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RP3H6ZD9NZ" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RP3H6ZD9NZ');
        `}
      </Script>

      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4044949713848832"  
     crossOrigin="anonymous"></Script>

{/*       <meta name="google-adsense-account" content="ca-pub-4044949713848832"/>
      <meta 
  httpEquiv="Content-Security-Policy" 
  content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googlesyndication.com https://*.google-analytics.com https://*.google.com https://*.gstatic.com;
  style-src 'self' 'unsafe-inline' https://*.googleapis.com;
  img-src 'self' data: https://*.google.com https://*.googleusercontent.com https://*.gstatic.com https://*.googlesyndication.com;
  frame-src 'self' https://*.googlesyndication.com https://*.google.com;
  connect-src 'self' https://aprendercheco.com https://*.google-analytics.com https://*.googlesyndication.com;
  " 
/> */}


      <meta
          name="description"
          content="Aprende checo de manera fácil y divertida con Aleš Kruba. Clases de gramática, pronunciación, diálogos prácticos y tests interactivos, especialmente para hispanohablantes."
          />
        <meta name="author" content="Aleš Kruba" />
        <meta
          name="keywords"
          content="aprender checo, gramática checa, pronunciación checa, diálogos en checo, tests de checo, checo para hispanohablantes ,checo para viajeros , checo con Aleš"
          />

        <meta property="og:title" content="Aprende Checo Fácilmente con Aleš | Gramática, Pronunciación, Diálogos" />
        <meta name="google-adsense-account" content="ca-pub-4044949713848832"/>
        <meta
            property="og:description"
            content="Sumérgete en el idioma checo con cursos diseñados para hispanohablantes. Aprende gramática, mejora tu pronunciación y practica con diálogos reales."
          />
        <meta property="og:url" content="https://aprendercheco.com" />
        <meta property="og:image" content="https://aprendercheco.com/man1.png" />

     

      </head>
      <Head>
        <title>Aprender checo con Aleš</title>


 

        <meta
          name="description"
          content="Aprende checo de manera fácil y divertida con Aleš Kruba. Clases de gramática, pronunciación, diálogos prácticos y tests interactivos, especialmente para hispanohablantes."
          />
        <meta name="author" content="Aleš Kruba" />
        <meta
          name="keywords"
          content="aprender checo, gramática checa, pronunciación checa, diálogos en checo, tests de checo, checo para hispanohablantes"
          />

        <meta property="og:title" content="Aprende Checo Fácilmente con Aleš | Gramática, Pronunciación, Diálogos" />
        <meta name="google-adsense-account" content="ca-pub-4044949713848832"/>
        <meta
            property="og:description"
            content="Sumérgete en el idioma checo con cursos diseñados para hispanohablantes. Aprende gramática, mejora tu pronunciación y practica con diálogos reales."
          />
        <meta property="og:url" content="https://aprendercheco.com" />
        <meta property="og:image" content="https://aprendercheco.com/man1.png" />

     

      </Head>
      <body
        suppressHydrationWarning
        className={`text-center pb-4 
dark:bg-gradient-radial dark:from-[#0a1a2b] dark:via-[#102a44] dark:to-[#0a1a2b]
            bg-gradient-to-b from-gray-100 via-beige-50 to-gray-200
        ${poppins.className}`}
      > <AudioProvider> 
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full ">
            <nav className="hidden md:flex justify-between items-center px-4 relative ">
              <div className="g-14 flex items-center  px-4 lg:h-[80px] lg:px-6 ">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="size-16 rounded-full"
                  />
                  <p className="text-xl font-bold ml-4">Ahoj, Hola!</p>
                  <Image
                    src={Flag}
                    alt="Flag"
                    className="size-16 rounded-full"
                  />
                  <h1
                    className="
                      md:hidden lg:block
                      font-poppins font-extrabold  
                      text-center pt-1 md:pt-0 pb-4  text-xl 
                      mt-4 
                      animate-slideIn

                      "
                  >
                    Vítejte na stránkách{" "}
                    <span className="font-extrabold ml-2">
                      {" "}
                      <span className="text-blue-700  dark:text-blue-400">
                        Čeština
                      </span>{" "}
                      <span className="dark:text-white text-gray-400">s</span>{" "}
                      <span className="dark:text-red-500 text-red-700">
                        Alešem
                      </span>
                    </span>{" "}
                    !
                  </h1>
                </Link>
              </div>
            </nav>

            <SidebarProvider>
              <div className="mt-4 grid min-h-screen w-full md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]  text-center">
                <div className="hidden  bg-muted/40 md:block">
                  <div className="flex flex-col mah-h-screen h-full gap-2">
                    <div className="flex-1">
                      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {/*      <DashboardLinks/> */}
                        <ViajerosComponent closeSheet={closeSheet} />
                        <LessonComponent closeSheet={closeSheet} />
                        <LessonComponent2 closeSheet={closeSheet} />
                        <IntermedioComponent closeSheet={closeSheet}/>
                        <DialogComponent closeSheet={closeSheet} />
                        <TestComponent closeSheet={closeSheet} />
                        <ThemeComponent closeSheet={closeSheet} />
                                    <div className="mt-16 ">
                         <Image
                    src={YouTube}
                    alt="Logo"
                    height={100}
                  /></div>
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col ">
                  <header className="flex h-14 items-center gap-4 border-0 bg-muted/40 px-4 lg:h-[20px] lg:px-6  ">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                      <SheetTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="md:hidden "
                        >
                          <Menu className="size-5" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent
                        side="left"
                        className="darK:bg-black darK:text-white bg-gray-500 w-[80%] "
                      >
                        <SheetTitle>
                          <div className="flex items-center gap-2 ">
                            <Image
                              src={Logo}
                              alt="logo"
                              className="size-16
                                rounded-full"
                            />
                            <p className="text-ls font-bold text-white whitespace-nowrap">
                              Ahoj, Hola!
                            </p>
                            <Image
                              src={Flag}
                              alt="Flag"
                              className="size-14 rounded-full"
                            />
                          </div>
                        </SheetTitle>
                        <nav className="grid gap-2 mt-10  fixed text-white  overflow-y-auto  max-h-[70%] pb-8 ">
                            <div className="overflow-y-auto h-full ">
                            <ViajerosComponent closeSheet={closeSheet} />
                          <LessonComponent closeSheet={closeSheet} />
                          <LessonComponent2 closeSheet={closeSheet} />
                          <IntermedioComponent closeSheet={closeSheet}/>
                          <DialogComponent closeSheet={closeSheet} />
                          <TestComponent closeSheet={closeSheet} />
                         <ThemeComponent closeSheet={closeSheet} />
                         </div>
                         <div className="w-full mt-16 ">
                         <Image
                    src={YouTube}
                    alt="Logo"
                    height={100}
                  /></div>
                        </nav>
                      </SheetContent>
                    </Sheet>

                    <div className="flex w-full justify-start md:hidden ">
                      <Link href="/" className="flex items-center gap-2">
                        <Image
                          src={Logo}
                          alt="logo"
                          className="size-12 rounded-full"
                        />
                        <div className="flex gap-2 flex-col">
                          <h3 className="font-extrabold ml-2 text text-xl">
                            <span className="text-blue-700 dark:text-blue-400">
                              Čeština
                            </span>{" "}
                            <span className="dark:text-white text-gray-400">
                              s
                            </span>{" "}
                            <span className="dark:text-red-500 text-red-700">
                              {" "}
                              Alešem
                            </span>
                          </h3>
                        </div>
                      </Link>
                    </div>
                  </header>

                  <main className="">

                    {children}
                    </main>
                </div>
              </div>
            </SidebarProvider>
            <Footer />
          </div>
        </ThemeProvider>
        </AudioProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
