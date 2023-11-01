import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError({
      ...Error,
      email: "",
      password: "",
      deferror: ""
    });
    if (email && password) {
      try {
        // user authentication
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user);
        navigate("/profile");
      } catch (err) {
        console.log(err);
        setError({ ...Error, email: "", password: "", deferror: err.message });
      }
    } else if (email.trim() === "") {
      setError({
        ...Error,
        email: "Email can not be empty",
        password: "",
        deferror: ""
      });
    } else if (password.trim() === "") {
      setError({
        ...Error,
        email: "",
        password: "Password can not be empty",
        deferror: ""
      });
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center pt-5"
      style={{
        backgroundColor: "#ced4da",
        height: "88vh"
      }}
    >
      <form class="col-md-5" onSubmit={handleLogin}>
        <h2 className="">Login Here</h2>

        <label htmlFor="validationCustom01" class="form-label mt-3">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="validationCustom01"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {Error.email && <div class="text-danger">{Error.email}</div>}

        <label for="validationCustom02" class="form-label mt-3">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="validationCustom02"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {Error.deferror !== "" ? (
          <div class="text-danger">{Error.deferror}</div>
        ) : (
          <div class="text-danger">{Error.password}</div>
        )}

        <button type="submit" class="btn btn-primary mt-3">
          login
        </button>
      </form>
      <NavLink to="/register" className="mt-3 pb-5">
        {" "}
        Don't have an account? Click here to Signup
      </NavLink>
    </div>
  );
};

export default Login;
