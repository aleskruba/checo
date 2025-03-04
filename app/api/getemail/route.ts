import { NextRequest, NextResponse } from 'next/server';
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get('email'); // Get the email from the query string
    console.log('email',email)
    if (!email) {
      return new NextResponse('Email is required', { status: 400 });
    }

    // Check if the email exists in the database
    const [rows]: any = await db.query('SELECT * FROM checousers WHERE email = ?', [email]);

    // If email exists, return success, otherwise, return not found
    if (rows.length > 0) {
      return new NextResponse(
        JSON.stringify({ success: true, message: 'Email found' }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Email not found' }),
        { status: 404 }
      );
    }
  } catch (err: any) {
    console.error('REGISTRATION_ERROR', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
