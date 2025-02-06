import collb from "../../public/assests/collb.svg";
import cloud from "../../public/assests/cloud.svg";
import data from "../../public/assests/data.svg";
export default function Feature() {
  return (
    <>
      <div className="lg:m-24">
        <div className="flex lg:flex-row flex-col justify-between my-10 m-4">
          <div>
            <h1 className="text-5xl font-semibold">Our Features you cab get</h1>
          </div>
          <div></div>
          <div>
            <p className="text-[#A6A6A6] m-4 ">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct esaly
            </p>
          </div>
          <div>
            <button className="bg-[#54BD95] px-6 py-3 rounded-3xl text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
          <div className="p-5 flex flex-col">
            <img src={collb} alt="img" />
            <h1 className="m-2 text-2xl font-semibold">Collboration Teams </h1>
            <p className="m-2 text-[#A6A6A6] ">
              Here you can handle projects together with team virtually
            </p>
          </div>
          <div className="p-5 flex flex-col">
            <img src={cloud} alt="img" />
            <h1 className="m-2 text-2xl font-semibold">Cloud Storage </h1>
            <p className="m-2 text-[#A6A6A6] ">
              No nedd to worry about storage because we provide storage up to 2
              TB
            </p>
          </div>
          <div className="p-5 flex flex-col">
            <img src={data} alt="img" />
            <h1 className="m-2 text-2xl font-semibold">Daily Analytics </h1>
            <p className="m-2 text-[#A6A6A6] ">
              We always provide useful informatin to make it easier for you
              every day
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
