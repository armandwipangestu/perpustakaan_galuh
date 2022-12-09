import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../Utilities/button.utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DataPenerbit = () => {
  const [penerbits, setPenerbits] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPenerbits();
  }, []);

  const getPenerbits = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/penerbits`
    );
    setPenerbits(response.data);
  };

  const deletePenerbit = async (id) => {
    try {
      axios.delete(`${process.env.REACT_APP_BASEURL}/api/penerbits/${id}`);
      getPenerbits();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-5 mb-5 px-4 md:px-16">
      <section id="tambah_penerbit">
        <h1 className="text-4xl text-start dark:text-white">Daftar Penerbit</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <Link to={`/tambah_penerbit`}>
            <ButtonPrimary icon="faPlus" name="Tambah Penerbit" />
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
      <section id="daftar_penerbit" className="pt-5">
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
                <th scope="col" className="py-3 px-6">
                  AKSI
                </th>
              </tr>
            </thead>
            <tbody>
              {penerbits
                .filter((val) => {
                  if (search == "") {
                    return val;
                  } else if (
                    val.penerbit.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((penerbit, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {penerbit.id}
                        </th>
                        <td className="py-4 px-6">{penerbit.penerbit}</td>
                        <td className="py-4 px-6">
                          <Link
                            to={`/edit_penerbit/${penerbit.id}`}
                            className=""
                          >
                            <ButtonPrimary icon="faPenToSquare" name="Ubah" />
                          </Link>
                          <Link to={`/data_penerbit`} className="">
                            <button
                              onClick={() => {
                                deletePenerbit(penerbit.id);
                                window.location.reload(true);
                              }}
                              type="button"
                              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5 mt-3"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="mr-2"
                              />
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

export default DataPenerbit;
