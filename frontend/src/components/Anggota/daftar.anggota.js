import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataAnggota = () => {
  const [anggotas, setAnggotas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAnggotas();
  }, []);

  const getAnggotas = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/users`
    );
    setAnggotas(response.data);
  };

  const deleteAnggota = async (id) => {
    try {
      axios.delete(`${process.env.REACT_APP_BASEURL}/api/users/${id}`);
      getAnggotas();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-5 mb-5 px-4 md:px-16">
      <section id="tambah_anggota">
        <h1 className="text-4xl text-start dark:text-white">Daftar Anggota</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <Link to={`/tambah_anggota`}>
            <button
              type="button"
              className="md:mr-5 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tambah Anggota
            </button>
          </Link>
          <input
            type="text"
            id="search-book"
            className="p-2 pl-5 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </section>
      <section id="daftar_anggota">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID ANGGOTA
                </th>
                <th scope="col" className="py-3 px-6">
                  NAMA ANGGOTA
                </th>
                <th scope="col" className="py-3 px-6">
                  JENIS KELAMIN
                </th>
                <th scope="col" className="py-3 px-6">
                  ALAMAT
                </th>
                <th scope="col" className="py-3 px-6">
                  NO TELEPON
                </th>
                <th scope="col" className="py-3 px-6">
                  AKSI
                </th>
              </tr>
            </thead>
            <tbody>
              {anggotas
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    val.nama_anggota
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.jenis_kelamin
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.alamat.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((anggota, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {anggota.id_anggota}
                        </th>
                        <td className="py-4 px-6">{anggota.nama_anggota}</td>
                        <td className="py-4 px-6">{anggota.jenis_kelamin}</td>
                        <td className="py-4 px-6">{anggota.alamat}</td>
                        <td className="py-4 px-6">{anggota.no_telepon}</td>
                        <td className="py-4 px-6">
                          <Link to={`/edit_anggota/${anggota.id}`} className="">
                            <button
                              type="button"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                              Ubah
                            </button>
                          </Link>
                          <Link to={`/data_anggota`} className="">
                            <button
                              onClick={() => {
                                deleteAnggota(anggota.id);
                                window.location.reload(true);
                              }}
                              type="button"
                              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                              Hapus
                            </button>
                          </Link>
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

export default DataAnggota;
