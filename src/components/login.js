function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h3>Sign in</h3>
        <form>
          <input type="text" placeholder="Username/Email"></input>
          <input type="text" placeholder="Password"></input>
          <a href="#e">
            <u>Forgot Password?</u>
          </a>
          <button>Submit</button>
          <hr />
          <a href="#e" className="create-account">
            Create an account
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
