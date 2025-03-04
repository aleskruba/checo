'use client'

import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'

function UnsubscribeContent() {
  const [noEmail, setNoEmail] = useState(false)
  const [emailExists, setEmailExists] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [emailDeletedSuccess, setEmailDeletedSuccess] = useState(false)
  const [deleteFunction, setDeleteFunction] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const email = searchParams.get('email')

  useEffect(() => {
    const checkEmailExistence = async () => {
      if (!email) {
        setNoEmail(true)
        setIsLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/getemail?email=${encodeURIComponent(email)}`)
        const data = await response.json()

        if (response.ok && data.success) {
          setEmailExists(true)
        } else {
          setEmailExists(false)
        }
      } catch (error) {
        console.error('Error checking email:', error)
        setEmailExists(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkEmailExistence()
  }, [email])

  const deleteEmail = async () => {
    if (!emailExists || !email) return

    setIsLoading(true)
    setDeleteFunction(true)
    try {
      const response = await fetch('/api/deleteemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setEmailDeletedSuccess(true)
        setIsLoading(true)
        setTimeout(() => {
          setEmailDeletedSuccess(false)
          router.push('/') 
        }, 2000)
      } else {
        alert(`Error: ${data.error}`)
      }
    } catch (err) {
      console.error('Error deleting email:', err)
      alert('Ocurrió un error. Intente de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center flex-col gap-2">
      {emailDeletedSuccess && (
        <div className="w-full max-w-md bg-green-700 text-white p-3 rounded-md">
          La suscripción al correo electrónico ha sido cancelada exitosamente.
        </div>
      )}
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md">
        {isLoading ? (
          <h1 className="text-xl dark:text-white text-black text-center">Espera por favor...</h1>
        ) : noEmail && !emailDeletedSuccess ? (
          <h1 className="text-xl dark:text-white text-black text-center">
            No se proporcionó ningún correo electrónico o el correo electrónico no está registrado
          </h1>
        ) : emailExists && !deleteFunction ? (
          <>
            <h1 className="text-2xl font-semibold text-center text-blue-400 mb-4">{email}</h1>
            <p className="text-lg dark:text-white text-black text-center mb-6">
              ¿Está seguro de que desea cancelar la suscripción?
            </p>

            <div className="flex justify-center space-x-4">
              <button
                className="px-6 py-3 w-[100px] text-base md:text-lg font-semibold rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-300 ease-in-out"
                onClick={deleteEmail}
                disabled={isLoading}
              >
                {isLoading ? 'Eliminando...' : 'Sí'}
              </button>
              <Link
                href="../"
                className="px-6 py-3 w-[100px] text-base md:text-lg font-semibold rounded-md bg-gray-500 text-white hover:bg-gray-600 transition-all duration-300 ease-in-out text-center"
              >
                No
              </Link>
            </div>
          </>
        ) : (
          <>
            {!emailDeletedSuccess ? (
              <h1 className="text-xl text-white text-center">Correo electrónico no encontrado</h1>
            ) : (
              <h1>Gracias</h1>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<h1 className="text-xl text-white text-center">Cargando...</h1>}>
      <UnsubscribeContent />
    </Suspense>
  )
}
