import axios from "axios";
import { errorToast, successToast } from "./toastify";

export const handleApiError = (error) => {
  if (axios.isCancel(error)) return;
  if (error.response?.data?.message) {
    return errorToast(error.response.data.message);
  }
  return errorToast("Something went wrong");
};

export const parseInputType = (type, e) => {
  if (type === "checkbox" && "checked" in e.target) return e.target.checked;
  if (type === "number") {
    const value = parseFloat(e.target.value.trim());
    return isNaN(value) ? "" : value;
  }
  if (type === "file" && "files" in e.target) return e.target.files;
  if (type === "list") return e.target.value ?? [];
  return e.target.value;
};

export const copyToClipboard = (val) => {
  if (!navigator.clipboard) return errorToast("Cannot copy!");
  navigator.clipboard.writeText(val);
  successToast("Coppied!");
};
