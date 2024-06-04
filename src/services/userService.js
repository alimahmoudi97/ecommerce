import http from "./httpService";

export function getUserProfile() {
  return http.get("/user/profile").then((data) => data.data);
}

export function updateUserProfile(data) {
  return http.patch("/user/update", data).then((data) => data.data);
}

export function getUsers() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}
