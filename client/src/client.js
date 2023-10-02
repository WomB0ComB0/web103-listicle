// import axios from "axios";
// import { options_title } from "../../server/config/api";
export const URL = import.meta.env.VITE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;
export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};