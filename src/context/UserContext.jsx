import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userProfileImage, setuserProfileImage] = useState(null);
  const [userProfilePreview, setuserProfilePreview] = useState(null);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        userEmail,
        setUserEmail,
        userProfileImage,
        setuserProfileImage,
        userProfilePreview,
        setuserProfilePreview,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
