import React, { useEffect, useState } from "react";
import axios from "axios";

const ListBorrow = () => {
  const [borrows, setBorrows] = useState([]);

  useEffect(() => {
    getBorrows();
  }, []);

  const getBorrows = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/loans`
    );
    setBorrows(response.data);
  };

  return (
    <section id="list_borrow">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Nama
              </th>
              <th scope="col" className="py-3 px-6">
                Nomer
              </th>
              <th scope="col" className="py-3 px-6">
                Buku
              </th>
              <th scope="col" className="py-3 px-6">
                Tanggal Meminjam
              </th>
              <th scope="col" className="py-3 px-6">
                Tanggal Dikembalikan
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {borrows.map((borrow, index) => {
              return (
                <React.Fragment key={index}>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {borrow.name}
                    </th>
                    <td className="py-4 px-6">{borrow.number}</td>
                    <td className="py-4 px-6">{borrow.borrow_book_title}</td>
                    <td className="py-4 px-6">{borrow.borrowing_date}</td>
                    <td className="py-4 px-6">{borrow.return_date}</td>
                    <td className="py-4 px-6">{borrow.status}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListBorrow;
