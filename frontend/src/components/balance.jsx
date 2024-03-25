 import { useRouter } from "next/navigation";
export const Balance = () => {
  const route = useRouter()
  return (
    <div className=" h-screen w-screen pt-20 ">
      <div className="flex flex-col justify-center items-center gap-8 ">
        <div className=" flex flex-row gap-2 w-24 h-8 p-1">
          <img className=" " src="Vector.png" alt="" />
          <p className=" text-xl font-bold ">Geld</p>
        </div>
        <div className=" flex flex-row justify-center items-center gap-8">
          <p>Currency</p>
          <p>Balance</p>
          <p>Finish</p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-8 pt-20 ">
          <div className=" flex justify-center items-center overflow-auto rounded-full bg-blue-500 w-14 h-14 rounded-bl-full  ">
            <svg
              className=" h-[70%] w-[60%]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cash"
              viewBox="0 0 16 16"
            >
              <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
            </svg>
          </div>

          <p className=" text-2xl ">Select base currency</p>
        </div>
        <div className="input input-bordered flex items-center gap-4 flex-col py-2 px-4 w-80 ">
          <input
            type="text"
            className="grow border-spacing-5 w-80 h-12 border-solid border-2 border-gray-200 bg-gray-100 rounded-lg px-4 "
            placeholder="Email"
          />
          <p className="flex text-wrap  w-80 text-xs pt-2 text-gray-500 ">
            How much cash do you have in your wallet?
          </p>
        </div>

        <div
          className=" flex justify-center w-80 h-10  text-gray-50 bg-blue-600 rounded-2xl cursor-pointer"
          onClick={() => route.push("/finish")}
        >
          <button className=" cursor-pointer">Confirm</button>
        </div>
      </div>
    </div>
  );
};
