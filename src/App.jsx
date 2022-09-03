import { Home } from "./pages/home/";
import { Gallery } from "./pages/gallery";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/punks" element={<Gallery />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
