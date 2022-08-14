import React, { useState } from "react";

export const SignupContext = React.createContext();

const SignupProvider = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SignupContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        city,
        setCity,
        password,
        setPassword,
      }}
    >
      {props.children}
    </SignupContext.Provider>
  );
};

export default SignupProvider;
