import line from "../../public/assests/line.svg";
import faces from "../../public/assests/faces.svg";
import get from "../../public/assests/get.svg";
import go from "../../public/assests/go.svg";
export default function Footer() {
  return (
    <div className="bg-[#161C28] p-3">
      <div className="lg:m-24 m-4">
        <div className="grid lg:grid-cols-2 gap-15">
          <div className="">
            <h1 className="text-5xl text-white py-3">
              People are Saying About DoWhith
            </h1>
            <p className=" text-white text-2xl py-3">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <img src={line} alt="img" />
            <p className="text-white text-2xl py-3">
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time 😍
            </p>
            <h1 className="text-white text-xl py-3">_ Aria Zinanrio</h1>
            <img className="px-3 py-2" src={faces} alt="img" />
          </div>
          <div className="flex flex-col ">
            <div className=" justify-items-center ">
              <div className="p-3">
                <img src={get} />
              </div>
              <div className="lg:w-1/2">
                <div className="m-5">
                  <h1 className="text-white my-3 ">Email</h1>
                  <input
                    className="bg-white rounded-lg px-2 py-2 w-full  "
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="m-5">
                  <h1 className="text-white my-3">Message</h1>
                  <textarea
                    className="bg-white rounded-lg px-2 py-2 w-full"
                    placeholder="What are you say ?"
                  />
                </div>
                <div className="m-5 ">
                  <div >
                    <button className="bg-[#54BD95] rounded-lg px-2 py-3 w-full justify-items-center text-white">Request Demo </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:m-24 m-5 grid lg:grid-cols-2">
        <div>
          <h1 className="text-[#54BD95] font-semibold text-5xl my-3 ">
            Biccas
          </h1>
          <h1 className="font-semibold text-[#A6A6A6]  my-3">
            Get started new try our product
          </h1>
          <div className="flex flex-row p-2 lg:gap-20 border-2 border-[#A6A6A6] lg:w-fit w-full justify-between rounded-4xl ">
            <input
              className="text-white font-light focus:outline-0 "
              type="text"
              placeholder="Enter your email here"
            />
            <img src={go} alt="img" />
          </div>
        </div>
        <div className="m-3">
          <div className="grid lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-white text-lg">Support</h1>
              <div className="p-2">
                <h1 className=" text-[#A6A6A6] text-lg">Help centre</h1>
                <h1 className=" text-[#A6A6A6] text-lg">Account Information</h1>
                <h1 className=" text-[#A6A6A6] text-lg">About</h1>
                <h1 className=" text-[#A6A6A6] text-lg">Contact us</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-white text-lg">
                Help and Solution
              </h1>
              <div className="p-2">
                <h1 className=" text-[#A6A6A6] text-lg">Talk to support</h1>
                <h1 className=" text-[#A6A6A6] text-lg">Support docs</h1>
                <h1 className=" text-[#A6A6A6] text-lg">System status</h1>
                <h1 className=" text-[#A6A6A6] text-lg">Covid responde</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className=" font-semibold text-white text-lg">Product</h1>
              <div className="p-2">
                <h1 className=" text-[#A6A6A6] text-lg">Update</h1>
                <h1 className=" text-[#A6A6A6] text-lg">Security</h1>
                <h1 className=" text-[#A6A6A6] text-lg">Beta test</h1>
                <h1 className=" text-[#A6A6A6] text-lg">Pricing product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
