import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get("localhost:5000/api/books");
    setBooks(response.data);
  };

  return (
    <section id="list_books">
      <div className="pt-5 mb-5 px-4 md:px-16">
        <h1 className="text-4xl text-start dark:text-white">E-Perpustakaan</h1>
        <p className="text-1xl text-gray-700 dark:text-gray-400 mt-3">
          Developer Test
        </p>
        <div className="mt-3">
          <Link to={`/add`}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tambahkan Buku Baru
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ListBooks;
