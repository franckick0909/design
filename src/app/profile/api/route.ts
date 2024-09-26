import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const user = request.cookies.get("user");
    console.log(user);



  return new Response("<h1>Profile data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "user=franck",
    },
  });
}
