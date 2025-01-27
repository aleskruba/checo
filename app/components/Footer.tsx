import React from 'react';

function Footer() {
  return (
    <footer className="mt-4 bg-gray-300  dark:bg-gray-800 text-gray-800 dark:text-white text-center w-full py-4  absolute b-0">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <a href="https://aprendercheco.com" className="text-blue-500 hover:text-blue-600">aprendercheco.com</a>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
