import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(): Promise<NextResponse> {
  return NextResponse.redirect(new URL("https://www.microsoft.com"));
}
