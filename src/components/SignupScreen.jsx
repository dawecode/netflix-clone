import React, { useRef } from "react";
import { auth } from "../firebase/config";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signupScreen">
      <form>
        <h1> Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signupScreen__grey">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;