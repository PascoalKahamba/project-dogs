import React, { createContext, useState } from "react";
import { TOKEN_POST } from "./api";
export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem("token", token);
  }
  return (
    <UserContext.Provider value={{ usuario: "Pascoal" }}>
      {" "}
      {children}
    </UserContext.Provider>
  );
};
