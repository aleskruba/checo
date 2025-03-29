import Link from 'next/link';
import React from 'react';
import SubscribeComponent from './SubscribeComponent';

function Footer() {
  return (
    <footer className=" bg-gray-300 mt-2 dark:bg-gray-800 text-gray-800 dark:text-white text-center w-full py-4  absolute b-0">
      <div className='flex justify-center '>
      <SubscribeComponent/>
      </div>
      <div className="container mx-auto px-4">
        <div className="space-y-2">
          <p className="text-sm">
            <Link href="/privacy" className="dark:text-blue-300 dark:hover:text-blue-400 text-blue-800 hover:text-blue-900 text-xs md:text-base">
              Política de privacidad/Privacy Policy/Zásady ochrany osobních údajů
            </Link>
          </p>
          <p className="text-sm">
            <Link href="/" className="dark:text-blue-300 dark:hover:text-blue-400 text-blue-800 hover:text-blue-900 text-xs md:text-base">
              Sobre mi / About Me / O mně
            </Link>
          </p>
          <p className="text-sm">
            <Link href="/contact" className="dark:text-blue-300 dark:hover:text-blue-400 text-blue-800 hover:text-blue-900 text-xs md:text-base">
             Contacto / Contact /  Kontakt
            </Link>
          </p>
          <p className="text-sm mt-4">
            &copy; {new Date().getFullYear()} <a href="https://aprendercheco.com" className="dark:text-blue-300 dark:hover:text-blue-400 text-blue-800 hover:text-blue-900 text-xs md:text-base">aprendercheco.com</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
