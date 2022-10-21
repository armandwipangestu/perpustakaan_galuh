import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataBuku = () => {
  const [bukus, setBukus] = useState([]);

  useEffect(() => {
    getBukus();
  }, []);

  const getBukus = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/books`
    );
    setBukus(response.data);
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
              </tr>
            </thead>
            <tbody>
              {bukus.map((buku, index) => {
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
                      <td className="py-4 px-6">{buku.gambar}</td>
                      <td className="py-4 px-6">{buku.bahasa}</td>
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
