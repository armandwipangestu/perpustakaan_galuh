import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import Footer from "./components/Layouts/footer.layouts";
import Home from "./components/Home/main.home";

// Anggota
import DataAnggota from "./components/Anggota/daftar.anggota";
import TambahAnggota from "./components/Anggota/tambah2.anggota";
import EditAnggota from "./components/Anggota/edit.anggota";

// Pengarang
import DataPengarang from "./components/Master_Buku/pengarang/daftar.pengarang";
import TambahPengarang from "./components/Master_Buku/pengarang/tambah.pengarang";
import EditPengarang from "./components/Master_Buku/pengarang/edit.pengarang";

// Penerbit
import DataPenerbit from "./components/Master_Buku/penerbit/daftar.penerbit";
import TambahPenerbit from "./components/Master_Buku/penerbit/tambah.penerbit";

// Buku
import DataBuku from "./components/Master_Buku/buku/daftar.buku";
import TambahBuku from "./components/Master_Buku/buku/tambah.buku";
// import AddBook from "./components/Books/add.books";
import LoanBook from "./components/Borrows/add.borrows";
import ListBorrow from "./components/Borrows/list.borrows";

const App = () => {
  return (
    <MainLayouts>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/tambah_buku" element={<AddBook />} /> */}
          <Route path="/pinjam_buku" element={<LoanBook />} />

          {/* Anggota */}
          <Route path="/data_anggota" element={<DataAnggota />} />
          <Route path="/tambah_anggota" element={<TambahAnggota />} />
          <Route path="/edit_anggota/:id" element={<EditAnggota />} />

          {/* Pengarang */}
          <Route path="/data_pengarang" element={<DataPengarang />} />
          <Route path="/tambah_pengarang" element={<TambahPengarang />} />
          <Route path="/edit_pengarang/:id" element={<EditPengarang />} />

          {/* Penerbit */}
          <Route path="/data_penerbit" element={<DataPenerbit />} />
          <Route path="/tambah_penerbit" element={<TambahPenerbit />} />

          {/* Buku */}
          <Route path="/data_buku" element={<DataBuku />} />
          <Route path="/tambah_buku" element={<TambahBuku />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
