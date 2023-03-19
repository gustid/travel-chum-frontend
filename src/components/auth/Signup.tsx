import { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit: boolean = !!email && !!firstName && !!lastName && !!password;

  const resetForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  const onSubmit = async () => {
    try {
      const response = fetch("http://localhost:8080/api/v1/users/signup", {
        method: "POST",
        body: JSON.stringify({ email, firstName, lastName, password }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then((res) => res.json());

      resetForm();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <form>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              name="email"
            ></input>
          </div>

          <div>
            <label htmlFor="firstName">first name</label>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              id="firstName"
              name="firstName"
            ></input>
          </div>

          <div>
            <label htmlFor="lastName">last name</label>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              id="lastName"
              name="lastName"
            ></input>
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              name="password"
            ></input>
          </div>

          <button type="button" onClick={onSubmit} disabled={!canSubmit}>
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
