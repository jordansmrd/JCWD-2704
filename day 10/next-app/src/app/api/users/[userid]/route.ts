/** @format */
import { NextResponse } from "next/server";
import data from "../../data.json";

interface IContext {
  params: {
    userid: string;
  };
}

export function GET(req: Request, context: IContext) {
  const { userid } = context.params;
  const user = data.users.find((u) => u.id.toString() == userid);

  return NextResponse.json({
    message: "fetch user",
    data: user,
  });
}

export function DELETE(req: Request, context: IContext) {
  const { userid } = context.params;

  const idx = data.users.findIndex((u) => u.id.toString() == userid);

  data.users.splice(idx, 1);
  return NextResponse.json({
    message: "delete user ",
    data: data.users,
  });
}
export async function PATCH(req: Request, context: IContext) {
  const body = await req.json();
  const { userid } = context.params;
  const idx = data.users.findIndex((u) => u.id.toString() == userid);
  data.users[idx] = { ...data.users[idx], ...body };
  return NextResponse.json({
    data: data.users,
  });
}
