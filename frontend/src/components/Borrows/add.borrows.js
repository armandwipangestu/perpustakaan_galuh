import React, { useEffect, useState } from "react";
// import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoanBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [borrow_book_title, setBorrow_book_title] = useState("");
  const [borrowing_date, setBorrowing_date] = useState("");
  const [return_date, setReturn_date] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/books`
    );
    setBooks(response.data);
  };

  const handleChange = (event) => {
    setBorrow_book_title(event.target.value);
  };

  const saveLoan = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASEURL}/api/loans`, {
        name,
        number,
        borrow_book_title,
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
                htmlFor="nama"
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
                htmlFor="nomer"
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
            {/* <div>
              <label
                htmlFor="judul_buku_dipinjam"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Buku
              </label>
              <textarea
                type="text"
                id="judul_buku_dipinjam"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={borrow_book_title}
                onChange={(e) => setBorrow_book_title(e.target.value)}
              ></textarea>
            </div> */}
            <div>
              <label
                htmlFor="book"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Buku
              </label>
              <select
                value={borrow_book_title}
                label="Buku"
                onChange={handleChange}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {books.map((book, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={book.title}>{book.title}</option>
                    </React.Fragment>
                  );
                })}
                {/* <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option> */}
              </select>
            </div>
            <div>
              <label
                htmlFor="tanggal_meminjam"
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
                htmlFor="tanggal_mengembalikan"
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
                htmlFor="status"
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
