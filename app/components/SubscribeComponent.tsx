"use client";
import React, { useState } from 'react';

function SubscribeComponent() {
  const [inputEmpty, setInputEmpty] = useState(true);
  const [newEmail, setNewEmail] = useState('');
  const [responseOK, setResponseOK] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [responseError, setResponseError] = useState(false);

  // Funkce pro kontrolu, zda je e-mail platný
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value.trim();
    
    // Regulační výraz pro validaci e-mailu
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Nastaví stav podle toho, zda je e-mail platný
    setInputEmpty(!emailPattern.test(email)); // Pokud e-mail nevyhovuje vzoru, tlačítko bude deaktivováno
    setNewEmail(email);
  };

  async function submitFunction(e: React.FormEvent) {
    e.preventDefault(); // Prevent the form from refreshing the page
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newEmail }), // Properly format the body
      });

      if (!response.ok) {
        const data = await response.json();
        console.log(data.error);
        if (data.error === 'Email is already subscribed')
                {setEmailExist(true)
                    setTimeout(() => {
                        setEmailExist(false);  // Hide error message after 2 seconds
                        return;
                      }, 2000);
                }
        setResponseError(true); // Show error message
        setTimeout(() => {
          setResponseError(false);  // Hide error message after 2 seconds
        }, 2000);
      } else {
        console.log('Success:', await response.json());
        setResponseOK(true);  // Show success message
        setNewEmail('');  // Clear email input value
        setInputEmpty(true);
        setTimeout(() => {
          setResponseOK(false);  // Hide success message after 2 seconds
        }, 2000);
      }
    } catch (err) {
      setResponseError(true); // Show error message in case of unexpected error
      setTimeout(() => {
        setResponseError(false);  // Hide error message after 2 seconds
      }, 2000);
      console.log('Error:', err);
    }
  }

  return (
    <div className="mx-2 my-2 w-full md:w-2/3 lg:w-1/2 rounded-xl p-3 bg-gray-300 dark:bg-gray-600 border-2 border-indigo-600 dark:border-gray-300">
      <div className={`${responseOK ? "bg-green-600 text-white" : "hidden" }`}>
        Su dirección de correo electrónico ha sido añadida a las suscripciones al boletín.
      </div>
      <div className={`${responseError && !emailExist ? "bg-red-600 text-white" : "hidden" }`}>
        Se produjo un error inesperado al guardar su dirección de correo electrónico para la suscripción.
      </div>
      <div className={`${emailExist ? "bg-orange-400 text-white" : "hidden" }`}>
      Este correo electrónico ya está registrado
      </div>

      <h1 className="text-base font-semibold text-center">Suscríbete al boletín</h1>
      <span className="text-xs block text-center mt-1">
        Recibe nuevas lecciones, diálogos, quizzes y vídeos en tu correo.
      </span>
      <span className="text-xs block text-center mt-1">
        Puedes darte de baja en cualquier momento.
      </span>
      <form onSubmit={submitFunction} className="mt-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Tu correo electrónico"
          required
          className="w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleInputChange}
          value={newEmail} // Bind input value to state
        />
        <button
          type="submit"
          className={`w-1/2 mt-3 rounded-xl py-2  ${
            inputEmpty
              ? "bg-blue-300 text-blue-100 cursor-not-allowed"
              : "bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition"
          }`}
          disabled={inputEmpty}
        >
          Suscribirse
        </button>
      </form>
    </div>
  );
}

export default SubscribeComponent;
