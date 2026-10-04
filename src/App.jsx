import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import Chat from "./Chat";
import FileUploadForm from "./FileUploadForm";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <div>Welcome</div> */}
      <LoginForm />
    </>
  );
};

export default App;
