import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataPenerbit = () => {
  const [penerbits, setPenerbits] = useState([]);

  useEffect(() => {
    getPenerbits();
  }, []);

  const getPenerbits = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/penerbits`
    );
    setPenerbits(response.data);
  };

  return (
    <div className="pt-5 mb-5 px-4 md:px-16">
      <section id="tambah_penerbit">
        <h1 className="text-4xl text-start dark:text-white">Daftar Penerbit</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <Link to={`/tambah_penerbit`}>
            <button
              type="button"
              className="md:mr-5 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tambah Penerbit
            </button>
          </Link>
        </div>
      </section>
      <section id="daftar_penerbit">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID PENERBIT
                </th>
                <th scope="col" className="py-3 px-6">
                  NAMA PENERBIT
                </th>
              </tr>
            </thead>
            <tbody>
              {penerbits.map((penerbits, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index}
                      </th>
                      <td className="py-4 px-6">{penerbits.penerbit}</td>
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

export default DataPenerbit;
