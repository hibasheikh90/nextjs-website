import Image from "next/image";
import React from "react";

function Manu() {
  return (
    <div>
      <h2 className=" felx justify-center font-bold text-6xl text-center text-black p-8">
        Our Delicious Menu
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center mx-4 gap-3">
        <div className="">
          <Image
            className="p-5 bg-amber-500 rounded-xl h-[300px] w-[450px] "
            src="/1 a.jpg"
            alt="burger"
            width={500}
            height={40}

          />
          <p className="font-bold text-4xl p-5">Chicken Burger<span className="text-orange-500 ">$3.99</span> </p>
        </div>
        <div>
          <Image
            className="p-5 bg-amber-500 rounded-xl h-[300px] w-[450px] "
            src="/3.jpg"
            alt="frise"
            width={500}
            height={40}
          />
          <p className="font-bold text-4xl p-5">Crispy Frise<span className="text-orange-500">$1.99</span></p>
        </div>
        <div>
          <Image
            className="p-5 bg-amber-500 rounded-xl h-[300px] w-[450px] "
            src="/4.jpg"
            alt="sandwich"
            width={500}
            height={40}
          />
          <p className="font-bold text-4xl p-4">Mayo Sandwich<span className="text-orange-500">$4.99</span></p>
        </div>

        <div>
          <Image
            className="p-5 bg-amber-500 rounded-xl h-[450px] w-[450px] "
            src="/7.jpg"
            alt="roll"
            width={500}
            height={600}
          />
          <p className="font-bold text-4xl p-4">Crispy Mayo Roll<span className="text-orange-500">$3.50</span></p>
        </div>
        <div>
          <Image
            className="p-5 bg-amber-500 rounded-xl h-[450px] w-[450px] "
            src="/5.png"
            alt="pizza"
            width={500}
            height={40}
          />
          <p className="font-bold text-4xl p-4">Cheesey Pizza<span className="text-orange-500">$7.50</span></p>
        </div>
        <div>
          <Image
            className="p-5 bg-amber-500 rounded-xl h-[450px] w-[450px] "
            src="/2.jpg"
            alt="burger"
            width={500}
            height={40}
          />
          <p className="font-bold text-4xl p-4">Beef Burger<span className="text-orange-500">$5.99</span></p>
        </div>
      </div>
    </div>
  );
}

export default Manu;
