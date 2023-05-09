import { Route, Routes } from "react-router-dom";
import { NotePage } from "./components/Note-Page/NotePage";
import { About } from "./components/About-Page/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NotePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
