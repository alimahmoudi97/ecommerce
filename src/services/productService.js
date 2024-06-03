import http from "./httpService";

export function getProducts() {
  return http.get("/product/list").then(({ data }) => data.data);
}

export function getProductById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export function addProduct(data) {
  return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export function removeProduct(id) {
  return http
    .delete(`/admin/product/remove/${id}`)
    .then(({ data }) => data.data);
}

export function updateProduct({ id, data }) {
  return http
    .patch(`/admin/product/update/${id}`, data)
    .then(({ data }) => data.data);
}
