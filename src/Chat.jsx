import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import NavBar from "./NavBar";
import urls from "./appSettings.json";
import { useState } from 'react'; 
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

function Chat() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [agentResponse, setAgentResponse] = useState("")

  const [showSpinner, setShowSpinner] = useState(false);

  const mystyle = {
    width: "50%",
    margin: "0 auto",
    marginTop: "50px",
  };

  // console.log(urls.Endpoints.Chat);

  async function send(formData) {
    const data = {
      request: Object.fromEntries(formData),
    };
    await axios
      .post(
        urls.Endpoints.Chat,
        // "https://mcpclientapi-dxgvhccyameqbxaf.southafricanorth-01.azurewebsites.net/Requests/GetSolution/",
        data.request,
      )
      // .post("http://localhost:5012/Requests/GetSolution/", data.request)
      .then((response) => {
        if(response.status != 200)
        {
          setAgentResponse("Make sure all the servers are running. Don't forget to enable CORS");
        }
        console.log(response);
        response = response.data.replace("*", "").replace("`", "");
        setAgentResponse(response);
        handleShow();
        setShowSpinner(false);
      });
  }

  const sendDataToServer = (event) => {
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));

    send(formData);

    setShowSpinner(true);

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
        <Button variant="primary" disabled style={{"float": "right", "display": showSpinner ? "inline-block": "none"}}>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agent Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{agentResponse}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Chat;
