import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav>
      <div  className="navbar">
      <img className="img-style" alt="logo" src={logo} />
      </div>
    </nav>
  );
}

export default Navbar;
