import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "Pruebas interactivas para practicar checo",
    "url": "https://aprendercheco.com/test/1",
    "description": "Ejercicios y cuestionarios interactivos para que hispanohablantes y lusohablantes practiquen checo de manera divertida y efectiva."
  };

  return (
    <>
      <Head>
        <title>Pruebas</title>
        <meta
          name="description"
          content="Ejercicios y cuestionarios interactivos para que hispanohablantes y lusohablantes practiquen checo de manera divertida y efectiva."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      {children}
    </>
  );
}
