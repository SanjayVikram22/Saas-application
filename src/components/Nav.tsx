import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function Nav() {
  const [pop, setpop] = useState<boolean>(false);
  return (
    <>
      <div className=" flex flex-row m-7 justify-between ">
        <div className=" lg:ml-24 sm:ml-20 ">
          <h1 className="text-[#54BD95] font-semibold text-5xl">Biccas</h1>
        </div>
        <div></div>
        <div className=" hidden lg:flex gap-15 ">
          <div className=" flex flex-row gap-16 mt-5 ">
            <h1 className="font-semibold">Home</h1>
            <h1 className="font-medium text-[#A6A6A6]">Product</h1>
            <h1 className="font-medium text-[#A6A6A6]">FAQ</h1>
            <h1 className="font-medium text-[#A6A6A6]">Blog</h1>
            <h1 className="font-medium text-[#A6A6A6]">About Us</h1>
          </div>
          <div className="m-2 flex gap-4">
            <div className="mt-3">
              <button className="border-b-amber-100 text-[#A6A6A6]   font-semibold">
                Login
              </button>
            </div>
            <div className="mt-1">
              <button className=" font-semibold text-white bg-[#54BD95] p-2 px-3 rounded-xl">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xl text-[#54BD95] lg:hidden">
          <button
            onClick={() => {
              setpop(!pop);
            }}
          >
            {pop ? (
              <div className="flex flex-col">
                <div className="ml-24 text-2xl text-black">
                  <MdClose />
                </div>
                <div className="">
                  <h1 className="font-semibold text-white bg-[#54BD95] px-3 py-2 m-2 rounded-xl">
                    Home
                  </h1>
                  <h1 className="font-medium text-white bg-[#54BD95] px-3 py-2 m-2 rounded-xl">
                    Product
                  </h1>
                  <h1 className="font-medium text-white bg-[#54BD95] px-3 py-2 m-2 rounded-xl">
                    FAQ
                  </h1>
                  <h1 className="font-medium text-white bg-[#54BD95] px-3 py-2 m-2 rounded-xl">
                    Blog
                  </h1>
                  <h1 className="font-medium text-white bg-[#54BD95] px-3 py-2 m-2 rounded-xl">
                    About Us
                  </h1>
                </div>
              </div>
            ) : (
              <div className='ml-24'>
                <GiHamburgerMenu />
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
