import { Home } from "./pages/home/";
import { Punks } from "./pages/punks";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/punks" element={<Punks />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
