import http from "./httpService";

export function getCoupons() {
  return http.get("/admin/coupon/list").then(({ data }) => data.data);
}

export function addCoupon(coupon) {
  return http.post("/admin/coupon/add", coupon).then(({ data }) => data.data);
}

export function removeCoupon(id) {
  return http
    .delete(`/admin/coupon/remove/${id}`)
    .then(({ data }) => data.data);
}
