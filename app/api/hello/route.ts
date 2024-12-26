import { NextResponse  } from "next/server"
export async function GET(){
    return new NextResponse(
        JSON.stringify({message: 'Hello world'}), {
        status: 200,
        headers: {'Content-Type': 'application/json'},
    })
}