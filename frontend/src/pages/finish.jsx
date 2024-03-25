import { useRouter } from "next/navigation";
export default function Finish () {
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
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
            </svg>
          </div>
          <div className=" flex flex-col justify-center items-center w-80">
            <p className=" text-2xl ">Good job!</p>
            <p className="flex text-wrap text-xs pt-2 text-gray-500 ">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </p>
          </div>
        </div>

        <div
          className=" flex justify-center w-80 h-10  text-gray-50 bg-blue-600 rounded-2xl cursor-pointer "
          onClick={() => route.push("/dashboard")}
        >
          <button className=" cursor-pointer">Go to Dashboard</button>
        </div>
      </div>
    </div>
  );
}
