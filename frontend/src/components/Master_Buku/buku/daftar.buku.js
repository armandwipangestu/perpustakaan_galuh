import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataBuku = () => {
  const [bukus, setBukus] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBukus();
  }, []);

  const getBukus = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/books`
    );
    setBukus(response.data);
  };

  const deleteBuku = async (id) => {
    try {
      axios.delete(`${process.env.REACT_APP_BASEURL}/api/books/${id}`);
      getBukus();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-5 mb-5 px-4 md:px-16">
      <section id="tambah_buku">
        <h1 className="text-4xl text-start dark:text-white">Daftar Buku</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <Link to={`/tambah_buku`}>
            <button
              type="button"
              className="md:mr-5 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tambah Buku
            </button>
          </Link>
          <input
            type="text"
            id="search-book"
            className="p-2 pl-5 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </section>
      <section id="daftar_buku">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID BUKU
                </th>
                <th scope="col" className="py-3 px-6">
                  JUDUL BUKU
                </th>
                <th scope="col" className="py-3 px-6">
                  PENGARANG
                </th>
                <th scope="col" className="py-3 px-6">
                  PENERBIT
                </th>
                <th scope="col" className="py-3 px-6">
                  TAHUN TERBIT
                </th>
                <th scope="col" className="py-3 px-6">
                  GAMBAR
                </th>
                <th scope="col" className="py-3 px-6">
                  BAHASA
                </th>
                <th scope="col" className="py-3 px-6">
                  AKSI
                </th>
              </tr>
            </thead>
            <tbody>
              {bukus
                .filter((val) => {
                  if (search == "") {
                    return val;
                  } else if (
                    val.judul_buku.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((buku, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index}
                        </th>
                        <td className="py-4 px-6">{buku.judul_buku}</td>
                        <td className="py-4 px-6">{buku.pengarang}</td>
                        <td className="py-4 px-6">{buku.penerbit}</td>
                        <td className="py-4 px-6">{buku.tahun_terbit}</td>
                        <td className="py-4 px-6">
                          <img src={buku.gambar} className="md:w-40 md:h-48" />
                        </td>
                        <td className="py-4 px-6">{buku.bahasa}</td>
                        <td className="py-4 px-6">
                          <Link to={`/edit_buku/${buku.id}`} className="">
                            <button
                              type="button"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                              Ubah
                            </button>
                          </Link>
                          <button
                            onClick={() => deleteBuku(buku.id)}
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DataBuku;
