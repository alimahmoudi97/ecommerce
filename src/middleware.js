import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";
import { revalidatePath } from "next/cache";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  console.log("pathname:", url);

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);
    // console.log("user-profile:", user);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
  }
  if (pathname.startsWith("/cart")) {
    const user = await middlewareAuth(req);
    // console.log("user-cart:", user);
    if (!user) return NextResponse.redirect(new URL("/auth", url));
  }
  if (pathname.startsWith("/admin")) {
    const user = await middlewareAuth(req);
    // console.log("user-admin:", user);
    if (!user) return NextResponse.redirect(new URL("/auth", url));

    if (user && user.role !== "ADMIN")
      return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/cart/:path*"],
};
