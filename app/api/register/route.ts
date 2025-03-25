
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {

    console.log(process.env.DB_HOST)
    const body = await request.json();
    const { email } = body;

    // Regulační výraz pro validaci e-mailu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 422 }
      );
    }

    // Kontrola, zda e-mail již není v databázi
    const [rows]: any = await db.query(
      'SELECT * FROM checousers WHERE email = ?',
      [email]
    );

    if (rows.length > 0) { // Access the rows property to check the length
      return new NextResponse(
        JSON.stringify({ error: 'Email is already subscribed' }),
        { status: 400 }
      );
    }

    // Vložení e-mailu do databáze
    await db.query('INSERT INTO checousers (email) VALUES (?)', [email]);

    return new NextResponse(
      JSON.stringify({ success: 'Successfully subscribed' }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error('REGISTRATION_ERROR', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
