import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TambahPenerbit = () => {
  const [penerbit, setPenerbit] = useState("");
  const navigate = useNavigate();

  const savePenerbit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASEURL}/api/penerbits`, {
        penerbit,
      });
      navigate("/data_penerbit");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="tambah_penerbit">
      <form onSubmit={savePenerbit}>
        <div className="px-5 py-2.5 md:px-32 lg:px-28 mb-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="penerbit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nama Penerbit
              </label>
              <input
                type="text"
                id="penerbit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={penerbit}
                onChange={(e) => setPenerbit(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5 mt-5"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Tambah Pengarang
          </button>
        </div>
      </form>
    </section>
  );
};

export default TambahPenerbit;
