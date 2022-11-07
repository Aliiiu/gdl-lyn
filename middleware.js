import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("allow");
  let url = req.url;

  if (!verify && url.includes("/file-upload")) {
    return NextResponse.redirect("localhost:3001/get-started");
  }
}
