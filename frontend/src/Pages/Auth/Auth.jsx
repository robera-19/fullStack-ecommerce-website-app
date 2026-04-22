import classes from "./Signup.module.css";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <section className={classes.login}>
      {/*logo */}
      <Link>
        <img
          src="https://i.pinimg.com/736x/09/a1/1b/09a11bf7d3b75dd36cd3a2089828c7f3.jpg"
          alt="amazon logo"
        />
      </Link>

      {/*form */}

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <button className={classes.login__signInButton}>Sign In</button>
        </form>

        {/*terms and service agreement */}
        <p>
          By Signing-In you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Adds Notice.
        </p>

        {/*create account button */}
        <button className={classes.login__registerButton}>Create your amazon account</button>
      </div>
    </section>
  );
};

export default Auth;
