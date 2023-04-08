import React, { useEffect, useState } from "react";
import "./Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setCart } from "../../redux/auth/authSlice";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get("https://taupe-raven-gear.cyclic.app/api/cart", {
        headers: {
          Authorization: user?.token,
        },
      })
      .then((res) => {
        dispatch(setCart(res.data.items));
      })
      .catch((err) => console.log(err));
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const logindata = {
      email: email,
      password: password,
    };
    if (email === "" || password === "") {
      alert("Please enter all fields.");
      return;
    }

    fetch("https://taupe-raven-gear.cyclic.app/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(logindata),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(loginUser({ user: res, cart: [] }));
        localStorage.setItem("Token", res.token);
        if (email === "adminglad@gmail.com" && password === "adminglad2023") {
          navigate("/admin"); // Redirect to admin panel
        } else {
          alert("Login Successful");
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          alert("Email not found.");
          navigate("/signup");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="login-container">
      <div className="left-container">
        <div className="adorama-container">
          <h1>ElectroGlad</h1>
          <p>
            New Customer?{" "}
            <Link className="signup-link" to="/signup">
              CREATE AN ACCOUNT
            </Link>
          </p>
        </div>
      </div>
      <div className="right-container">
        <div className="login-form-container">
          <h2>Sign In</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email Address"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              required
            />
            <button id="loginbtn" type="submit">
              Sign in
            </button>
          </form>
          <div className="social-login-icons">
            <div className="or-separator">
              <hr className="separator-line" />
              <span>OR</span>
              <hr className="separator-line" />
            </div>
            <div className="social-login-button apple">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/apple-1464534-1239445.png?f=avif&w=128"
                alt="Apple"
              />
              <span>Sign in with Apple</span>
            </div>
            <div className="social-login-button google">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/google-160-189824.png?f=avif&w=128"
                alt="Google"
              />
              <span>Sign in with Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
