export const dynamic = 'force-dynamic';

import { type NextRequest } from "next/server";
import { headers,cookies } from "next/headers";
export async function GET(request : NextRequest){
    // const header = new Headers(request.headers);
    // console.log(header);
    // console.log(header.get('Authorization'));
    const head = headers();
    console.log(head.get('Authorization'));
    cookies().set('theme','light');
    console.log(cookies().getAll());
    return new Response("<h1>This is an Profile section</h1>",{
        headers: {
            "Content-type" : "text/HTML",
            // "Set-Cookie" : "theme=dark"
        }
    })
}