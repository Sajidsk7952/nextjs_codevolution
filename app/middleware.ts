import { NextResponse,type NextRequest } from "next/server";

export async function middleware(request : NextRequest){
    const url = request.nextUrl.pathname;
    console.log("In Middleware");
    return NextResponse.redirect(new URL('/',request.url));
}

export const config={
    matcher : "/profile",
}