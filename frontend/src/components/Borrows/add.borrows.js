import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoanBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [borrowing_date, setBorrowing_date] = useState("");
  const [return_date, setReturn_date] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const saveLoan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://192.168.124.125:5000/api/loans", {
        name,
        number,
        borrowing_date,
        return_date,
        status,
      });
      navigate("/daftar_pinjaman");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="add_loan">
      <form onSubmit={saveLoan}>
        <div className="px-5 py-2.5 md:px-32 lg:px-28 mb-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                for="nama"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nama
              </label>
              <textarea
                type="text"
                id="nama"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="nomer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nomer
              </label>
              <textarea
                type="text"
                id="nomer"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="tanggal_meminjam"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tanggal Meminjam
              </label>
              <textarea
                type="text"
                id="tanggal_meminjam"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={borrowing_date}
                onChange={(e) => setBorrowing_date(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="tanggal_mengembalikan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tanggal Mengembalikan
              </label>
              <textarea
                type="text"
                id="tanggal_mengembalikan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={return_date}
                onChange={(e) => setReturn_date(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Status
              </label>
              <textarea
                type="text"
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tambah Buku
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoanBook;
