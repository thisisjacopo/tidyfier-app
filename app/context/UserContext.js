import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
