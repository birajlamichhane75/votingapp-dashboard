import React, { useState } from "react";
import {  LOGO } from "../../constants/images";
import { UIInput } from "../../ui/uiinput/UIInput";
import UIButton from "../../ui/uibutton/UIButton";

export const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const value = e.target.value;
    setState((prev) => ({ ...prev, [e.target.name]: value ?? "" }));
    value &&
      setError((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          // backgroundImage: `url(${BG})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <div className="loginform">
          <div className="loginform-loginformtop">
            <div className="loginform-loginformtop--loginformtoptext">
              <h1>Welcome Back</h1>
              <h2>
                Sign in to <strong>FDAPP</strong> Dashboard
              </h2>
            </div>
            <div className="loginform-loginformtop--loginformtopimage">
              <div className="loginform-loginformtop--loginformtopimage_image">
                <img src={LOGO} alt="" height="100%" width="100%" />
              </div>
            </div>
          </div>

          <form className="loginform-loginformform">
            <div className="loginform-loginformform--flex">
              <UIInput
                id="email"
                name="email"
                isRequired
                label="Email"
                placeholder="eg. xyz@gmail.com"
                type="email"
                error={error.email}
                onChange={handleInput}
                value={state.email}
              />

              <UIInput
                id="password"
                name="password"
                isRequired
                label="Password"
                placeholder="eg. ********"
                type="password"
                error={error.password}
                onChange={handleInput}
                value={state.password}
              />
            </div>
            <div className="loginform-loginformform--submit">
              <UIButton label="Login" type="primary duotone" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
