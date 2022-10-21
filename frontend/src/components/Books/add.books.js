import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [category, setCategory] = useState("");
  const [year_published, setYear_published] = useState("");
  const [publisher, setPublisher] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  const saveBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASEURL}/api/books`, {
        title,
        author,
        cover,
        category,
        year_published,
        publisher,
        language,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="add_book">
      <form onSubmit={saveBook}>
        <div className="px-5 py-2.5 md:px-32 lg:px-28 mb-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                for="judul"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Judul
              </label>
              <textarea
                type="text"
                id="judul"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="pengarang"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pengarang
              </label>
              <textarea
                type="text"
                id="pengarang"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="cover"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Cover
              </label>
              <p className="text-gray-700 text-sm">
                Masukan link gambar, contoh: google.com/cover.png
              </p>
              <textarea
                type="text"
                id="cover"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={cover}
                onChange={(e) => setCover(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="kategori"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Kategori
              </label>
              <textarea
                type="text"
                id="kategori"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="tahun_terbit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tahun Terbit
              </label>
              <textarea
                type="text"
                id="tahun_terbit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={year_published}
                onChange={(e) => setYear_published(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="penerbit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Penerbit
              </label>
              <textarea
                type="text"
                id="penerbit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label
                for="bahasa"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Bahasa
              </label>
              <textarea
                type="text"
                id="bahasa"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
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

export default AddBook;
