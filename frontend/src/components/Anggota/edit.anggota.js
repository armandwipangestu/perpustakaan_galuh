import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const EditAnggota = () => {
  const [id_anggota, setId_Anggota] = useState("");
  const [nama_anggota, setNama_Anggota] = useState("");
  const [jenis_kelamin, setJenis_Kelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_telepon, setNo_Telepon] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAnggotaById();
  }, []);

  const updateAnggota = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_BASEURL}/api/users/${id}`, {
        id_anggota,
        nama_anggota,
        jenis_kelamin,
        alamat,
        no_telepon,
      });
      navigate("/data_anggota");
    } catch (error) {
      console.log(error);
    }
  };

  const getAnggotaById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/users/${id}`
    );
    setId_Anggota(response.data.id_anggota);
    setNama_Anggota(response.data.nama_anggota);
    setJenis_Kelamin(response.data.jenis_kelamin);
    setAlamat(response.data.alamat);
    setNo_Telepon(response.data.no_telepon);
  };

  const handleChange = (event) => {
    setJenis_Kelamin(event.target.value);
  };

  return (
    <section id="edit_anggota">
      <form onSubmit={updateAnggota}>
        <div className="px-5 py-2.5 md:px-32 lg:px-28 mb-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="id_anggota"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                ID Anggota
              </label>
              <input
                type="text"
                id="id_anggota"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={id_anggota}
                onChange={(e) => setId_Anggota(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="nama_anggota"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nama Anggota
              </label>
              <input
                type="text"
                id="nama_anggota"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={nama_anggota}
                onChange={(e) => setNama_Anggota(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="jenis_kelamin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Jenis Kelamin
              </label>
              <select
                value={jenis_kelamin}
                label="jenis_kelamin"
                onChange={handleChange}
                id="jenis_kelamin"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="alamat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="no_telepon"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No Telepon
              </label>
              <input
                type="number"
                id="no_telepon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={no_telepon}
                onChange={(e) => setNo_Telepon(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5 mt-5"
          >
            <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
            Edit Anggota
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditAnggota;
