// app/api/exchange-rate/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const base = url.searchParams.get("base") || "USD";
  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
  const data = await res.json();
  return NextResponse.json(data);
}
