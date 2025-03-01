import React from 'react';

function Page() {
  return (
    <div className="container mx-auto p-4 ">
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Zásady ochrany osobních údajů</h2>
        <div className="space-y-4 text-justify">
          <p>
            Tato stránka používá soubory cookies pro zlepšení uživatelského zážitku. Cookies jsou malé textové
            soubory, které se ukládají na vašem zařízení a umožňují stránkám si zapamatovat vaše předvolby.
          </p>
          <p>
            Nezpracováváme žádné osobní údaje bez vašeho souhlasu. Používáme cookies třetích stran pro analýzu návštěvnosti
            (například Google Analytics). Tyto cookies mohou sbírat anonymní údaje o vašem chování na webu.
          </p>
          <p>
            Pokud používáte naši stránku, souhlasíte s tím, že můžeme používat soubory cookies podle těchto zásad.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold  mb-4">Privacy Policy</h2>
        <div className="space-y-4 text-justify">
          <p>
            This website uses cookies to improve your user experience. Cookies are small text files that are stored on your
            device and allow the pages to remember your preferences.
          </p>
          <p>
            We do not process any personal data without your consent. We use third-party cookies for traffic analysis (e.g.,
            Google Analytics). These cookies may collect anonymous data about your behavior on the website.
          </p>
          <p>
            By using our website, you agree to the use of cookies as described in this privacy policy.
          </p>
        </div>
      </section>

      <section className="mb-80">
        <h2 className="text-2xl font-bold  mb-4">Política de privacidad</h2>
        <div className="space-y-4 text-justify">
          <p>
            Este sitio web utiliza cookies para mejorar su experiencia de usuario. Las cookies son pequeños archivos de texto
            que se almacenan en su dispositivo y permiten que las páginas recuerden sus preferencias.
          </p>
          <p>
            No procesamos ningún dato personal sin su consentimiento. Utilizamos cookies de terceros para el análisis de tráfico
            (por ejemplo, Google Analytics). Estas cookies pueden recopilar datos anónimos sobre su comportamiento en el sitio web.
          </p>
          <p>
            Al utilizar nuestro sitio web, acepta el uso de cookies según lo descrito en esta política de privacidad.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Page;
