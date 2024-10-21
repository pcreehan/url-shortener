import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import { NextRequest } from "next/server";

// In-memory Map for URL redirects
const redirectMap = new Map([
  ["example", "https://example.com"],
  ["google", "https://google.com"],
  ["servant", "https://servant.io"],
  // Add more mappings as needed
]);
type RedirectFunc = (request: NextRequest, { params }: { params: { pathPart: string[] } }) => NextResponse;

export const GET: RedirectFunc = (request, { params }) => handleRedirect(params.pathPart, 307); // Temporary redirect for GE
export const POST: RedirectFunc = (request, { params }) => handleRedirect(params.pathPart, 308);
export const PUT = POST;
export const PATCH = POST;
export const DELETE = POST;

const handleRedirect = (pathPart: string[], statusCode: number): NextResponse => {
  const path = pathPart.join("/");
  const redirectUrl = redirectMap.get(path);

  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl, { status: statusCode });
  } else {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
};
