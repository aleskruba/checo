"use client"
import { notFound } from 'next/navigation';
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Head from 'next/head';
import { Poppins } from 'next/font/google'
import Footer from './components/Footer';
import { Button } from "@/components/ui/button";
import DropDownSettingComponents from "./components/DropDownSettingComponents";
import type { Metadata } from 'next';
import Logo from "@/public/man1.png"
import Flag from "@/public/czflag.png"
import Image from "next/image";
import Link from "next/link";

import { DashboardLinks } from "./components/DashboardLinks";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { AppSidebar } from './components/SidebarLessons';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TestsComponent } from './components/TestsComponent';
import { useState } from 'react';


const poppins = Poppins({
    weight: '300',
    subsets: ['latin'],
  })


export default  function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Adjust to expect a Promise
}) {

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => {
    setIsSheetOpen(false);  // Close the sheet
  };
  return (
    <html lang='cz' suppressHydrationWarning>
      <Head>
  <title>Aleš Kruba - Full Stack Web Developer</title>
  <meta name="description" content="Portfolio of Aleš Kruba, a full-stack web developer specializing in frontend and backend development using JavaScript, React, Next.js, and Express.js." />
  <meta name="author" content="Aleš Kruba" />
  <meta name="keywords" content="Portfolio, Full Stack Web Development, JavaScript, TypeScript, React js, Next js, Express js, Tailwind CSS, Material UI, Docker, Databases, PHP, Python" />
  

  <meta property="og:title" content="Aleš Kruba - Full Stack Web Developer Portfolio" />
  <meta property="og:description" content="Explore the portfolio of Aleš Kruba, showcasing my skills in frontend and backend web development, including React, Next.js, Express.js, and more. Projects and experiences displayed in a dynamic, user-friendly format." />
  <meta property="og:url" content="https://dokram.com" />
  <meta property="og:image" content="https://dokram.com/man1.png" />
  

</Head>
      <body suppressHydrationWarning className={`text-center pb-4 
dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-amber-900 
            bg-gradient-to-b from-gray-100 via-beige-50 to-gray-200
        ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

<div className="w-full ">
      <nav className="hidden md:flex justify-between items-center px-4 relative ">

          
        <div className="g-14 flex items-center  px-4 lg:h-[80px] lg:px-6 ">
                    <Link href="/" className="flex items-center gap-2">
                    
                    <Image src={Logo} alt='Logo' className="size-16 rounded-full"/>
                    <p className="text-xl font-bold ml-4">
                    Hola,  Ahoj! 
                  
                                  
                    </p>
                    <Image src={Flag} alt='Flag' className="size-16 rounded-full"/>
                    <h1
                      className="
                      text-center pt-1 md:pt-0 pb-4 text-base md:text-xl 
                      font-mono md:font-poppins
                      mt-4 
                      animate-slideIn
                      "
                      >
                      Vítejte na stránkách <span className="font-extrabold ml-2">" <span className='text-blue-700'>Čeština</span> <span className='dark:text-white text-gray-400'>jednoduše</span> s <span className='dark:text-red-500 text-red-700'>Alešem</span>"</span> !
                    </h1>
           
                    </Link>

                 
                </div>
        
        <div>
            <DropDownSettingComponents settings={'settings'} 
                                                      dark={'dark'}
                                                      light={'light'}
                                                      themeText={'theme'}
                                                      /> 
        </div>
        </nav>

        <SidebarProvider>
            <div className="mt-4 grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]  text-center">

   
         

            <div className="hidden  bg-muted/40 md:block">

            <div className="flex flex-col mah-h-screen h-full gap-2">
           
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                   {/*      <DashboardLinks/> */}

                   <AppSidebar closeSheet={closeSheet} />
                   <TestsComponent/>

                    </nav>

                </div>

            </div>

            </div>

                <div className="flex flex-col ">
                    <header className="flex h-14 items-center gap-4 border-0 bg-muted/40 px-4 lg:h-[20px] lg:px-6  ">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>        
                          <SheetTrigger asChild>
                                <Button variant="outline" 
                                        size="icon"
                                        className="md:hidden "

                                        >
                                    <Menu className="size-5"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className='darK:bg-black darK:text-white bg-gray-500 ' >
                              
                            <SheetTitle>    
                                <div className="flex items-center gap-2 ">
                                <Image src={Logo} alt='logo' className="size-16
                                
                                
                                
                                rounded-full"/>
                                     <p className="text-xl font-bold text-white ">
                                     Hola,  Ahoj! 
                                    </p>
                                    <Image src={Flag} alt='Flag' className="size-16 rounded-full"/>
                                    </div>
                            </SheetTitle>
                                <nav className="grid gap-2 mt-10  fixed text-white">
                                <AppSidebar closeSheet={closeSheet} />
                                <TestsComponent/>
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <div className="flex w-full justify-center md:hidden ">
                        <Link href="/" className="flex items-center gap-2">
                    
                            <Image src={Logo} alt='logo' className="size-9 rounded-full"/>
                            <div className='flex gap-2 flex-col'>
          
                    <h3 className="font-extrabold ml-2 text">Čeština jednoduše s Alešem</h3> 

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
            <Footer/>
        </div>
        
     
        </ThemeProvider>
      </body>
    </html>
  );
}