import { Home } from "./pages/home/";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
