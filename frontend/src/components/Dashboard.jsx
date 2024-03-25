import { useRouter } from "next/navigation";
export const Dashboard = () => {
  const route = useRouter();

  return (
    <div className=" w-screen h-screen">
      <div className="flex flex-col gap-5 ">
        <div className=" gap-32 px-32 py-8 flex justify-between ">
          <div className="flex flex-row gap-8">
            <img className=" h-[60%] cursor-pointer" src=" Vector.png" alt="" />
            <a className="btn btn-ghost text-xl cursor-pointer">Dashboard</a>
            <a className="btn btn-ghost text-xl cursor-pointer">Records</a>
          </div>

          <div className="flex  gap-6">
            <div className="flex justify-center items-center  ">
              <button className=" w-24 h-8 rounded-2xl bg-blue-600 text-[#ffff] text-center cursor-pointer">
                Record
              </button>
            </div>
            <div className="flex ">
              <div className="w-10 rounded-full">
                <img
                  className=" rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* card  */}
        <div className=" bg-gray-200  ">
          <div className=" pt-11 pl-28 flex flex-row gap-8">
            <div className=" h-56 w-96 bg-blue-600 rounded-xl">
              <div className=" w-20 h-7 pt-8 pl-8 gap-2 flex flex-row ">
                <img
                  className="w-5 h-5 items-center"
                  src="./Vector (1).png"
                  alt=""
                />
                <img className="w-10 h-5" src="./Geld.png" alt="" />
              </div>

              <div className=" w-28 h-14 pt-32 pl-8">
                <p className=" text-gray-400 size-4 leading-6">Cash</p>
                <p className=" leading-8 text-gray-50">100,000</p>
              </div>
              <div>
                <img
                  className=" relative bottom-40 h-56 w-96 rounded-xl opacity-30"
                  src="./Noise.png"
                  alt=""
                />
                <img
                  className=" relative bottom-[352px] left-44 w-52 h-48 opacity-50"
                  src="./Shape.png"
                  alt=""
                />
              </div>
            </div>
            {/* card2 */}
            <div className=" h-56  w-96  bg-gray-50 rounded-xl ">
              <div className=" w-96 h-14 py-4 px-6 gap-2 border-b-2 flex flex-row items-center">
                <img className=" w-2 h-2" src="./Ellipse 124.png" alt="" />
                <p className=" w-24 h-6 text-base font-semibold  ">
                  Your Income
                </p>
              </div>
              <div className=" w-96 h-40 py-5 px-6 gap-4 ">
                <div className=" w-48 h-20 gap-1">
                  <div className=" w-48 h-10 gap-1 flex flex-row ">
                    <p className=" w-48 h-10 text-4xl font-semibold">
                      1,200,000
                    </p>
                    <p className=" h-10 w-5 text-4xl font-semibold">₮</p>
                  </div>
                  <p className=" w-44 h-7 text-lg font-normal text-slate-500">
                    Your Income Amount
                  </p>
                </div>
                <div className=" w-56 h-7 pt-4 pl-0.5 gap-2 flex flex-row items-center">
                  <img className=" w-5 h-5" src="./Leading icon.png" alt="" />
                  <p className=" w-48 h-7 text-lg font-normal ">
                    32% from last month
                  </p>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className=" h-56  w-96  bg-gray-50 rounded-xl ">
              <div className=" w-96 h-14 py-4 px-6 gap-2 border-b-2 flex flex-row items-center">
                <img className=" w-2 h-2" src="./Ellipse 124.png" alt="" />
                <p className=" w-36 h-6 text-base font-semibold  ">
                  Total Expenses
                </p>
              </div>
              <div className=" w-96 h-40 py-5 px-6 gap-4 ">
                <div className=" w-48 h-20 gap-1">
                  <div className=" w-48 h-10 gap-1 flex flex-row ">
                    <p className=" w-48 h-10 text-4xl font-semibold">
                      -1,200,000
                    </p>
                    <p className=" h-10 w-5 text-4xl font-semibold">₮</p>
                  </div>
                  <p className=" w-44 h-7 text-lg font-normal text-slate-500">
                    Your Income Amount
                  </p>
                </div>
                <div className=" w-56 h-7 pt-4 pl-0.5 gap-2 flex flex-row items-center">
                  <img className=" w-5 h-5" src="./sum .png" alt="" />
                  <p className=" w-48 h-7 text-lg font-normal ">
                    32% from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* income */}
          <div className="pt-11 pl-28 flex flex-row gap-10 ">
            <div className="w-[44%] h-[284px]  rounded-xl bg-slate-50">
              <div className=" border-b-2 h-14 py-4 px-6  gap-2  ">
                <p className=" font-semibold text-base ">Income - Expense</p>
              </div>
            </div>
            <div className="w-[44%] h-[284px] rounded-xl bg-slate-50 justify-between ">
              <div className=" border-b-2 h-14 py-4 px-6  gap-2 flex justify-between">
                <p className=" font-semibold text-base ">Income - Expense</p>
                <p>Jun 1 - Nov 30</p>
              </div>
            </div>
          </div>
          {/* last record */}
          <div className=" w-[84.3%] h-[465px] ml-28 mt-11 mb-11 bg-slate-50 rounded-xl">
            <div className="border-b-2 gap-2 h-14 py-4 px-6 ">Last Records</div>
            <div className="">
              <div className=" justify-between border-b-2 py-5 h-20 flex flex-row ">
                <div className=" h-10 w-56 gap-4 flex pl-11 pb-11 ">
                  <div className="  w-10 h-10 rounded-full  bg-blue-600 flex items-center justify-center">
                    <img className=" w-3.5 h-3.5 " src="./home.png" alt="" />
                  </div>
                  <div className="w-32 h-10">
                    <p className=" text-gray-500 text-xs font-normal">
                      Lending & Renting
                    </p>
                    <p className=" text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <div className=" text-green-400 gap-2 flex flex-row justify-between pr-4">
                  <p>-</p>
                  <p>1000₮</p>
                </div>
              </div>
              <div className=" justify-between border-b-2 py-5 h-20 flex flex-row ">
                <div className=" h-10 w-56 gap-4 flex pl-11 pb-11 ">
                  <div className="  w-10 h-10 rounded-full  bg-blue-600 flex items-center justify-center">
                    <img className=" w-3.5 h-3.5 " src="./home.png" alt="" />
                  </div>
                  <div className="w-32 h-10">
                    <p className=" text-gray-500 text-xs font-normal">
                      Lending & Renting
                    </p>
                    <p className=" text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <div className=" text-green-400 gap-2 flex flex-row justify-between pr-4">
                  <p>-</p>
                  <p>1000₮</p>
                </div>
              </div>
              <div className=" justify-between border-b-2 py-5 h-20 flex flex-row ">
                <div className=" h-10 w-56 gap-4 flex pl-11 pb-11 ">
                  <div className="  w-10 h-10 rounded-full  bg-blue-600 flex items-center justify-center">
                    <img className=" w-3.5 h-3.5 " src="./home.png" alt="" />
                  </div>
                  <div className="w-32 h-10">
                    <p className=" text-gray-500 text-xs font-normal">
                      Lending & Renting
                    </p>
                    <p className=" text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <div className=" text-green-400 gap-2 flex flex-row justify-between pr-4">
                  <p>-</p>
                  <p>1000₮</p>
                </div>
              </div>
              <div className=" justify-between border-b-2 py-5 h-20 flex flex-row ">
                <div className=" h-10 w-56 gap-4 flex pl-11 pb-11 ">
                  <div className="  w-10 h-10 rounded-full  bg-blue-600 flex items-center justify-center">
                    <img className=" w-3.5 h-3.5 " src="./home.png" alt="" />
                  </div>
                  <div className="w-32 h-10">
                    <p className=" text-gray-500 text-xs font-normal">
                      Lending & Renting
                    </p>
                    <p className=" text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <div className=" text-green-400 gap-2 flex flex-row justify-between pr-4">
                  <p>-</p>
                  <p>1000₮</p>
                </div>
              </div>
              <div className=" justify-between border-b-2 py-5 h-20 flex flex-row ">
                <div className=" h-10 w-56 gap-4 flex pl-11 pb-11 ">
                  <div className="  w-10 h-10 rounded-full  bg-blue-600 flex items-center justify-center">
                    <img className=" w-3.5 h-3.5 " src="./home.png" alt="" />
                  </div>
                  <div className="w-32 h-10">
                    <p className=" text-gray-500 text-xs font-normal">
                      Lending & Renting
                    </p>
                    <p className=" text-gray-500 text-xs font-normal">
                      3 hours ago
                    </p>
                  </div>
                </div>

                <div className=" text-green-400 gap-2 flex flex-row justify-between pr-4">
                  <p>-</p>
                  <p>1000₮</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
