import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
        console.log('delete')
    // Získání e-mailu z URL parametrů
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    console.log('email',email)

    if (!email) {
      return new NextResponse(
        JSON.stringify({ error: 'Email parameter is missing' }),
        { status: 400 }
      );
    }

    // Regulační výraz pro validaci e-mailu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 422 }
      );
    }

    // Smazání e-mailu z databáze
    const result = await db.query('DELETE FROM checousers WHERE email = ?', [email]);

    // Casting the result to `any` to bypass TypeScript error
    const affectedRows = (result as any).affectedRows;

    if (affectedRows === 0) {
      return new NextResponse(
        JSON.stringify({ error: 'Email not found' }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ success: 'Successfully unsubscribed' }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error('UNSUBSCRIBE_ERROR', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
