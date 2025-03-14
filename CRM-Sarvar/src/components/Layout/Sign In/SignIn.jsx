import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../../assets/images/white.png";
import Logins from "../../../assets/images/Login.png";
import "./SignIn.css";
import { CgEye, CgEyeAlt } from "react-icons/cg";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [againpasswordVisible, setagainPasswordVisible] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [sub, setSub] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9+]*$/;
    if (regex.test(inputValue)) {
      setValue(inputValue);
    }
    setText(inputValue)
    setSub(text.substring(0,4))
   
  };
  
  const navigate = useNavigate();
  const handleLogin = async () => {
    
    if (sub === "+998" && password===confirmPassword) {
      navigate("/");
    }  try {
      const response = await fetch("https://infast.uz/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      if (result.success) {
        navigate("/");
      } else {
        setError("Invalid username or password!");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
   
  };
  function PasswordMatchChecker() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");}
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
  
      // Har o'zgarishda tekshirish
      if (e.target.value !== password) {
        setErrorMessage("Parol va qayta parol mos emas!");
      } else {
        setErrorMessage("");
      }
    };
  return (
    <div className="min-h-screen flex body">
      <div className="w-1/2 bg-cover bg-center left_part">
        <div className="h-screen bg-gray-100 login_left ">
          <div className="absolute top-4  top_part">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 brend  inline-block align-middle "
            />
            <h2 className=" inline-block align-middle ml-4 text-3xl font-semibold">
              InFast IT-Company
            </h2>
          </div>

          <div className=" items-center justify-center h-full bottom_part">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-gray-700 bottom_part">
                InFast IT-Company <br /> CRM-tizimi
              </h1>
            </div>
            <div className="container mx-auto img_part">
              <img src={Logins} className=" inline-block align-middle logins" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center container mx-auto mt-0 h-auto  space-y-1 bg-white right_part">
      <form className="w-full max-w-md  bg-gray-50 shadow-md p-2 rounded">
          <h2 className="text-2xl font-bold mb-6 text-center  text-gray-700">
            Ro'yxatdan o'tish
          </h2>
          <div className="mb-4 p-1">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="Telefon"
            >
              Telefon raqam
            </label>
            <input
              id="email"
              type="text"
              value={value}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="+998"
              required
            />
          </div>
          <div className="mb-6 p-1">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Parol
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="parol"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3.5 "
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <CgEyeAlt className="h-5 w-5 text-gray-500"/>
                ) : (
                  <CgEye className="h-5 w-5 text-gray-500"/>
                )}
              </button>
            </div>
          </div>
          <div className="mb-6 p-1">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Parolni tasdiqlash
            </label>
            <div className="relative p-1">
              <input
                id="agaipassword"
                type={againpasswordVisible ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="parolni qayta kiriting"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3.5 "
                onClick={() => setagainPasswordVisible(!againpasswordVisible)}
              >
                {againpasswordVisible ? (
                  <CgEyeAlt className="h-5 w-5 text-gray-500"/>
                ) : (
                  <CgEye className="h-5 w-5 text-gray-500"/>
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center p-2 registr">
            <button
              type="button"
              onClick={handleLogin}
              className="w-40 bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition sign_up">
              Ro'yxatdan o'tish
            </button>
          </div>
        </form>
        <div className="absolute bottom-2 p-1/2">
            <p className="inline  ">
               Hisobingiz bormi?
              <Link to="/Login" className="inline  p-3 sign_in">Tizimga kirish</Link>
            </p>
          </div>
      </div>
    </div>
  );
};
export default SignIn;
