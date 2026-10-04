import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import NavBar from "./NavBar";
import urls from "./appSettings.json";
import { useState } from 'react'; 
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

function FileUploadForm() {
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

  const displayWhiteSpace = {
    whiteSpace: "pre-line",
  };

  // console.log(urls.Endpoints.FileUpload);

  async function send() {
    let response = await axios.postForm(
      urls.Endpoints.FileUpload,
      // "https://filesearchapi-c4hfc8a3bzecdubf.southafricanorth-01.azurewebsites.net/Requests/SummariseReport/",
      // "http://localhost:5012/Requests/SummariseReport/",
      {
        description: "Report",
        file: document.querySelector("#fileInput").files[0],

        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          console.log(`Upload progress: ${percent}%`);
        },
      },
    );

    console.log(response.data);
    response = response.data.replace("*", "").replace("`", "").replace("**", "");
    setAgentResponse(response);
    handleShow();
    setShowSpinner(false);
  }

  // console.log(document.querySelector("#fileInput").files[0]);

  const sendDataToServer = (event) => {
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));

    setShowSpinner(true);

    send();

    // axios
    //   .get(`http://localhost:5012/Requests/SummariseReport/`)
    //   .then((response) => {
    //     console.log(response);
    //     setShowA(true);
    //   });

    event.preventDefault();
  };

  // DONT FORGET THE NAME ATTRIBUTE WHEN DEALING WITH FORMS
  return (
    <>
      <NavBar />
      <Form style={mystyle} onSubmit={sendDataToServer}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload a report to summarise</Form.Label>
          <Form.Control
            type="file"
            id="fileInput"
            name="file"
            required
            accept=".pdf"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Summarise
        </Button>
         <Button variant="primary" disabled style={{"float": "right", "display": showSpinner ? "inline-block": "none"}}>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Reasoning...
      </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agent Response</Modal.Title>
        </Modal.Header>
        <Modal.Body style={displayWhiteSpace}>
          <p>{agentResponse}</p>
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

export default FileUploadForm;
