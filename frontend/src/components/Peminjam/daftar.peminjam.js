import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataPeminjam = () => {
  const [peminjams, setPeminjams] = useState([]);
  const [search, setSearch] = useState("");

  const [id, setId] = useState();
  const [status, setStatus] = useState("");
  const [nama_peminjam, setNama_peminjam] = useState("");
  const [judul_buku, setJudul_buku] = useState("");
  const [tanggal_pinjam, setTanggal_pinjam] = useState("");
  const [tanggal_kembali, setTanggal_kembali] = useState("");
  const [tanggal_pengembalian, setTanggal_pengembalian] = useState(
    new Date().toISOString()
  );

  useEffect(() => {
    getPeminjams();
  }, []);

  const getPeminjams = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/peminjams`
    );
    setPeminjams(response.data);
  };

  const deletePeminjam = async (id) => {
    try {
      axios.delete(`${process.env.REACT_APP_BASEURL}/api/peminjams/${id}`);
      getPeminjams();
    } catch (error) {
      console.log(error);
    }
  };

  const savePengembalian = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `${process.env.REACT_APP_BASEURL}/api/peminjams/${id}`,
        {
          status,
        }
      );
      await axios.post(`${process.env.REACT_APP_BASEURL}/api/pengembalians/`, {
        nama_peminjam,
        judul_buku,
        tanggal_pinjam,
        tanggal_kembali,
        tanggal_pengembalian,
      });
      // Navigate("/data_peminjam");
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const setData = (data) => {
    setId(data.id);
    setNama_peminjam(data.nama_peminjam);
    setJudul_buku(data.judul_buku);
    setTanggal_pinjam(data.tanggal_pinjam);
    setTanggal_kembali(data.tanggal_kembali);
    // setTanggal_pengembalian();
  };

  const convertDate = (date) => {
    return date.substring(0, 10);
  };

  return (
    <div className="pt-5 mb-5 px-4 md:px-16">
      <section id="tambah_peminjam">
        <h1 className="text-4xl text-start dark:text-white">Daftar Peminjam</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <Link to={`/tambah_peminjam`}>
            <button
              type="button"
              className="md:mr-5 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tambah Peminjam
            </button>
          </Link>
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
      <section id="daftar_peminjam">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID PEMINJAM
                </th>
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
                  STATUS
                </th>
                <th scope="col" className="py-3 px-6">
                  AKSI
                </th>
              </tr>
            </thead>
            <tbody>
              {peminjams
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
                .map((peminjam, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {peminjam.id_peminjam}
                        </th>
                        <td className="py-4 px-6">{peminjam.nama_peminjam}</td>
                        <td className="py-4 px-6">{peminjam.judul_buku}</td>
                        <td className="py-4 px-6">
                          {convertDate(peminjam.tanggal_pinjam)}
                        </td>
                        <td className="py-4 px-6">
                          {convertDate(peminjam.tanggal_kembali)}
                        </td>
                        <td className="py-4 px-6">{peminjam.status}</td>
                        <td className="py-4 px-6">
                          <Link
                            to={`/edit_peminjam/${peminjam.id}`}
                            className=""
                          >
                            <button
                              type="button"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                              Ubah
                            </button>
                          </Link>
                          {peminjam.status === "Belum Dikumpulkan" && (
                            <React.Fragment>
                              <form onSubmit={savePengembalian}>
                                <div className="hidden">
                                  <input
                                    type="text"
                                    id="status"
                                    required=""
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                  />
                                  <input
                                    type="text"
                                    id="nama_peminjam"
                                    required=""
                                    value={nama_peminjam}
                                    onChange={(e) =>
                                      setNama_peminjam(e.target.value)
                                    }
                                  />
                                  <input
                                    type="text"
                                    id="judul_buku"
                                    required=""
                                    value={judul_buku}
                                    onChange={(e) =>
                                      setJudul_buku(e.target.value)
                                    }
                                  />
                                  <input
                                    type="text"
                                    id="tanggal_pinjam"
                                    required=""
                                    value={tanggal_pinjam}
                                    onChange={(e) =>
                                      setTanggal_pinjam(e.target.value)
                                    }
                                  />
                                  <input
                                    type="text"
                                    id="tanggal_kembali"
                                    required=""
                                    value={tanggal_kembali}
                                    onChange={(e) =>
                                      setTanggal_kembali(e.target.value)
                                    }
                                  />
                                  <input
                                    type="text"
                                    id="tanggal_pengembalian"
                                    required=""
                                    value={tanggal_pengembalian}
                                    onChange={(e) =>
                                      setTanggal_pengembalian(e.target.value)
                                    }
                                  />
                                </div>
                                <button
                                  onClick={() => {
                                    setData(peminjam);
                                    setStatus("Sudah Dikumpulkan");
                                    // window.location.reload(true);
                                  }}
                                  type="submit"
                                  className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900"
                                >
                                  Kumpulkan
                                </button>
                              </form>
                            </React.Fragment>
                          )}

                          <Link to={`/data_peminjam`} className="">
                            <button
                              onClick={() => {
                                deletePeminjam(peminjam.id);
                                window.location.reload(true);
                              }}
                              type="button"
                              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                              Hapus
                            </button>
                          </Link>
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

export default DataPeminjam;
