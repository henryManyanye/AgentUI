import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; 

import App from "./App";
import Chat from "./Chat";
import FileUploadForm from "./FileUploadForm";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Chat />} />
      {/* <Route path="/chat" element={<Chat />} /> */}
      <Route path="/summariseReport" element={<FileUploadForm />} />
    </Routes>
  </BrowserRouter>,
);
