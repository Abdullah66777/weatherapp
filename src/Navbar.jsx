const Navbar = ({ city, state }) => {
  return (
    <nav className="navbar">
      <img src="/rb_4291.png" alt="weatherapp" />
      <h1>Climatic</h1>
      <p>
        {city}, {state}
      </p>
    </nav>
  );
};

export default Navbar;
