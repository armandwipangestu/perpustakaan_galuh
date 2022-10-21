import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

const ListBooks = () => {
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

  return (
    <section id="list_books" className="pt-5 mb-5 px-4 md:px-16">
      <div className="">
        <h1 className="text-4xl text-start dark:text-white">E-Perpustakaan</h1>
        <p className="text-1xl text-gray-700 dark:text-gray-400 mt-3">
          Developer Test
        </p>
      </div>
      <div className="mb-5 mt-5">
        <h1 className="text-2xl dark:text-white">Daftar Buku</h1>
        <hr className="mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((book, index) => {
          return (
            <React.Fragment key={index}>
              <a
                href=""
                className="flex flex-col bg-white rounded-md border md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full h-100 md:h-100 md:w-56 rounded"
                  src={book.gambar}
                  alt=""
                />
                <div className="flex flex-col p-5 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                    {book.judul_buku}
                  </h5>
                  <p className="font-normal text-sm text-gray-500 dark:text-gray-400 mb-2">
                    ID Buku: {book.id_buku}
                  </p>
                  <p className="font-normal text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Pengarang: {book.pengarang}
                  </p>
                  <p className="font-normal text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Penerbit: {book.penerbit}
                  </p>
                  <p className="font-normal text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Tahun Terbit: {book.tahun_terbit}
                  </p>
                  <p className="font-normal text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Bahasa: {book.bahasa}
                  </p>
                </div>
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default ListBooks;
