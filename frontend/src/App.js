import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import Footer from "./components/Layouts/footer.layouts";
import Home from "./components/Home/main.home";
import AddBook from "./components/Books/add.books";

const App = () => {
  return (
    <MainLayouts>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tambah_buku" element={<AddBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
