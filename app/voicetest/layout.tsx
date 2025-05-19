import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
const jsonLd = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "Intenta pronunciar en checo gratis",
  "url": "https://aprendercheco.com/pronunciacion",
  "description": "Practica cómo pronunciar en checo correctamente. Todo gratis, con ejemplos reales y guía de pronunciación con Aleš."
};

  return (
    <>
      <Head>
        <title>Intenta pronunciar en checo | Todo gratis</title>
        <meta
    name="description"
    content="Aprende a pronunciar en checo de forma gratuita. Ejercicios de pronunciación, ejemplos de palabras y frases con audio."
  />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
        <h1 className="mt-2 mb-8 text-base md:text-xl dark:text-red-300 text-red-800">Todavía en progreso...... Estoy preparando más frases para practicar la pronunciación</h1>
      <h1 className="mb-4 font-bold">Pronunciación checa / Česká výslovnost</h1>
      {children}
    </>
  );
}
