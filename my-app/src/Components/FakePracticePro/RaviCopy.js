import React from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
// import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login1 = () => {
  const [store, setStore] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const log = () => {
    axios.post('https://dummyjson.com/auth/login', {
      username: 'kminchelle',
      password: '0lelplR'
    })
      .then((Response) => {
        console.log(Response.data);
        localStorage.setItem("token", Response.data.token);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flipcard">
        <h1 className="yello">
          <i  class="fa-solid fa-cart-shopping"></i> <span style={{color:"black"}}>FlipKart </span> 
        </h1>
        <br></br>
        <div>
          <Input
            onChange={(e) => {
              setStore((Prevstate) => ({
                ...Prevstate,
                email: e.target.value,
              }));
            }}
            type="email"
            placeholder="Phone Number Or Email"
          />
          <br></br>
          <Input
            onChange={(e) => {
              setStore((Prevstate) => ({
                ...Prevstate,
                Password: e.target.value,
              }));
            }}
            type="password"
            placeholder="Password"
          />
          <br></br> <br></br>
          <Button onClick={log} variant="contained" disableElevation>
            log in
          </Button>
          <br></br>
          <br></br>
          <h3 className="icon">
            <i class="fa-brands fa-facebook"></i> Log in with facebook
          </h3>
          <br></br>
          <h3>Forget Password?</h3>
        </div>
      </div>
    </>
  );
};

export default Login1;