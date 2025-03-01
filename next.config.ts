import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',  // Applies to all pages
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' https://code.jquery.com;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
              "font-src 'self' https://fonts.gstatic.com;",
              "img-src 'self';",
              "connect-src 'none';",
              "object-src 'none';",
            ].join(' ') // Joining each rule with a space
          },
        ],
      },
    ];
  },
};

export default nextConfig;
