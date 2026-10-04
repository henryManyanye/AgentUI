import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from 'react'; 
import Modal from 'react-bootstrap/Modal';

function LoginForm() {
  const [show, setShow] = useState(false);
  const [authenticationMessage, setAuthenticationMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mystyle = {
    width: "50%",
    margin: "0 auto",
    marginTop: "50px",
  };

  const sendDataToServer = (event) => {
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));

    const credentials = Object.fromEntries(formData);
    if(credentials.email === "admin@example.com" && credentials.password === "Password123") {
      setAuthenticationMessage("Login successful!");
      localStorage.setItem("email", credentials.email); 
      localStorage.setItem("password", credentials.password);
      handleShow();
      window.location.href = "/homepage";
    }else{
      setAuthenticationMessage("Invalid credentials");
      handleShow();
    }

    // axios
    //   .get(`http://localhost:5271/Reports/${props.name}`)
    //   .then((response) => {
    //     console.log(response); 
    //   }); 

    event.preventDefault();
  };

  return (
    <>
    <Form style={mystyle} onSubmit={sendDataToServer}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required name="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Authentication Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{authenticationMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default LoginForm;
