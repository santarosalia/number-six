import { getThisWeekCount } from "@/db/api";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const count = await getThisWeekCount();
  return new NextResponse(JSON.stringify({ count: count }));
};
