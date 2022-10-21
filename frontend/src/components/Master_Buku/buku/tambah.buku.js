import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahBuku = () => {
  const [id_buku, setId_buku] = useState("");
  const [judul_buku, setJudul_buku] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [penertbit, setPenerbit] = useState("");
  const [tahun_terbit, setTahun_terbit] = useState("");
  const [gambar, setGambar] = useState("");
  const [bahasa, setBahasa] = useState("");

  const navigate = useNavigate();
  const [getPengarangs, setPengarangs] = useState([]);

  useEffect(() => {
    findPengarang();
  }, []);

  const findPengarang = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/books`
    );
    setPengarangs(response.data);
  };

  const saveBuku = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASEURL}/api/books`, {
        id_buku,
        judul_buku,
        pengarang,
      });
      navigate("/data_buku");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setPengarang(event.target.value);
  };

  return (
    <section id="tambah_buku">
      <form onSubmit={saveBuku}>
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
                Pengarang
              </label>
              <select
                value={pengarang}
                label="Pengarang"
                onChange={handleChange}
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
          </div>
          <button
            type="submit"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tambah Pengarang
          </button>
        </div>
      </form>
    </section>
  );
};

export default TambahBuku;
