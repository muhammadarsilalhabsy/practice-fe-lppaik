import React from "react";

const Login = () => {
  return (
    <section className="">
      <div className="flex flex-wrap">
        {/* right side */}
        <div className="w-full lg:w-1/2 bg-teal-600 h-screen flex items-center justify-center">
          <div className="bg-sky-600 w-4/5 md:w-3/5 px-5 py-10 btn">
            <h1 className="font-bold text-white text-xl md:text-2xl text-center mb-10 ">
              Selamat Datang
            </h1>
            <form action="">
              <div>
                <label htmlFor="username" className="font-semibold">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full mt-2 mb-6 py-2 px-4 rounded-lg border-2 border-black"
                  placeholder="Nomor induk "
                />
              </div>

              <div>
                <label htmlFor="password" className="font-semibold">
                  Katasandi
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full mt-2 mb-4  py-2 px-4 rounded-lg border-2 border-black"
                  placeholder="rahasia"
                />
              </div>
              <div className="font-medium text-slate-300">
                <p className="inline">Belum punya akun?</p>

                <a href="" className="ml-2 font-semibold hover:text-black">
                  Daftar
                </a>
              </div>
              <div className="flex justify-center mt-5">
                <button className="btn py-2 px-6 bg-yellow-400 hover:bg-yellow-500 ">
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* left side */}
        <div className="w-full hidden lg:flex lg:w-1/2 bg-sky-600 h-screen border-l-2 border-black  items-center justify-center ">
          <img src="btq.png" alt="btq" className="mx-auto my-auto" />
        </div>
      </div>
    </section>
  );
};

export default Login;
