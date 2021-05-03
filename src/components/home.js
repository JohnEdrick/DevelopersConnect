function Home() {
  return (
    <section className="home-section">
      <div className="nav-bar">
        <a href="/home">
          <h1>Dc.</h1>
        </a>
        <ul>
          <li>
            <a className="login" href="/login">
              Login
            </a>
          </li>
          <li>
            <a className="sign-up" href="signup">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
      <div className="center-body" id="Home">
        <h1>Developers Connect</h1>
        <p>
          Start sharing your ideas and collaborate with other developers around
          the world.
        </p>
        <a className="join-btn" href="#a">
          Join Now!
        </a>
      </div>
    </section>
  );
}

export default Home;
