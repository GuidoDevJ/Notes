import { Route, Routes } from "react-router-dom";
import { NotePage } from "./components/Note-Page/NotePage";
import { About } from "./components/About-Page/About";
import { LoginPage } from "./components/Login-Page";
import { CreateUser } from "./components/Create-User";
import { PrivateRoute } from "./components/Private-Route/PrivateRoute";
import { PublicRoute } from "./components/Public-Route/PublicRoute";
function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/notes" element={<NotePage />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/create" element={<CreateUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
