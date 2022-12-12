import React, { useState, useEffect, useCallback } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expireTime) => {
  const currentTime = new Date().getTime();
  const expTime = new Date(expireTime).getTime();
  const remTime = expTime - currentTime;
  return remTime;
};

const retriveStateToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedTime = localStorage.getItem("expTime");

  const remaingTime = calculateRemainingTime(storedTime);
  if (remaingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    return null;
  }
  return {
    token: storedToken,
    duration: remaingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStateToken();
  let logoutTimer;

  const inistialToken = tokenData ? tokenData.token : null;
  const [token, setToken] = useState(inistialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expTime", expirationTime);

    const remaingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remaingTime);
  };
  
  
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem('expTime')

    if(logoutTimer){
      clearTimeout(logoutTimer)
    }

  },[]); 


  useEffect(() =>{
    if(tokenData){
      logoutTimer = setTimeout(logoutHandler, tokenData.duration)
    }
  },[tokenData,logoutHandler])

  
  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
