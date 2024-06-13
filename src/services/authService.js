import toast from "react-hot-toast";
import http from "./httpService";

export async function getOtp(data) {
  try {
    const response = await http
      .post("/user/get-otp", { phoneNumber: data })
      .then((data) => data.data);

    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data.message);
  }
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data.user);
  // try {
  //   const response = http
  //     .post("/user/check-otp", data)
  //     .then(({ data }) => data.data.user);
  //   return response;
  // } catch (error) {
  //   toast.error(error.response?.data?.message);
  // }
}

export function completeProfile(data) {
  try {
    const response = http
      .post("/user/complete-profile", data)
      .then(({ data }) => data.data);

    return response;
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
}

export function logout() {
  return http.post("/user/logout");
}
