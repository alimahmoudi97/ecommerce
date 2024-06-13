import { toStringCookies } from "./toStringCookies";

export async function middlewareAuth(req) {
  const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
  const { data } = await fetch(`${baseURL}/user/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: toStringCookies(req.cookies),
    },
  }).then((res) => res.json());
  const { user } = data || {};
  // console.log("data in middleware:", data);
  return user;
}
