import tick from "../../public/assests/tick.svg";
export default function Plan() {
  return (
    <>
      <div className="lg:m-24 m-4">
        <div className="flex flex-col">
          <div className="justify-items-center">
            <h1 className="lg:text-5xl  font-bold lg:m-10 m-5">
              Choose Plan That’s Right For You
            </h1>
            <p className="m-5 text-[#A6A6A6] font-semibold">
              Choose plan that works best for you, feel free to contact us
            </p>
            <div className="p-7">
              <div className="bg-amber-50 px-6 py-3 flex flex-row gap-6 rounded-xl">
                <h1 className="m-1">Bill Monthly</h1>
                <div className="bg-[#54BD95] px-3 py-1 rounded-lg">
                  <h1>Bill Yearly</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 m-4">
          <div className="px-4 py-6  bg-[#6bc2a1] rounded-2xl">
            <div className="flex flex-col">
              <div className="justify-items-center ">
                <h1 className="font-bold text-3xl p-3">Free</h1>
                <p>Have a go and test your </p>
                <h1 className="font-bold text-3xl p-3">$ 0</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl px-2 py-4">
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>2 users</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>2 Files</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>Public Share & Comments</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>Chat Support</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>New income apps</h1>
              </div>
            </div>
          </div>
          <div className="px-4 py-6  bg-[#6bc2a1] rounded-2xl">
            <div className="flex flex-col">
              <div className="justify-items-center ">
                <h1 className="font-bold text-3xl p-3">Pro</h1>
                <p>Experiment the power of infinite possibilities</p>
                <h1 className="font-bold text-3xl p-3">$ 8</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl px-2 py-4">
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>4 Users</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>All apps</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>Unlimited editable exports</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>Folders and collaboration</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>All incoming apps</h1>
              </div>
            </div>
          </div>
          <div className="px-4 py-6  bg-[#6bc2a1] rounded-2xl">
            <div className="flex flex-col">
              <div className="justify-items-center ">
                <h1 className="font-bold text-3xl p-3">Business</h1>
                <p>Unveil new superpowers and join the Design Leaque</p>
                <h1 className="font-bold text-3xl p-3">$ 16</h1>
              </div>
            </div>

            <div className="bg-white rounded-2xl px-2 py-4">
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>All the features of pro plan</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>Account success Manager</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>Single Sign-On (SSO)</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>Co-conception pogram</h1>
              </div>
              <div className="flex flex-row gap-2 m-7">
                <img src={tick} alt="img" />
                <h1>Collaboration-Soon</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
