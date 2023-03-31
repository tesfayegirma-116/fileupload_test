// This code is used to upload a file to the server.
// It uses the axios library to make a POST request to the server
// with a FormData object.

// Import the axios library
import axios from "axios";

// Create an axios object that will be used to make requests to the server
const api = axios.create({
    baseURL: "http://localhost:8000/api",
});

// This function will be used to upload a file to the server
export const uploadFile = (formData: FormData) => api.post("/upload", formData);

// This function will be used to get a list of files from the server
export const getFiles = () => api.get("/files");

// This function will be used to delete a file from the server
export const deleteFile = (id: string) => api.delete(`/file/${id}`);
