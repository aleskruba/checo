/* import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, 
};

export default nextConfig;
 */

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, // Povolit sourcemapy v produkci
  async redirects() {
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/(.*)', // Chytí všechny URL
          destination: 'https://aprendercheco.com/', // Přesměruje na tuto doménu
          permanent: false, // Můžete nastavit na `true`, pokud chcete trvalé přesměrování
        },
      ];
    }
    return []; // V developmentu žádné přesměrování
  },
};

export default nextConfig;
