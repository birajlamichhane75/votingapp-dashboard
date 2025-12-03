import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PERSIST_KEY } from "../utils/config";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.authState);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key && e.key.indexOf(PERSIST_KEY) < 0) return;

      // const auth = e.newValue ? JSON.parse(JSON.parse(e.newValue).auth) : null;

      // if (auth) dispatch(rehydrateAuth(auth));
    };

    window.addEventListener("storage", handleStorageChange);

    if (!authSelector.token || !authSelector.isLoggedIn) {
      navigate(`/?redirect=${encodeURIComponent(navigate.location.pathname)}`);
    }

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [authSelector.token, authSelector.isLoggedIn, dispatch, navigate]);

  if (!authSelector.token || !authSelector.isLoggedIn) {
    navigate(`/?redirect=${encodeURIComponent(navigate.location.pathname)}`);
    return null;
  }

  return children;
};

export default Auth;
