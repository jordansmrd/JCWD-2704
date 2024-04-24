/** @format */

import { NextResponse } from "next/server";
import { method, requestAPI, urlAPI } from "../route";
/** @format */
interface IContext {
  params: {
    userid: string;
  };
}

export async function GET(req: Request, context: IContext) {
  const { userid } = context.params;
  const user = await requestAPI(urlAPI + userid, method.get);

  return NextResponse.json({
    message: "fetch user",
    data: user,
  });
}

export async function DELETE(req: Request, context: IContext) {
  const { userid } = context.params;
  await requestAPI(urlAPI + userid, method.delete);
  const user = await requestAPI(urlAPI, method.get);

  return NextResponse.json({
    message: "delete user",
    data: user,
  });
}
export async function PATCH(req: Request, context: IContext) {
  const body = await req.json();
  const { userid } = context.params;
  await requestAPI(urlAPI + userid, method.patch, JSON.stringify(body));

  const user = await requestAPI(urlAPI, method.get);

  return NextResponse.json({
    message: "patch user",
    data: user,
  });
}
