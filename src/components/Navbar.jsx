function Navbar(props) {
  let styles = props.darkMode ? "dark" : "";

  return (
    <nav className={styles}>
      <img src="/images/airbnb-logo.png" className="nav--logo" />
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
