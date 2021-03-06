import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
import { getFirebaseIdToken } from "../util/firebaseFunctions";
import gif from "../images/blue.png";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ id: 0 });
  const [token, setToken] = useState(null);

  const updateUser = (user) => {
    if (user) {
      const { email, uid } = user;
      const lastLogin = user.metadata.lastLogin;
      setCurrentUser({ email, lastLogin, id: uid });
      getFirebaseIdToken().then((token) => {
        setToken(token);
        setLoading(false);
      });
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
    return unsubscribe;
  }, []);

  if (loading)
    return (
      <div className="loading">
        <img id="loadBird" alt="" src={gif} />
      </div>
    );
  return (
    <AuthContext.Provider value={{ currentUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
