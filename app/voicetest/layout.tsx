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
        <h1 className="mt-2 mb-8 text-base md:text-xl dark:text-red-300 text-red-800">Todavía en progreso...... Estoy preparando más frases para practicar la pronunciación</h1>
      <h1 className="mb-4 font-bold">Pronunciación checa / Česká výslovnost</h1>
      {children}
    </>
  );
}
