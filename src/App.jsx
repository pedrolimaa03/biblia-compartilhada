import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books.jsx";
import BookPage from "./pages/BookPage.jsx";
import Capitulos from "./pages/Capitulos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/book/:id/capitulos" element={<Capitulos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
