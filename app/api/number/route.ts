import { write } from "@/db/api";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const numbers = (await req.json()) as number[];
  const item = {
    numbers: numbers,
  };
  await write(item);
  return new NextResponse();
};
