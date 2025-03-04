import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return new NextResponse(
        JSON.stringify({ error: 'Email parameter is missing' }),
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 422 }
      )
    }

    const result = await db.query('DELETE FROM checousers WHERE email = ?', [email])

    const affectedRows = (result as any).affectedRows

    if (affectedRows === 0) {
      return new NextResponse(
        JSON.stringify({ error: 'Email not found' }),
        { status: 404 }
      )
    }

    return new NextResponse(
      JSON.stringify({ success: 'Successfully unsubscribed' }),
      { status: 200 }
    )
  } catch (err: any) {
    console.error('UNSUBSCRIBE_ERROR', err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
