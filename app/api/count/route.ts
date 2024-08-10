import { getThisWeekCount } from "@/notion/api";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    // const count = await getThisWeekCount(null, 0);
    return new NextResponse(JSON.stringify(1));
}