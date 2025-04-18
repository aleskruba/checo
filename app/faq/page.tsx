
function page() {
    return (
        <div className="w-full mt-8 flex flex-col items-center justify-center px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes (FAQ)</h1>
    
          <div className="space-y-6 text-left text-base">
            <div>
              <h2 className="font-semibold text-lg">¿Qué es aprendercheco.com?</h2>
              <p>Es una página para hispanohablantes que quieren aprender checo. Ofrezco explicaciones claras, grabaciones de audio, diálogos simples y ejercicios para practicar.</p>
            </div>
    
            <div>
              <h2 className="font-semibold text-lg">¿Qué puedo encontrar en las lecciones?</h2>
              <p>Las lecciones están organizadas por nivel de dificultad. Cada lección incluye explicaciones gramaticales, ejemplos y grabaciones de audio para ayudarte a mejorar tu comprensión auditiva y pronunciación.</p>
            </div>
    
            <div>
              <h2 className="font-semibold text-lg">¿Tienes audios para practicar?</h2>
              <p>Sí, tanto las lecciones como los diálogos vienen acompañados de grabaciones en checo.</p>
            </div>
    
            <div>
              <h2 className="font-semibold text-lg">¿Hay ejercicios o pruebas?</h2>
              <p>Sí. Puedes hacer quizzes interactivos para practicar lo que has aprendido y poner a prueba tus conocimientos.</p>
            </div>
    
            <div>
              <h2 className="font-semibold text-lg">¿Puedo tomar clases contigo?</h2>
              <p>Sí, ofrezco clases individuales en línea a través de la plataforma <a href="https://www.italki.com/en/teacher/6813654/czech" className="underline text-blue-600" target="_blank">italki</a>. Puedes ver mi perfil y reservar una clase.</p>
            </div>
    
            <div>
              <h2 className="font-semibold text-lg">¿Tienes videos en YouTube?</h2>
              <p>Sí, en mi <a href="https://www.youtube.com/@AprenderCheco" className="underline text-blue-600" target="_blank">canal de YouTube</a> encontrarás muchos videos explicativos sobre la gramática checa.</p>
            </div>
          </div>
        </div>
  );
}

export default page;
