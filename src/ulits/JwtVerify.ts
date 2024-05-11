import { jwtDecode } from "jwt-decode";

export const JwtTokenVerify = (token: string) => {
  console.log(token);
  return jwtDecode(token);
};
