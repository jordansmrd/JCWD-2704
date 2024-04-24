/** @format */
import { NextResponse } from "next/server";
import data from "../data.json";

export function GET() {
  return NextResponse.json({
    message: "fetch users",
    data: data.users,
  });
}

export async function POST(req: Request) {
  const newData = await req.json();
  data.users.push(newData);
  return NextResponse.json({
    data,
  });
}
