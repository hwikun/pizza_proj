import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userNick, setUserNick] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    console.log("user " + user);
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser) {
        console.log("아이디:", parsedUser.id);
        console.log("닉네임:", parsedUser.nick);
        parsedUser.id && setUserId(parsedUser.id);
        parsedUser.nick && setUserNick(parsedUser.nick);
        setIsLogin(true);
      }
    }
  }, []);

  const clear = () => {
    sessionStorage.removeItem("user");
    setUserId(null);
    setUserNick(null);
    setIsLogin(false);
  };

  const login = async ({ id, pw }) => {
    const res = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, pw }),
    });
    const data = await res.json();
    console.log("data", JSON.stringify(data));

    if (data.ok) {
      sessionStorage.setItem("user", JSON.stringify(data.user));
      setUserId(data.user.id);
      setUserNick(data.user.nick);
      setIsLogin(true);
      return true;
    } else {
      clear();
      return false;
    }
  };

  const logout = () => {
    clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ userId, userNick, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
