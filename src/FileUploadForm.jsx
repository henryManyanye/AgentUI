import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import NavBar from "./NavBar";
import urls from "./appSettings.json";

function FileUploadForm() {
  const mystyle = {
    width: "50%",
    margin: "0 auto",
    marginTop: "50px",
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
  }

  // console.log(document.querySelector("#fileInput").files[0]);

  const sendDataToServer = (event) => {
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));

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
      </Form>
    </>
  );
}

export default FileUploadForm;
