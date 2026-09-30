import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
  const mystyle = {
    width: "50%",
    margin: "0 auto",
    marginTop: "50px",
  };

  const sendDataToServer = (event) => {
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));

    axios
      .get(`http://localhost:5271/Reports/${props.name}`)
      .then((response) => {
        console.log(response);
        setShowA(true);
      });

    event.preventDefault();
  };

  return (
    <Form style={mystyle} onSubmit={sendDataToServer}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
