export const Record = () => {
  return (
    <div className=" w-screen h-screen">
      <div className=" flex flex-col gap-5">
        <div className="gap-32 px-32 py-8 flex justify-between">
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
      </div>
      {/* typex */}
      <div className=" w-screen h-screen bg-slate-50 flex flex-col py-8 px-32  ">
        <div className=" w-64 h-[100%] gap-6 py-6 px-5 rounded-xl border bg-white ">
          <div className="flex flex-col w-60 gap-6  ">
            <p className=" text-2xl font-semibold">Records</p>
            <button className=" w-56 h-8 bg-blue-600 rounded-xl">Add</button>
            <input
              type="text"
              className="bg-gray-50 rounded-xl text-gray-400 flex text-center w-56 h-8 border"
              placeholder="Search"
            />
          </div>
          <div className=" gap-6 pt-6 w-28 h-36">
            <p className=" font-bold">Types</p>
            <div className="form-control pt-3 ">
              <label className="label cursor-pointer ">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  checked
                />
                <span className="label-tex pl-2">All</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
                <span className="label-text pl-2">Income</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
                <span className="label-text pl-2">Expense</span>
              </label>
            </div>
          </div>

          
          {/* sum */}
          <div>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
