import React, { useState , useContext  } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [wrongAttempts, setWrongAttempts]=useState();
  const { setAuthState } = useContext(AuthContext);

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
        // console.log(response.data);
        // setWrongAttempts(1);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        // console.log(response.data);
        window.location="/";
      }
    });
  };
  return (
    <div className="loginContainer">
      <label>Username:</label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}> Login </button>
    </div>
  );
  // (wrongAttempts)>5 (
  //   <div>
  //     <h1> Try after 24 hrs !!!</h1>
  //   </div>
  // ):(

  // )
}

export default Login;