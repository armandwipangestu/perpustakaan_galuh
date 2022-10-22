import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import Footer from "./components/Layouts/footer.layouts";
import Home from "./components/Home/main.home";

// Anggota
import DataAnggota from "./components/Anggota/daftar.anggota";
import TambahAnggota from "./components/Anggota/tambah.anggota";
import EditAnggota from "./components/Anggota/edit.anggota";

// Pengarang
import DataPengarang from "./components/Master_Buku/pengarang/daftar.pengarang";
import TambahPengarang from "./components/Master_Buku/pengarang/tambah.pengarang";
import EditPengarang from "./components/Master_Buku/pengarang/edit.pengarang";

// Penerbit
import DataPenerbit from "./components/Master_Buku/penerbit/daftar.penerbit";
import TambahPenerbit from "./components/Master_Buku/penerbit/tambah.penerbit";
import EditPenerbit from "./components/Master_Buku/penerbit/edit.penerbit";

// Buku
import DataBuku from "./components/Master_Buku/buku/daftar.buku";
import TambahBuku from "./components/Master_Buku/buku/tambah.buku";
import EditBuku from "./components/Master_Buku/buku/edit.buku";

// Peminjam
import DataPeminjam from "./components/Peminjam/daftar.peminjam";
import TambahPeminjam from "./components/Peminjam/tambah.peminjam";
import EditPeminjam from "./components/Peminjam/edit.peminjam";

// Pengembalian
import DataPengembalian from "./components/Pengembalian/daftar.pengembalian";

const App = () => {
  return (
    <MainLayouts>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

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
          <Route path="/edit_penerbit/:id" element={<EditPenerbit />} />

          {/* Buku */}
          <Route path="/data_buku" element={<DataBuku />} />
          <Route path="/tambah_buku" element={<TambahBuku />} />
          <Route path="/edit_buku/:id" element={<EditBuku />} />

          {/* Peminjam */}
          <Route path="/data_peminjam" element={<DataPeminjam />} />
          <Route path="/tambah_peminjam" element={<TambahPeminjam />} />
          <Route path="/edit_peminjam/:id" element={<EditPeminjam />} />

          {/* Pengembalian */}
          <Route path="/data_pengembalian" element={<DataPengembalian />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
