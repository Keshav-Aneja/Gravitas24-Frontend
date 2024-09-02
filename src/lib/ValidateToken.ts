import Cookies from "js-cookie";
export default function ValidateToken() {
  const token = Cookies.get("access_token");
  if (!token || token === "") {
    return false;
  }
  return true;
}
