import { Route, Routes } from "react-router-dom";
import { NotePage } from "./components/Note-Page/NotePage";
import { About } from "./components/About-Page/About";
import { LoginPage } from "./components/Login-Page";
import { CreateUser } from "./components/Create-User";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<NotePage />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </>
  );
}

export default App;
