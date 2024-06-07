export function toStringCookies(Cookies) {
  let strCookie = "";
  Cookies.getAll().forEach((item) => {
    strCookie += `${item?.name}=${item?.value}; `;
  });
  return strCookie;
}
