import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  //* FUNCTIONS
  const handleFetchUser = async () => {
    console.log("inside fetch");
    try {
      const response = await axios.get("http://localhost:8000/auth/me");
      console.log(response.data);
    } catch (e) {
      console.error(e, "error at fetching user function");
    }
  };

  useEffect(() => {
    handleFetchUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        city,
        setCity,
        password,
        setPassword,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        handleFetchUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
