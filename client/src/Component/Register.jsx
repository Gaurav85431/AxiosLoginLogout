import React, { useEffect, useState } from "react";
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  /* submitForm ko asyn await se
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request when the form is submitted
      const response = await axios.post('http://localhost:3000/api/register', formData);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('There was an error making the POST request!', error);
    }
  };
*/

  const SubmitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/register", data)
      .then((res) => {
        console.log("res is ", res);
        alert("Data inserted");
      })
      .catch((err) => {
        console.log("Error  is ", err);
        alert("Error occur");
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const ClearForm = (e) => {
    e.preventDefault();
    setData({ name: "", email: "", password: "", mobile: "" });
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={SubmitForm}>
        <label>Name :</label>
        <input
          type="text"
          value={data.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>Email :</label>
        <input
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <br />
        <label>Mobile</label>
        <input
          type="phone"
          value={data.mobile}
          name="mobile"
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={data.password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <button>Register</button>
        <button onClick={ClearForm}>Clear</button>
      </form>
    </>
  );
}

export default Register;
