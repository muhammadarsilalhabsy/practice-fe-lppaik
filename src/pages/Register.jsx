import React from "react";

const Register = () => {
  return (
    <section className="mt-14">
      <div className="flex flex-wrap">
        <div className="w-full hidden lg:flex lg:w-1/2 bg-sky-600 h-screen border-r-2 border-black  items-center justify-center ">
          <img src="btq.png" alt="btq" className="mx-auto my-auto" />
        </div>
        <div className="w-full lg:w-1/2 bg-teal-600 h-screen flex items-center justify-center">
          <div className="bg-sky-600 w-4/5 md:w-3/5 px-5 py-5 btn">
            <h1 className="font-bold text-white text-xl md:text-2xl text-center mb-5 ">
              Mendaftar Akun Baru
            </h1>
            <form action="">
              <div>
                <label htmlFor="username" className="font-semibold">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                  placeholder="Nomor induk "
                />
              </div>
              <div>
                <label htmlFor="name" className="font-semibold">
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                  placeholder="Nama panjang"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                  placeholder="contoh@umkendari.ac.id"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-semibold">
                  Katasandi
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full my-2 py-2 px-4 rounded-lg border-2 border-black"
                  placeholder="rahasia"
                />
              </div>
              <div className="my-2 py-2 flex">
                <select
                  className="px-2 py-2 border-2 border-black rounded-lg w-1/2 mr-4"
                  name="option"
                >
                  <option value="" disabled selected>
                    Jurusan
                  </option>
                  <option value="1">Pendidikan Teknologi Informasi</option>
                  <option value="2">Teknik Mesin</option>
                  <option value="2">Teknik Mesin</option>
                  <option value="2">Teknik Mesin</option>
                  <option value="2">Teknik Mesin</option>
                  <option value="2">Teknik Mesin</option>
                  <option value="3">PAUD</option>
                </select>
                <select
                  className="px-2 py-2 border-2 border-black rounded-lg w-1/2 "
                  name="option"
                >
                  <option value="" disabled selected>
                    Jenis Kelamin
                  </option>
                  <option value="1">Laki-laki</option>
                  <option value="2">Perempuan</option>
                </select>
                {/* radio button */}
                {/* <div className="w-1/2 grid grid-cols-2 gap-2 ">
                  <div className=" bg-white border-2 border-black rounded-lg flex items-center justify-center">
                    <label htmlFor="pria" className="font-semibold ">
                      Pria
                    </label>
                    <input
                      id="pria"
                      type="radio"
                      name="gender"
                      value="male"
                      checked
                    />
                  </div>
                  <div className=" bg-white border-2 border-black rounded-lg flex items-center justify-center">
                    <label htmlFor="wanita" className="font-semibold">
                      Wanita
                    </label>
                    <input
                      id="wanita"
                      type="radio"
                      name="gender"
                      value="wanita"
                    />
                  </div>
                </div> */}
              </div>

              <div className="font-medium text-slate-300">
                <p className="inline">Sudah punya akun?</p>

                <a href="" className="ml-2 font-semibold hover:text-black">
                  Masuk
                </a>
              </div>
              <div className="flex justify-center mt-4">
                <button className="btn py-2 px-6 bg-yellow-400 hover:bg-yellow-500 ">
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
