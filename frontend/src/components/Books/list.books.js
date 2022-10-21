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
    const response = await axios.get("http://192.168.124.125:5000/api/books");
    setBooks(response.data);
  };

  return (
    <section id="list_books" className="pt-5 mb-5 px-4 md:px-16">
      <div className="">
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
      <div className="mb-5 mt-5">
        <h1 className="text-2xl dark:text-white">Daftar Buku</h1>
        <hr className="mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((book, index) => {
          return (
            <React.Fragment key={index}>
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white border dark:border-gray-700 dark:bg-gray-800 shadow-lg">
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={book.cover}
                    alt=""
                  />
                  <div className="px-4 py-6 md:p-6 flex flex-col justify-start relative">
                    <div className="mb-14">
                      <a href="/posts">
                        <h5 className="text-gray-900 dark:text-white text-xl font-medium mb-2">
                          Judul: {book.title}
                        </h5>
                      </a>
                      <p className="text-gray-700 dark:text-gray-400 text-xs mb-4">
                        Pengarang: {book.author}
                      </p>
                      <p className="text-gray-700 dark:text-gray-400 text-xs mb-4">
                        Kategori: {book.category}
                      </p>
                      <p className="text-gray-700 dark:text-gray-400 text-xs mb-4">
                        Penerbit: {book.publisher}
                      </p>
                      <p className="text-gray-700 dark:text-gray-400 text-xs mb-4">
                        Tahun Terbit: {book.year_published}
                      </p>
                      <p className="text-gray-700 dark:text-gray-400 text-xs mb-4">
                        Bahasa: {book.language}
                      </p>
                    </div>
                    {/* <div className="inline-flex ml-4 mb-4 absolute bottom-0 left-0">
                      <img
                        className="rounded-full w-9 h-9 mr-3"
                        src="https://armandwipangestu.vercel.app/static/media/me.07f08a71dc0b0a340041.png"
                        alt="Avatar"
                      />
                      <div className="block">
                        <h3 className="text-xs mb-1 dark:text-white">Arman</h3>
                        <p className="text-xs text-gray-400">11 Nov 2022</p>
                      </div>
                    </div>
                    <div className="absolute right-0 bottom-0 mr-5 mb-4 dark:text-white">
                      <FontAwesomeIcon icon={farBookmark} />
                    </div> */}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default ListBooks;
