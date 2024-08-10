// import { write } from "@/notion/api";
import {write} from '@/db/api';
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const numbers = await req.json() as number[];
    const serverTime = new Date();
    const koreanTimeString = serverTime.toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
    const date = new Date(koreanTimeString);

    const item = {
        created: date,
        numbers: numbers
    }
    await write(item);
    return new NextResponse();
}