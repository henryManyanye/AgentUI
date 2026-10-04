import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import Chat from "./Chat";
import FileUploadForm from "./FileUploadForm";
import HomePage from "./HomePage";

const App = () => {
  return ( 
    (!localStorage.getItem("email")  || !localStorage.getItem("password")) ? 
      (
        <>
          <NavBar /> 
         <LoginForm />
        </>
      ) 
      : 
      (
        <>
          <HomePage />
        </>
      )
    
 
  );
};

export default App;
