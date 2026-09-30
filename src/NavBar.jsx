import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Tasks" id="basic-nav-dropdown">
          <NavDropdown.Item href="/chat">Generate Report</NavDropdown.Item>
          <NavDropdown.Item href="/chat">Schedule Report</NavDropdown.Item>
          <NavDropdown.Item href="/chat">Get Insights</NavDropdown.Item>
          <NavDropdown.Item href="/summariseReport">
            Summarise Report
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
