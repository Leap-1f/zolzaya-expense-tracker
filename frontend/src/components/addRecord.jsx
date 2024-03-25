export const AddRecord = () => {
  return (
    <div className=" w-screen h-screen flex-col flex items-center justify-center ">
      <div className=" w-[40%] h-[55%] rounded-2xl bg-white border">
        <div className=" border-b-2 py-5 px-6 justify-between flex flex-row ">
          <p className=" text-sm font-semibold"> Add Record</p>
          <label className=" h-2">
            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="  h-96">
          <div className=" h-96 py-5 px-6 ">
            <div className=" w-60 h-10 gap-4 justify-between flex-row items-center join grid grid-cols-2 border  rounded-3xl">
              <button className=" pl-4 text-base font-normal w-16 text-center toggle  ">
                Expense
              </button>
              <button className=" pl-4 text-base font-normal w-16  ">
                Income
              </button>
            </div>
            <div className=" w-60  gap-8 pt-4">
              <input
                className=" pl-4 rounded-lg border-spacing-1 bg-gray-100 h-16 w-[100%]"
                type="text"
                placeholder="₮000.00"
              />
            </div>

            <div className=" flex flex-col gap-2 pt-4">
              <p>Category</p>
              <select className=" w-60 h-10 bg-gray-100 rounded-xl text-gray-400 ">
                <option disabled selected>
                  Find or choose category
                </option>
                <option>Add category</option>
                <option>Home</option>
                <option>Gift</option>
                <option>Food</option>
                <option>Drink</option>
                <option> Shopping</option>
              </select>
            </div>
            <div className=" flex w-60 h-10 justify-between pt-4 gap-4">
              <div className=" w-60 gap-2">
                <p>Date</p>
                <select className=" w-28 h-10 bg-gray-100 rounded-xl text-gray-400 ">
                  <option disabled selected>
                    date
                  </option>
                  <option>Add category</option>
                </select>
              </div>
              <div className="">
                <p>Date</p>
                <select className=" w-28 h-10 bg-gray-100 rounded-xl text-gray-400 ">
                  <option disabled selected>
                    date
                  </option>
                  <option>Add category</option>
                </select>
              </div>
            </div>
            <div className=" w-60 pt-16">
              <button className=" w-60 h-8 bg-blue-500 rounded-xl">
                Add Record
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
