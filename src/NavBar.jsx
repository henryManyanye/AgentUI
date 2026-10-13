import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

function NavBar() {
  const logout = (event) => {
    console.log(event);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    // localStorage.clear();
    window.location.href = "/";

    event.preventDefault();
  };

  return (
    <>
      <Nav className="justify-content-center navgradient" activeKey="/home">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="/Assets/CBZ Holdings Logo.png"
              alt="Logo"
              class="d-inline-block align-text-middle"
            />
            Agentic Report Generator
          </a>
        </div>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        {localStorage.getItem("email") != null ||
        localStorage.getItem("password") != null ? (
          <NavDropdown title="Tasks" id="basic-nav-dropdown">
            <NavDropdown.Item href="/chat">Generate Report</NavDropdown.Item>
            <NavDropdown.Item href="/chat">Schedule Report</NavDropdown.Item>
            <NavDropdown.Item href="/chat">Get Insights</NavDropdown.Item>
            <NavDropdown.Item href="/summariseReport">
              Summarise Report
            </NavDropdown.Item>
          </NavDropdown>
        ) : null}

        <NavDropdown title="Account" id="basic-nav-dropdown">
          {localStorage.getItem("email") === null ||
          localStorage.getItem("password") === null ? (
            <NavDropdown.Item href="/">Sign In</NavDropdown.Item>
          ) : (
            <NavDropdown.Item href="/" onClick={logout}>
              Sign Out
            </NavDropdown.Item>
          )}
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href="/about-us">About Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
