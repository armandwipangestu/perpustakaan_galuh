import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const LihatBuku = () => {
  const [id_buku, setId_buku] = useState("");
  const [judul_buku, setJudul_buku] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [tahun_terbit, setTahun_terbit] = useState("");
  const [gambar, setGambar] = useState("");
  const [bahasa, setBahasa] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getBukuById();
  });

  const getBukuById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/books/${id}`
    );
    setId_buku(response.data.id_buku);
    setJudul_buku(response.data.judul_buku);
    setPengarang(response.data.pengarang);
    setPenerbit(response.data.penerbit);
    setTahun_terbit(response.data.tahun_terbit);
    setGambar(response.data.gambar);
    setBahasa(response.data.bahasa);
  };

  return (
    <section id="lihat_buku">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <div className="w-full sm:w-1/3 md:w-1/4 px-2">
            <img src={gambar} />
          </div>
          <div className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <h1 className="font-bold text-2xl">{judul_buku}</h1>
            <p className="mt-2">
              by{" "}
              <a href="#" className="text-blue-500">
                {pengarang}
              </a>
            </p>

            <div className="mt-5 border border-black bg-stone-300">
              <div className="flex justify-around">
                <div>Tahun Terbit</div>
                <div>Penerbit</div>
                <div>Bahasa</div>
              </div>
              <div className="flex justify-around">
                <div>{tahun_terbit}</div>
                <div>{penerbit}</div>
                <div>{bahasa}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LihatBuku;
