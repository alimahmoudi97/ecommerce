import http from "./httpService";

export function addToCart(data) {
  return http.post("/cart/add", data).then(({ data }) => data.data);
}

export function removeFromCart(data) {
  return http.post("/cart/remove", data).then(({ data }) => data.data);
}
