import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahAnggota = () => {
  const [pengarang, setPengarang] = useState("");
  const navigate = useNavigate();

  const savePengarang = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASEURL}/api/books`, {
        pengarang,
      });
      navigate("/data_pengarang");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="tambah_pengarang">
      <form onSubmit={savePengarang}>
        <div className="px-5 py-2.5 md:px-32 lg:px-28 mb-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="pengarang"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nama Pengarang
              </label>
              <input
                type="text"
                id="pengarang"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={pengarang}
                onChange={(e) => setPengarang(e.target.value)}
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

export default TambahAnggota;
