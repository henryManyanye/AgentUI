import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import  HashRouter  from "react-router-dom";

import App from "./App";
import Chat from "./Chat";
import FileUploadForm from "./FileUploadForm";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/summariseReport" element={<FileUploadForm />} />
    </Routes>
  </HashRouter>,
);
