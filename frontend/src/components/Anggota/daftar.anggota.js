import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataAnggota = () => {
  const [anggotas, setAnggotas] = useState([]);

  useEffect(() => {
    getAnggotas();
  }, []);

  const getAnggotas = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/users`
    );
    setAnggotas(response.data);
  };

  return (
    <div className="pt-5 mb-5 px-4 md:px-16">
      <section id="tambah_anggota">
        <h1 className="text-4xl text-start dark:text-white">
          Daftar Data Anggota
        </h1>
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
              {anggotas.map((anggota, index) => {
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
                        <a href="">
                          <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Ubah
                          </button>
                        </a>
                        <button
                          type="button"
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

export default DataAnggota;
