import { NextResponse } from "next/server";
export async function POST(req) {
    const data= await req.json();
    console.log(data);
    console.log('POST /api/chat');
    return NextResponse.json({ message: `Hello from server. ` });

}