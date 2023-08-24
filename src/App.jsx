import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import Register from "./Pages/Register";

export default function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<IndexPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}
