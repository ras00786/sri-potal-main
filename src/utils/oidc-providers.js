import { jwtDecode } from 'jwt-decode';

export const checkValidToken = (token) => {
    if (!token) return false;
    const decodedToken = jwtDecode(token);
    const exp = decodedToken?.exp
    return Date.now() >= exp * 1000 ? false : true;
  };
