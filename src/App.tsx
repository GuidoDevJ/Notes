import { Route, Routes } from "react-router-dom";
import { NotePage } from "./components/Note-Page/NotePage";
import { About } from "./components/About-Page/About";
import { LoginPage } from "./components/Login-Page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<NotePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
