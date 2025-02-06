import tick from "../../public/assests/tick.svg";
import layout from "../../public/assests/layout1.svg";
export default function Benifit() {
  return (
    <>
      <div className="lg:m-24 m-4 grid lg:grid-cols-2 gap-15">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold">What Benifit Will You Get</h1>
          <div className="flex flex-row gap-2 m-3">
            <img src={tick} alt="img" />
            <h1>Free Consulting With Experet Saving Money</h1>
          </div>
          <div className="flex flex-row gap-2 m-3">
            <img src={tick} alt="img" />
            <h1>Online Banking</h1>
          </div>
          <div className="flex flex-row gap-2 m-3">
            <img src={tick} alt="img" />
            <h1>Investment Report Every Month</h1>
          </div>
          <div className="flex flex-row gap-2 m-3">
            <img src={tick} alt="img" />
            <h1>Saving Money For The Future</h1>
          </div>
          <div className="flex flex-row gap-2 m-3">
            <img src={tick} alt="img" />
            <h1>Online Transection</h1>
          </div>
        </div>
        <div className="">
          <img src={layout} alt="img" />
        </div>
      </div>
    </>
  );
}
