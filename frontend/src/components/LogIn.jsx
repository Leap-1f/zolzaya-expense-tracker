import {useRouter} from "next/navigation"
export const LogIn = () => {
  const route = useRouter()
  return (
    <div className=" h-screen w-screen flex">
      <div className=" flex flex-row justify-center items-center bg-base-200 w-[50%] px-24 py-24">
        <div className=" flex flex-col justify-center items-center text-center gap-4 ">
          <div className=" flex flex-row gap-2 w-24 h-8 p-1">
            <img className=" " src="Vector.png" alt="" />
            <p className=" text-xl font-bold ">Geld</p>
          </div>
          <div className=" flex flex-col px-5 py-7 gap-4">
            <h4 className=" text-slate-900 font-bold text-2xl ">
              Welcome Back
            </h4>
            <p className=" text-base">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="input input-bordered flex items-center gap-4 flex-col py-2 px-4 w-80 ">
            <input
              type="text"
              className="grow border-spacing-5 w-96 h-12 border-solid border-2 border-gray-200 bg-gray-100 rounded-lg px-4 "
              placeholder="Email"
            />
            <input
              type="text"
              className="grow w-96 h-12 border-solid border-2 border-gray-200 bg-gray-100 rounded-lg px-4"
              placeholder="Password"
            />
          </div>
          <div
            className="w-96 h-12 py-2 gap-4 text-gray-50 bg-blue-600 rounded-2xl divide-y divide-slate-300/25  cursor-pointer"
            onClick={() => route.push("/signUp")}
          >
            <button>Log in </button>
          </div>
          <div className="flex flex-row px-5 py-7 gap-4">
            <p>Don't have account?</p>
            <p
              className=" text-blue-500 cursor-pointer"
              onClick={() => route.push("/log")}
            >
              Sign up
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 w-[50%] h-full"></div>
    </div>
  );
};
