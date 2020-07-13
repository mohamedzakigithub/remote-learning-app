import React, { createContext, useState } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ ...props }) => {
  const [userState, SetUserState] = useState({
    authenticated: false,
    name: "",
    email: "",
    photo: "",
    role: "",
  });

  return <Provider value={[userState, SetUserState]} {...props} />;
};

export { UserProvider, UserContext };
