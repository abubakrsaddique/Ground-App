import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(true);

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("user");
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, loading, isLoggedIn, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
