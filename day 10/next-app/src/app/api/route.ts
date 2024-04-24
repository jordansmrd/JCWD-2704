/** @format */

import { NextRequest, NextResponse } from "next/server";
import data from "./data.json";
import { NextApiRequest, NextApiResponse } from "next";

// NextResponse, Response, NEXTAPIRESPONSE;

// export function GET() {
//   return NextResponse.json({
//     message: "hello welcome to api",
//   });
// }

export function GET(req: NextRequest) {
  return Response.json({
    message: "hello welcome to api",
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  console.log(body);

  return Response.json({
    message: "hello",
    data: body,
  });
}
