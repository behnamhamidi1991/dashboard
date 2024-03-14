import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Login Successful!",
      success: true,
    });

    response.cookies.get("token");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
