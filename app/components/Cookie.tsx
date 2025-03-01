import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Flag from 'react-world-flags';

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const getFlagCode = (lang: string) => {
    switch (lang) {
      case 'es':
        return 'ES'; // Spain flag for Spanish
      case 'en':
        return 'GB'; // UK flag for English (or 'US' for USA)
      case 'cz':
        return 'CZ'; // Czech flag for Czech
      default:
        return 'GB'; // Default to UK flag
    }
  };

  // Function to get localized decline button text based on language
  const getDeclineText = (lang: string) => {
    switch (lang) {
      case 'es':
        return 'Rechazo / I Decline / Odmítnout'; // Spanish
      case 'en':
        return 'I Decline / Rechazo / Odmítnout'; // English
      case 'cz':
        return 'Odmítnout / I Decline / Rechazo'; // Czech
      default:
        return 'I Decline'; // Default to English
    }
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Acepto / I Agree / Souhlasím"
      cookieName="userCookieConsent"
      style={{
        background: showBanner ? "#2B373B" : "transparent", // Make background transparent when banner is hidden
        color: showBanner ? "#fff" : "transparent", // Change text color to transparent
        fontSize: "14px",
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px',
        transition: 'opacity 0.5s ease',
        opacity: showBanner ? 1 : 0, // Fade out when hidden

      }}
      buttonStyle={{
        backgroundColor: "#4CAF50",
        color: "#fff",
        fontSize: "13px",
        borderRadius: "5px",
        padding: "10px 20px",
        marginBottom: '5px',
        width:"250px"
      }}
      declineButtonStyle={{
    
        backgroundColor: "#F44336", // Red background for decline button
        color: "#fff",
        fontSize: "13px",
        borderRadius: "5px",
        padding: "10px 20px",
        marginBottom: '5px',
             width:"250px"
      }}
      enableDeclineButton={true} // Enable button to decline cookies
      declineButtonText={getDeclineText('es')} // Pass the localized text for decline button (default 'es')
      onAccept={() => {
        console.log('Cookies accepted');
      }}
      onDecline={() => {
        console.log('Cookies declined');
      }}
    >
      <div className="flex flex-col items-start gap-4">
        {/* Text for cookies in three languages with flags side by side */}
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Flag code={getFlagCode('es')} style={{ width: '30px', height: '20px' }} />
          Este sitio usa cookies para garantizar su funcionamiento correcto y con fines analíticos. Al continuar usando este sitio, aceptas el uso de cookies.
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Flag code={getFlagCode('en')} style={{ width: '30px', height: '20px' }} />
          This site uses cookies to ensure proper functionality and for analytics purposes. By continuing to use this site, you agree to our use of cookies.
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Flag code={getFlagCode('cz')} style={{ width: '30px', height: '20px' }} />
          Tato stránka používá cookies pro zajištění správného fungování a pro analytické účely. Pokračováním v používání této stránky souhlasíte s naším používáním cookies.
        </p>
        <div className='flex w-full justify-center mt-8 underline text-blue-600 text-base md:text-lg'>
          <a href="/privacy" onClick={() => setShowBanner(false)}>
            Más información / More information / Více informací
          </a>
        </div>
      </div>
    </CookieConsent>
  );
}

export default CookieBanner;
