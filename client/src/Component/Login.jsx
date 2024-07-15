/*
import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData({ email: "", password: "" });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", data);
      console.log("Res is ", res);
      alert("Login successfully");
    } catch (error) {
      console.log("error");
      alert("error while login");
    }
  };

  /*
  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/login", data)
      .then((res) => {
        console.log("Res is ", res);
        alert("Login successfully");
      })
      .catch((error) => {
        console.log("error");
        alert("error while login");
      });
  };*n/

  return (
    <>
      <form onSubmit={submitForm}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />

        <button>Login</button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}

export default Login;
*/

import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    e.preventDefault(); // Prevents the default behavior of the button
    setData({ email: "", password: "" }); // Resets the state
  };

  const submitForm = async (e) => {
    e.preventDefault(); // Prevents the default form submission
    try {
      const res = await axios.post("http://localhost:3000/api/login", data);
      console.log("Res is ", res);
      alert("Login successfully");

      const token = res.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("error");
      alert("error while login");
    }
  };

  /*
  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/login", data)
      .then((res) => {
        console.log("Res is ", res);
        alert("Login successfully");
      })
      .catch((error) => {
        console.log("error");
        alert("error while login");
      });
  };*/

  return (
    <>
      <form onSubmit={submitForm}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Login</button>
        <button type="button" onClick={handleReset}>
          {/* Added type="button" to prevent it from submitting the form */}
          Reset
        </button>
      </form>
    </>
  );
}

export default Login;
