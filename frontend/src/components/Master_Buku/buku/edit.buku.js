import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBuku = () => {
  const [id_buku, setId_buku] = useState("");
  const [judul_buku, setJudul_buku] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [tahun_terbit, setTahun_terbit] = useState("");
  const [gambar, setGambar] = useState("");
  const [bahasa, setBahasa] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const [getPengarangs, setPengarangs] = useState([]);
  const [getPenerbits, setPenerbits] = useState([]);
  //   const [getPenerbits, setPenerbits] = useEffect([]);

  useEffect(() => {
    getBukuById();
    findPengarang();
    findPenerbit();
  }, []);

  const findPengarang = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/pengarangs`
    );
    setPengarangs(response.data);
  };

  const findPenerbit = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/penerbits`
    );
    setPenerbits(response.data);
  };

  const updateBuku = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_BASEURL}/api/books/${id}`, {
        id_buku,
        judul_buku,
        pengarang,
        penerbit,
        tahun_terbit,
        gambar,
        bahasa,
      });
      navigate("/data_buku");
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleChangePengarang = (event) => {
    setPengarang(event.target.value);
  };

  const handleChangePenerbit = (event) => {
    setPenerbit(event.target.value);
  };

  return (
    <section id="tambah_buku">
      <form onSubmit={updateBuku}>
        <div className="px-5 py-2.5 md:px-32 lg:px-28 mb-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="id_buku"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                ID Buku
              </label>
              <input
                type="text"
                id="id_buku"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={id_buku}
                onChange={(e) => setId_buku(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="judul_buku"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Judul Buku
              </label>
              <input
                type="text"
                id="judul_buku"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={judul_buku}
                onChange={(e) => setJudul_buku(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="pengarang"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Nama Pengarang
              </label>
              <select
                value={pengarang}
                label="Pengarang"
                onChange={handleChangePengarang}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {getPengarangs.map((getPengarang, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={getPengarang.pengarang}>
                        {getPengarang.pengarang}
                      </option>
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="penerbit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Nama Penerbit
              </label>
              <select
                value={penerbit}
                label="Penerbit"
                onChange={handleChangePenerbit}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {getPenerbits.map((getPenerbit, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={getPenerbit.penerbit}>
                        {getPenerbit.penerbit}
                      </option>
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="tahun_terbit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tahun Terbit
              </label>
              <input
                type="number"
                id="tahun_terbit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={tahun_terbit}
                onChange={(e) => setTahun_terbit(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="bahasa"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Bahasa
              </label>
              <input
                type="text"
                id="bahasa"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={bahasa}
                onChange={(e) => setBahasa(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="gambar"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Gambar
              </label>
              <blockquote className="p-3 my-2 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
                <p className="text-xs font-medium leading-relaxed text-gray-900 dark:text-white">
                  Di isi dengan link gambarnya, contoh:{" "}
                  <span className="text-blue-700">
                    https://domain.com/gambar.png
                  </span>
                </p>
              </blockquote>
              <input
                type="text"
                id="gambar"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={gambar}
                onChange={(e) => setGambar(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Buku
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditBuku;
