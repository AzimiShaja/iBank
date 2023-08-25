import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";

export default function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<IndexPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}
