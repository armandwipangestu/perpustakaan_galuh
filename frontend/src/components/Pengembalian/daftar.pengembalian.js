import React, { useEffect, useState } from "react";
import axios from "axios";

const DataPengembalian = () => {
  const [pengembalians, setPengembalians] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPengembalians();
  }, []);

  const getPengembalians = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/pengembalians`
    );
    setPengembalians(response.data);
  };

  const convertDate = (date) => {
    return date.substring(0, 10);
  };

  return (
    <div className="pt-5 mb-5 px-4 md:px-16">
      <section id="daftar_pengembalian">
        <h1 className="text-4xl text-start dark:text-white">
          Daftar Pengembalian
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
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
      <section id="daftar_pengembalian">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  NAMA PEMINJAM
                </th>
                <th scope="col" className="py-3 px-6">
                  JUDUL BUKU
                </th>
                <th scope="col" className="py-3 px-6">
                  TANGGAL PINJAM
                </th>
                <th scope="col" className="py-3 px-6">
                  TANGGAL KEMBALI
                </th>
                <th scope="col" className="py-3 px-6">
                  TANGGAL PENGEMBALIAN
                </th>
              </tr>
            </thead>
            <tbody>
              {pengembalians
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    val.nama_peminjam
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.judul_buku.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((pengembalian, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {pengembalian.nama_peminjam}
                        </th>
                        <td className="py-4 px-6">{pengembalian.judul_buku}</td>
                        <td className="py-4 px-6">
                          {convertDate(pengembalian.tanggal_pinjam)}
                        </td>
                        <td className="py-4 px-6">
                          {convertDate(pengembalian.tanggal_kembali)}
                        </td>
                        <td className="py-4 px-6">
                          {convertDate(pengembalian.tanggal_pengembalian)}
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

export default DataPengembalian;
