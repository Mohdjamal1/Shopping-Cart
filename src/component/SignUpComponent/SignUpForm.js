import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cnfpassword, setCnfPassword] = useState("");
  const [Error, setError] = useState({});
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    setError({
      ...Error,
      name: "",
      email: "",
      password: "",
      cnfPass: "",
      deferror: ""
    });
    if (name && email && password.length >= 6 && password === Cnfpassword) {
      try {
        //create User account
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      } catch (err) {
        console.log(err);
        setError({ ...Error, deferror: err.message });
      }
    } else if (name.trim() === "") {
      setError({
        ...Error,
        name: "Name can not be empty",
        email: "",
        password: "",
        cnfPass: "",
        deferror: ""
      });
    } else if (email.trim() === "") {
      setError({
        ...Error,
        email: "Email can not be empty",
        name: "",
        password: "",
        cnfPass: "",
        deferror: ""
      });
    } else if (password.trim() === "" || password.length < 6) {
      setError({
        ...Error,
        password: "Password should be at least 6 character",
        email: "",
        name: "",
        cnfPass: "",
        deferror: ""
      });
    } else if (Cnfpassword.trim() === "" || Cnfpassword !== password) {
      setError({
        ...Error,
        cnfPass: "Confirm password and Password are not equal",
        email: "",
        password: "",
        name: "",
        deferror: ""
      });
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center pt-3"
      style={{
        backgroundColor: "#ced4da",
        height: "88vh"
      }}
    >
      <form className="col-md-5" onSubmit={createUser}>
        <h2>Sign-Up Here</h2>
        <label className="form-label mt-3">Full Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {Error.name !== "" ? <div class="text-danger">{Error.name}</div> : ""}

        <label className="form-label mt-3">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {Error.email !== "" ? <div class="text-danger">{Error.email}</div> : ""}

        <label className="form-label mt-3">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {Error.password !== "" ? (
          <div class="text-danger">{Error.password}</div>
        ) : (
          ""
        )}

        <label className="form-label mt-3">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          value={Cnfpassword}
          onChange={(e) => setCnfPassword(e.target.value)}
        />
        {Error.deferror === "" ? (
          <div class="text-danger">{Error.cnfPass}</div>
        ) : (
          <div class="text-danger">{Error.deferror}</div>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          SignUp
        </button>
      </form>
      <NavLink to="/login">
        {" "}
        Already have an Account? Click here to Login
      </NavLink>
    </div>
  );
};

export default SignUp;
