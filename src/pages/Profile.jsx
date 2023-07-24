import React, { useState } from "react";
import { btq, activity, user } from "../constants/data";
import Table from "../components/Table";

const Profile = () => {
  const [table, changeTable] = useState("BTQ");
  console.log(table);
  return (
    <section id="home" className="page bg-[url('/pattern-1.png')]">
      <div className="container">
        <div className="grid grid-cols-5 gap-2   overflow-hidden">
          {/* top left */}
          <div className="w-full md:h-96 h-[450px] bg-[#118ab2] row-span-3 col-span-2 lg:col-span-1 border-2 rounded-tl-lg border-black ">
            <div className="border-2 border-black rounded-full w-20 h-20 bg-orange-500 mx-auto mt-10 mb-5 overflow-hidden flex items-center justify-center">
              <img src={user.avatar} alt="avatar" className="object-cover " />
            </div>
            <div className="bg-white w-9/12 mx-auto border-2 border-black rounded-lg">
              <h1 className="text-center font-bold text-black tracking-wider">
                ID : {user.username}
              </h1>
            </div>
            <div className="flex justify-center mt-40 md:mt-[80px]">
              <button className="btn p-2 md:px-4 bg-red-400 hover:bg-red-500 text-sm md:text-base font-medium">
                Keluar
              </button>
            </div>
            <div className="flex justify-center mt-4 ">
              <button className="btn p-2 md:px-4 bg-yellow-400 hover:bg-yellow-500 text-sm md:text-base font-medium">
                Ubah Password
              </button>
            </div>
          </div>

          {/* top right */}
          <div className="w-full md:h-96 h-[450px] bg-orange-300 row-span-3 col-span-3 lg:col-span-4 border-2 rounded-tr-lg border-black">
            <div className="grid md:grid-cols-2 gap-2  p-2 md:mt-8">
              <div className="">
                <label
                  htmlFor="nama"
                  className="text-sm md:text-base font-semibold"
                >
                  Nama
                </label>
                <input
                  id="nama"
                  type="text"
                  className="input-profile"
                  placeholder=""
                  value={user.nama}
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="text-sm md:text-base  font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="input-profile"
                  value={user.email}
                />
              </div>
              <div className="">
                <label
                  htmlFor="jurusan"
                  className="text-sm md:text-base font-semibold"
                >
                  Jurusan
                </label>
                <input
                  id="jurusan"
                  type="text"
                  className="w-full border-black border p-1 md:p-2 lg:px-4 rounded-lg bg-white"
                  placeholder="Pendidikan Teknologi Informasi"
                  disabled
                  readOnly
                  value={user.jurusan}
                />
              </div>
              <div className="">
                <label
                  htmlFor="jenisKelamin"
                  className="text-sm md:text-base font-semibold"
                >
                  Jenis Kelamin
                </label>
                <select
                  id="jenisKelamin"
                  className="px-1 md:p-2 py-1 border-1 border-black rounded-lg w-full "
                  name="option"
                >
                  <option value="1">Laki-laki</option>
                  <option value="2">Perempuan</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="desc"
                  className="text-sm md:text-base  font-semibold"
                >
                  Motto
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  className="w-full border-black border p-1 md:p-2 lg:px-4 rounded-lg "
                  placeholder="Hidup hanya sekali, gunakan untuk mengabdi kepada Ilahi Robbi."
                  value={user.motto}
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end lg:mr-2 mt-2">
              <button className="bg-teal-400 hover:bg-teal-500 btn p-2 md:px-4 text-sm md:text-base font-medium">
                Update
              </button>
            </div>
          </div>

          {/* bottom */}
          <div className=" w-full h-full pb-28 bg-[#ef476f] row-span-2 col-span-5 border-2 rounded-b-lg border-black">
            <div className="w-full flex items-center justify-center gap-5 mt-10">
              <button
                onClick={() => changeTable("BTQ")}
                className="px-4 py-2 btn bg-yellow-400 hover:bg-yellow-500 "
              >
                BTQ
              </button>
              <button
                onClick={() => changeTable("kegiatan")}
                className="px-4 py-2 btn bg-sky-400 hover:bg-sky-500 "
              >
                Kegiatan
              </button>
            </div>
            <div className="px-4 mt-10 flex justify-center ">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
