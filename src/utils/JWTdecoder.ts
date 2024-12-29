import { jwtDecode } from "jwt-decode";

function JWTdecoder(jwt: string) {
  const decoded = jwtDecode(jwt);
  return decoded;
}

export default JWTdecoder;
