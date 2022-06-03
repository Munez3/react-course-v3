import axios, { AxiosResponse } from "axios";
import { ID, IUser } from "./types";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export function fetchUsers(): Promise<AxiosResponse<IUser[]>> {
  return api.get("/users");
}

export function fetchUser(userId: string): Promise<AxiosResponse<IUser>> {
  return api.get(`/users/${userId}`);
}
export function addUser(
  data: Omit<IUser, "id">
): Promise<AxiosResponse<IUser>> {
  return api.post("/users", data);
}

export function removeUser(userId: ID): Promise<AxiosResponse<void>> {
  return api.delete(`/users/${userId}`);
}

export default api;
