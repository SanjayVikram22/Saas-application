import { MdSlowMotionVideo } from "react-icons/md";
import poster from "../../public/assests/Group 138.png";
import vector from "../../public/assests/Vector 32.png";
import grammarly from "../../public/assests/Group 146.png";
import descript from "../../public/assests/Group 145.png";
import intercom from "../../public/assests/Group 141.png";
import unsplash from "../../public/assests/Group 144.png";
import notion from "../../public/assests/Group 142.png";
export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className="lg:m-24 ">
          <h1 className="lg:text-7xl text-5xl  font-bold m-5">
            We're here to Increase your Productivity
          </h1>
          <img className="lg:ml-3 p-4" src={vector} alt="img" />
          <div>
            <div className="text-left text-xl mt-3 mx-3">
              <p>
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest features in managing work
                every day.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-6 justify-around">
            <div className="bg-[#54BD95] px-6 py-3 rounded-3xl text-white">
              <button>Try free trail</button>
            </div>
            <div>
              <button className="flex flex-row ">
                <div className="text-4xl mr-2 ">
                  <MdSlowMotionVideo />
                </div>
                <div className="mt-1 ">View Demo</div>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:m-24 p-5">
          <img src={poster} alt="img" />
        </div>
      </div>
      <div className="flex flex-col lg:m-5">
        <div className="justify-items-center ">
          <h1 className="lg:text-5xl  font-bold lg:m-10 m-5">
            More than 25,000 teams use Collabs
          </h1>
        </div>
        <div className="lg:flex lg:flex-row flex-col px-7 gap-6 py-3 grid grid-cols-1 lg:justify-around lg:m-5">
          <img src={grammarly} alt="img" />
          <img src={descript} alt="img" />
          <img src={intercom} alt="img" />
          <img src={unsplash} alt="img" />
          <img src={notion} alt="img" />
        </div>
      </div>
    </>
  );
}
