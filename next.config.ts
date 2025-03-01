import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Applies to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagservices.com https://www.googletagmanager.com https://code.jquery.com;",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
              "font-src 'self' https://fonts.gstatic.com;",
              "img-src 'self' data: https://*.googleusercontent.com https://*.google.com https://pagead2.googlesyndication.com;",
              "connect-src 'self' https://aprendercheco.com https://googleads.g.doubleclick.net https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.googletagmanager.com;",
              "frame-src https://googleads.g.doubleclick.net https://*.googlesyndication.com;",
              "object-src 'none';",
              "upgrade-insecure-requests;"
            ].join(' ') // Join CSP rules with a space
          }
        ]
      }
    ];
  }
};

export default nextConfig;
