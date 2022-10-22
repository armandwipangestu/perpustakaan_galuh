import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataPengarang = () => {
  const [pengarangs, setPengarangs] = useState([]);

  useEffect(() => {
    getPengarangs();
  }, []);

  const getPengarangs = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/pengarangs`
    );
    setPengarangs(response.data);
  };

  return (
    <div className="pt-5 mb-5 px-4 md:px-16">
      <section id="tambah_anggota">
        <h1 className="text-4xl text-start dark:text-white">
          Daftar Pengarang
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <Link to={`/tambah_pengarang`}>
            <button
              type="button"
              className="md:mr-5 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tambah Pengarang
            </button>
          </Link>
        </div>
      </section>
      <section id="daftar_pengarang">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID PENGARANG
                </th>
                <th scope="col" className="py-3 px-6">
                  NAMA PENGARANG
                </th>
              </tr>
            </thead>
            <tbody>
              {pengarangs.map((pengarang, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index}
                      </th>
                      <td className="py-4 px-6">{pengarang.pengarang}</td>
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

export default DataPengarang;
