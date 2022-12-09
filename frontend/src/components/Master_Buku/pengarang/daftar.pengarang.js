import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../Utilities/button.utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DataPengarang = () => {
  const [pengarangs, setPengarangs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPengarangs();
  }, []);

  const getPengarangs = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/pengarangs`
    );
    setPengarangs(response.data);
  };

  const deletePengarang = async (id) => {
    try {
      axios.delete(`${process.env.REACT_APP_BASEURL}/api/pengarangs/${id}`);
      getPengarangs();
    } catch (error) {
      console.log(error);
    }
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
            <ButtonPrimary icon="faPlus" name="Tambah Pengarang" />
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
      <section id="daftar_pengarang" className="pt-5">
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
                <th scope="col" className="py-3 px-6">
                  AKSI
                </th>
              </tr>
            </thead>
            <tbody>
              {pengarangs
                .filter((val) => {
                  if (search == "") {
                    return val;
                  } else if (
                    val.pengarang.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((pengarang, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {pengarang.id}
                        </th>
                        <td className="py-4 px-6">{pengarang.pengarang}</td>
                        <td className="py-4 px-6">
                          <Link
                            to={`/edit_pengarang/${pengarang.id}`}
                            className=""
                          >
                            <ButtonPrimary icon="faPenToSquare" name="Ubah" />
                          </Link>
                          <Link to={`/data_pengarang`} className="">
                            <button
                              onClick={() => {
                                deletePengarang(pengarang.id);
                                window.location.reload(true);
                              }}
                              type="button"
                              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

export default DataPengarang;
