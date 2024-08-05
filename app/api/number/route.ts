import { write } from "@/notion/api";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const numbers = await req.json() as number[];
    await write(numbers);
    return new NextResponse();
}