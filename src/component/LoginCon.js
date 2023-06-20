import React from "react";
import logo from "../asset/logo.svg";
import { useState } from "react";

const LoginCon = () => {
  const [mail, setMail] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mail) {
      // logic to perform with the username of the user or mail
      setErr(false);
      console.log(mail);
    } else {
        // the error state
      setErr("Enter a valid email address, phone number, or Skype name.");
    }
  };
  return (
    <main>
      <div className="login-inner">
        <img src={logo} alt="logo-img" className="img-fluid"></img>
        <div className="slide-in">
        <h1 className="title">Sign in</h1>
        {!mail && <p className="err-mess">{err}</p>}
        <input
          type="email"
          className={`form-control login-input ${
            !mail && err ? "err-boarder" : "err-boarder-okay"
          }`}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email, phone, or Skype"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        ></input>
        <div className="d-flex gap-1 no-acc">
          <p>No account?</p>
          <a href="" className="links">
            Create one!
          </a>
        </div>
        <a href="" className="no-acc acc-access links">
          Can’t access your account?
        </a>
        <div className="submit-btn">
          <button>Back</button>
          <button onClick={handleSubmit}>Next</button>
        </div>
        </div>
      </div>
    </main>
  );
};

export default LoginCon;
