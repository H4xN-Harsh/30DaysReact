import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllTasks = () => API.get("/notes");
export const getTaskById = (id) => API.get(`/notes/${id}`);
export const createTask = (data) => API.post("/notes", data);
