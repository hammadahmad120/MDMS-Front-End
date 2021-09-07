import Axios, { AuthAxios } from "./axiosConfig";

export function getAllDonation() {
  return AuthAxios.get("/donation");
}

export function getAllDoners() {
  return AuthAxios.get(`/donation/doner`);
}

export function createNewDoner(data) {
  return AuthAxios.post(`/donation/doner`, data);
}

export function addNewDonation(data) {
  return AuthAxios.post(`/donation`, data);
}

export function deleteDonation(donationId) {
  return AuthAxios.delete(`/donation/${donationId}`);
}

export function deleteDoner(donerId) {
  return AuthAxios.delete(`/donation/doner/${donerId}`);
}

export function updateDonation(donationId, data) {
  return AuthAxios.put(`/donation/${donationId}`, data);
}

export function updateDoner(donerId, data) {
  return AuthAxios.put(`/donation/doner/${donerId}`, data);
}
