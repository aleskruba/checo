import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "Clases de checo en línea",
    "url": "https://aprendercheco.com/clases",
    "description": "Aprende checo en línea conmigo, Aleš. Clases personalizadas para principiantes y nivel intermedio."
  };

  return (
    <>
      <Head>
        <title>Pronunciación checa</title>
        <meta
          name="description"
          content="Aprende checo en línea conmigo, Aleš. Clases personalizadas para principiantes y nivel intermedio."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      {children}
    </>
  );
}
