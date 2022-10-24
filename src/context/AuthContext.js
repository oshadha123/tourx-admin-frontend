import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from ".././config";
import ShowToast from "../components/ShowToast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(0);
  const [success, setSuccess] = useState(0);
  const [comp, setComp] = useState("");
  const [email, setEmail] = useState("");
  //Login page
  const login = (email, password) => {
    console.log(email);
    console.log(password);

    setIsLoading(true);

    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        let userInfo = res.data;

        setSuccess(userInfo.success);
        if (res.data.success == 1) {
          setUserInfo(userInfo);
          setUserId(userInfo.userId);
          setUserToken(userInfo.token);
          useEffect(() => {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
          }, [userInfo]);

          localStorage.setItem("userToken", userInfo.token);
        } else {
          setError(1);
          setComp(ShowToast);
        }
        console.log("User info" + userInfo.token);
      })
      .catch((e) => {
        setError(1);
        setSuccess(0);
        console.log(`Logging error ${e}`);
      });
    // setUserToken('sshydggf');
    // AsyncStorage.setItem('userToken','sshydggf');

    setIsLoading(false);
  };

  // Register page

  const register = (
    firstName,
    lastName,
    email,
    password,
    profilePic,
    roleId
  ) => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(profilePic);
    console.log(roleId);
    setEmail(email);
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, {
        firstName,
        lastName,
        email,
        password,
        profilePic,
        roleId,
      })
      .then((res) => {
        console.log(res.data);
        // let userInfo = res.data;

        // setUserInfo(userInfo);
        // setUserId(userInfo.userId);
        // setUserToken(userInfo.token)
        // AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));

        // AsyncStorage.setItem('userToken',userInfo.token);
        // console.log('User info'+userInfo.token)
      })
      .catch((e) => {
        console.log(`Logging error ${e}`);
      });
    // setUserToken('sshydggf');
    // AsyncStorage.setItem('userToken','sshydggf');

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setSuccess(0);
    setError(0);
    setComp("");
    localStorage.removeItem("userInfo");

    localStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = localStorage.getItem("userInfo");
      let userToken = localStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }

      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        userInfo,
        getLeaderboard,
        leaderboardInfo,
        getYourTours,
        yourToursInfo,
        register,
        error,
        success,
        comp,
        email,
        getLeaderboard2,
        leaderboardInfo2,
        getFindTours,
        findToursInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
