import React from "react";
import { kegiatan } from "../constants/data";

const Kegiatan = () => {
  return (
    <section className="mt-14 pb-20">
      <div className="border-b-2 border-black bg-sky-500 py-11  ">
        <h1 className="text-center text-3xl lg:text-4xl font-semibold">
          Kegiatan
        </h1>
      </div>
      <div className="container mt-10">
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {/* second */}
          {kegiatan == null ? (
            <h1>Kegiatan Belum Dibuat</h1>
          ) : (
            kegiatan.map(({ image, judul, color }, index) => (
              <div key={index} className=" w-full ">
                <div className="overflow-hidden rounded-md border-2 border-black">
                  <div className={`${color} flex items-center justify-center`}>
                    <img src={image} alt={judul} />
                  </div>
                  <h3 className="p-2 font-medium border-t-2 border-black">
                    {judul}
                  </h3>
                  <div className="flex justify-between border-t-2 border-black">
                    <h4 className="p-2 ">Lihat lebih lanjut --</h4>
                    <div className="flex border-l-2 border-black px-5 py-1.5">
                      <button
                        onClick={() => navigate("/products-detail")}
                        className="rounded-full px-2 text-sm font-medium bg-sky-400 hover:bg-sky-500 btn "
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
