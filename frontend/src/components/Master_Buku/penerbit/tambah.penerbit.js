import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahPenerbit = () => {
  const [penerbit, setPenerbit] = useState("");
  const navigate = useNavigate();

  const savePenerbit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASEURL}/api/books`, {
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
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tambah Pengarang
          </button>
        </div>
      </form>
    </section>
  );
};

export default TambahPenerbit;
