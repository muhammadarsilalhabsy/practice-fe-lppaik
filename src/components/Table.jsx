import React from "react";
import { activity } from "../constants/data";

const Table = () => {
  return (
    <section className="max-w-[90%] max-h-[90vh] bg-sky-400 rounded-lg overflow-hidden p-4">
      <section className="bg-teal-200 py-4 rounded-lg">
        <h1 className="text-xl font-bold text-center leading-relaxed tracking-wider">
          Table Kegiatan mahasiswa
        </h1>
      </section>
      <section className="table_body ">
        <table className="table-fixed text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Kegiatan</th>
              <th>Waktu</th>
              <th>Diabse oleh</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {activity.map(({ id, kegiatan, hari, absentBy }) => (
              <tr>
                <td>{id}</td>
                <td>{kegiatan}</td>
                <td>{hari}</td>
                <td>{absentBy}</td>
                <td>
                  <div className="flex gap-2 px-4">
                    <button className="btn py-1 px-4 bg-yellow-500">
                      Edit
                    </button>
                    <button className="btn py-1 px-4 bg-red-500">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Table;
