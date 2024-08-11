// import { write } from "@/notion/api";
import {write} from '@/db/api';
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const numbers = await req.json() as number[];
    const date = new Date();
    const item = {
        created: date,
        numbers: numbers
    }
    await write(item);
    return new NextResponse();
}