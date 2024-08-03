import React, { useState } from "react";
import InputComponent from "../components/inputComponent";
import ButtonComponent from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import img from "../assets/img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/userSlice";

function LoginPage() {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const { loading, error } = useSelector((state) => state.user);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //redux states
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      }
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(e.target.value) && password.length > 8) {
      setIsDisabled(false);
      setEmailError("");
    } else {
      setIsDisabled(true);
      setEmailError("Incorrect email address.");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 8 && email.length > 0) {
      setIsDisabled(false);
      setPassError("");
    } else {
      setIsDisabled(true);
      setPassError("Password should be more than 8 digits");
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen md:flex-row gap-3 justify-center items-center bg-white shadow-md p-5 m-3 rounded-lg">
      <div
        className="w-[100%] md:w-[660px] h-full bg-blue-950 rounded-md"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-[100%] md:w-[672px] h-full rounded-md flex flex-col items-center">
        <div className="flex md:flex-row justify-around items-center w-full gap-10">
          <div>
            <h1 className="text-blue-950 font-bold text-2xl">Orbut</h1>
          </div>
          <div className=" flex items-center gap-3">
            <p className="hidden md:block">Don't have an account yet?</p>
            <button className="border rounded-full py-2 p-4 text-blue-700 hover:bg-blue-50 duration-700">
              Sign up now
            </button>
          </div>
        </div>
        <div className="w-full md:w-[60%] h-[350px] mt-11 md:mt-[120px] text-center">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to manage your Campaigns.</p>
          <form action="" onSubmit={handleSubmit}>
            <InputComponent
              type="email"
              hintText="Email Address"
              error={emailError}
              value={email}
              onChange={handleEmailChange}
            />
            <InputComponent
              type="password"
              hintText="Password"
              error={passError}
              value={password}
              onChange={handlePasswordChange}
            />
            <ButtonComponent
              text={loading ? "Logging in..." : "Login"}
              isDisabled={isDisabled}
            />
          </form>

          <div className="mt-4 text-blue-950 font-bold mb-5">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          {error && (
            <div
              className="py-4 px-10 bg-red-200 border border-red-600 text-red-400 rounded-lg "
              role="alert"
            >
              {error}
            </div>
          )}
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
}

export default LoginPage;
