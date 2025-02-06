import star1 from "../../public/assests/star1.svg";
import star2 from "../../public/assests/star2.svg";
import publish from "../../public/assests/publish.svg";
import analyt from "../../public/assests/analytics.svg";
import engage from "../../public/assests/engagement.svg";
export default function Support() {
  return (
    <>
      <div className="lg:m-24 m-4 grid lg:grid-cols-2">
        <div className="mx-3">
          <h1 className="text-5xl font-semibold my-4">
            How we support our pratner all over the world
          </h1>
          <h1 className="font-light pr-12">
            SaaS become a common delivery model for many business application,
            including office software, messaging software, payroll processing
            software, DBMS software, management software
          </h1>
          <div className="grid grid-cols-2 mt-12 m-3">
            <div>
              <img src={star1} alt="star1" />
              <h1 className="font-bold">4.9 / 5 rating</h1>
              <h1 className="font-semibold text-[#A6A6A6]">databricks</h1>
            </div>
            <div>
              <img src={star2} alt="star1" />
              <h1 className="font-bold">4.8 / 5 rating</h1>
              <h1 className="font-semibold text-[#A6A6A6]">Chainalysis</h1>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-2">
          <div className="flex flex-row gap-3 mb-4">
            <div className="">
              <img className="size-20" src={publish} alt="img" />
            </div>
            <div className="m-3">
              <h1 className="font-bold text-xl">Publishing</h1>
              <p>
                Plan, collaborate, and publishing your contetn that drivees
                meaningful engagement
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3 mb-4">
            <div className="">
              <img className="size-20" src={analyt} alt="img" />
            </div>
            <div className="m-3">
              <h1 className="font-bold text-xl">Analytics</h1>
              <p>Analyze your performance and create goegeous report</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 mb-4">
            <div className="">
              <img className="size-20" src={engage} alt="img" />
            </div>
            <div className="m-3">
              <h1 className="font-bold text-xl">Engagement</h1>
              <p>Quiuckly navigate you anda engage with your adience</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
