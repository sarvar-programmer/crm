import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../../assets/images/white.png";
import Logins from "../../../assets/images/Login.png";
import "./Login.css";
import { CgEye, CgEyeAlt } from "react-icons/cg";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [sub, setSub] = useState("");
  const [success, setSuccess] = useState("");

  // Inputga faqat raqamlar va + belgisiga ruxsat berish uchun regex
  const handleChange = (e) => {
    const inputValue = e.target.value;

    const regex = /^[0-9+]*$/;

    // Faoliyatni faqat raqamlar va + belgisi bilan cheklash
    if (regex.test(inputValue)) {
      setValue(inputValue);
    }
    setText(inputValue)
    setSub(text.substring(0,4))
  };

  const navigate = useNavigate();
  const handleLogin = async () => {
    // Logika (masalan, validatsiya yoki autentifikatsiya)
    console.log(text);

    
    // alert(sub)

    // Asosiy sahifaga yo'naltirish
    if (sub === "+998" ) {
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
  // const handleLogins = async () => {
  //   try {
  //     const response = await fetch("https://infast.uz/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const result = await response.json();
  //     if (result.success) {
  //       navigate("/");
  //     } else {
  //       setError("Invalid username or password!");
  //     }
  //   } catch (error) {
  //     setError("An error occurred. Please try again later.");
  //   }
  // };

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
      <div className="w-1/2 flex items-center justify-center bg-white right_part">
        <form className="w-full max-w-md p-8 bg-gray-50 shadow-md rounded">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Kirish
          </h2>
          <div className="mb-4">
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
          <div className="mb-6">
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
                  <CgEyeAlt className="h-5 w-5 text-gray-500" />
                ) : (
                  <CgEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>

            <input type="checkbox" id="remember-me" />
            <label className="p-2">Meni eslab qoling!</label>
          </div>
          <div className="flex justify-center items-center ">
            <button
              type="button"
              onClick={handleLogin}
              // onChange={handleLogins}
              className="w-40 bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition sign_up"
            >
              Kirish <span>&rarr;</span>
            </button>
          </div>
          
        </form>
        <div className="absolute bottom-2">
            <p className="inline  ">
               Hisobingiz yo'qmi?
              <Link to="/SignIn" className="inline  p-3 sign_in">Ro'yxatdan o'ting</Link>
            </p>
          </div>
      </div>
    </div>
  );
};

export default Login;
