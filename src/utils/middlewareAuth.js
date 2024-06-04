import { toStringCookies } from "./toStringCookies";

export async function middlewareAuth(req) {
  const baseURL = "http://localhost:5000/api";
  const { data } = await fetch(`${baseURL}/user/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: toStringCookies(req.cookies),
    },
  }).then((res) => res.json());
  const { user } = data || {};

  return user;
}
