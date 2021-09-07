import Axios, { AuthAxios } from "./axiosConfig";

export function userLogin({ username, password }) {
  const rqstBody = {
    username: username,
    password: password,
  };
  return Axios.post("/auth/login", rqstBody, {
    headers: { "Content-Type": "application/json" },
  });
}

export function setUserToLocalStorage({ token, ...user }) {
  localStorage.setItem("token", token);
  localStorage.setItem("userData", JSON.stringify(user));
}

export function getLoggedInUser() {
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("userData"));
  // return  valid token if it is in session storage or local storage
  if (token && userData) {
    return userData;
  } else return null;
}

export function getUserToken() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else return "";
}

export function clearUserStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
}
export function userLogout(redirectLocation = "/login") {
  clearUserStorage();
  window.location.replace(redirectLocation);
}
