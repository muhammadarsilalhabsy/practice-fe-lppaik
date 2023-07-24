import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="border-b-2 border-black">
      <div className="flex-wrap flex">
        {/* left side */}
        <div className="w-full h-screen lg:w-1/2 bg-pink-500 pt-20 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
          <div className="container pt-28">
            <div className="lg:px-4">
              <h3 className="text-lg text-white font-bold mb-2">
                Tingkatkan Kemampuan
              </h3>
              <h1 className="text-3xl lg:text-4xl font-bold max-w-md mb-5 tracking-wide">
                Baca Tulis Al-Quran Dengan Metode Yang Efektif Dan Efisien
              </h1>

              <p className="text-sm lg:text-base font-medium text-white max-w-lg mb-5 tracking-wide">
                Menjadikan Civitas Akademik Universitas Muhammadiyah Kendari
                Bebas Buta Baca Tulis Al-Qur'an, Bertakwa dan Berakhlakul
                Karimah.
              </p>
              <Link
                to="/kegiatan"
                className="mt-2 font-medium btn py-2 px-6 bg-yellow-400 hover:bg-yellow-500 transition duration-200"
              >
                Lihat Kegiatan
              </Link>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full h-screen lg:w-1/2 bg-primary ">
          <img
            src="./vector.png"
            alt="gambar"
            className="w-[520px] h-[500px] mt-28 mx-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
