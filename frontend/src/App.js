import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import Footer from "./components/Layouts/footer.layouts";
import Home from "./components/Home/main.home";
import DataAnggota from "./components/Anggota/daftar.anggota";
import TambahAnggota from "./components/Anggota/tambah2.anggota";
import DataPengarang from "./components/Master_Buku/pengarang/daftar.pengarang";
import TambahPengarang from "./components/Master_Buku/pengarang/tambah.pengarang";
import AddBook from "./components/Books/add.books";
import LoanBook from "./components/Borrows/add.borrows";
import ListBorrow from "./components/Borrows/list.borrows";

const App = () => {
  return (
    <MainLayouts>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tambah_buku" element={<AddBook />} />
          <Route path="/pinjam_buku" element={<LoanBook />} />
          <Route path="/data_anggota" element={<DataAnggota />} />
          <Route path="/tambah_anggota" element={<TambahAnggota />} />
          <Route path="/data_pengarang" element={<DataPengarang />} />
          <Route path="/tambah_pengarang" element={<TambahPengarang />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
