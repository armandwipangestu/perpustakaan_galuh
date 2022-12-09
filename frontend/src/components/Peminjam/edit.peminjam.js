import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import "react-datepicker/dist/react-datepicker.css";

const EditPeminjam = () => {
  const [id_peminjam, setId_peminjam] = useState("");
  const [nama_peminjam, setNama_peminjam] = useState("");
  const [judul_buku, setJudul_buku] = useState("");
  const [tanggal_pinjam, setTanggal_pinjam] = useState(new Date());
  const [tanggal_kembali, setTanggal_kembali] = useState(new Date());

  const navigate = useNavigate();
  const { id } = useParams();
  const [getAnggotas, setAnggotas] = useState([]);
  const [getBukus, setBukus] = useState([]);

  useEffect(() => {
    getPeminjamById();
    findAnggotas();
    findBukus();
  }, []);

  const findAnggotas = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/users`
    );
    setAnggotas(response.data);
  };

  const findBukus = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/books`
    );
    setBukus(response.data);
  };

  const updatePeminjam = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `${process.env.REACT_APP_BASEURL}/api/peminjams/${id}`,
        {
          id_peminjam,
          nama_peminjam,
          judul_buku,
          tanggal_pinjam,
          tanggal_kembali,
        }
      );
      navigate("/data_peminjam");
    } catch (error) {
      console.log(error);
    }
  };

  const getPeminjamById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/peminjams/${id}`
    );
    setId_peminjam(response.data.id_peminjam);
    setNama_peminjam(response.data.nama_peminjam);
    setJudul_buku(response.data.judul_buku);
    setTanggal_pinjam(response.data.tanggal_pinjam);
    setTanggal_kembali(response.data.tanggal_kembali);
  };

  const handleChangeAnggota = (event) => {
    setNama_peminjam(event.target.value);
  };

  const handleChangeBuku = (event) => {
    setJudul_buku(event.target.value);
  };

  return (
    <section id="edit_peminjam">
      <form onSubmit={updatePeminjam}>
        <div className="px-5 py-2.5 md:px-32 lg:px-28 mb-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="id_peminjam"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                ID Peminjam
              </label>
              <input
                type="text"
                id="id_peminjam"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={id_peminjam}
                onChange={(e) => setId_peminjam(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="nama_peminjam"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nama Peminjam
              </label>
              <select
                value={nama_peminjam}
                label="Nama Peminjam"
                onChange={handleChangeAnggota}
                id="nama_peminjam"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {getAnggotas.map((getAnggota, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={getAnggota.nama_anggota}>
                        {getAnggota.nama_anggota}
                      </option>
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="judul_buku"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Judul Buku
              </label>
              <select
                value={judul_buku}
                label="Judul Buku"
                onChange={handleChangeBuku}
                id="judul_buku"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {getBukus.map((getBuku, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={getBuku.judul_buku}>
                        {getBuku.judul_buku}
                      </option>
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="tanggal_pinjam"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Tanggal Pinjam
              </label>
              <input
                type="text"
                id="tanggal_pinjam"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={tanggal_pinjam}
                onChange={(e) => setTanggal_pinjam(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="tanggal_kembali"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Tanggal Kembali
              </label>
              <input
                type="text"
                id="tanggal_kembali"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={tanggal_kembali}
                onChange={(e) => setTanggal_kembali(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
            Edit Peminjam
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditPeminjam;
