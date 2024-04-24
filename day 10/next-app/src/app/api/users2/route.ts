/** @format */

import { NextResponse } from "next/server";
export const urlAPI = "http://localhost:2001/users/";

export const requestAPI = async (url: string, method: string, body?: any) => {
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method,
    body,
    next: {
      //   revalidate: 10,
    },
  });
  return res.json();
};

export const method = {
  get: "GET",
  delete: "DELETE",
  post: "POST",
  patch: "PATCH",
};

export async function GET() {
  const data = await requestAPI(urlAPI, method.get);
  return NextResponse.json({
    data,
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  await requestAPI(urlAPI, method.post, JSON.stringify(body));
  const data = await requestAPI(urlAPI, method.get);
  return NextResponse.json({
    data,
  });
}
