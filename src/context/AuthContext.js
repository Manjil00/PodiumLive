import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = window.localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => {
    return window.localStorage.getItem("token") || "";
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");

    // Clear the current user state
    setCurrentUser(null);
    //navigate to the login page
    window.location.href = "/login";
  };

  useEffect(() => {
    // Save the user data to localStorage whenever currentUser changes
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    // Save the token to localStorage whenever token changes
    window.localStorage.setItem("token", token);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, token, setToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;