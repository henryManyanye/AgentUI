import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import NavBar from "./NavBar";

function Chat() {
  const mystyle = {
    width: "50%",
    margin: "0 auto",
    marginTop: "50px",
  };

  async function send(formData) {
    const data = {
      request: Object.fromEntries(formData),
    };
    await axios
      .post(
        "https://mcpclientapi-dxgvhccyameqbxaf.southafricanorth-01.azurewebsites.net/Requests/GetSolution/",
        data.request,
      )
      // .post("http://localhost:5012/Requests/GetSolution/", data.request)
      .then((response) => {
        console.log(response);
      });
  }

  const sendDataToServer = (event) => {
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));

    send(formData);

    event.preventDefault();
  };

  return (
    <>
      <NavBar />
      <Form style={mystyle} onSubmit={sendDataToServer}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please enter your request</Form.Label>
          <Form.Control as="textarea" rows={5} name="request" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </>
  );
}

export default Chat;
