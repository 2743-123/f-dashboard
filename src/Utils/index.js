export const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };
  
  export const clearAccessToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.clear();
  };
  
  export const setAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
  };
  
  export const isLoggedIn = () => {
    const accessToken = getAccessToken();
    return !!accessToken;
  };
  