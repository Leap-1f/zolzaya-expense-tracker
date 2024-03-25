import { useRouter } from "next/navigation";
export default function SignUp() {
   const route = useRouter();
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className=" flex flex-col  text-center gap-9">
        <div className=" flex flex-row justify-center items-center gap-2 ">
          <img className=" w-[5%] " src="Vector.png" alt="" />
          <p className=" text-2xl font-bold">Geld</p>
        </div>
        <div className=" flex flex-col justify-center items-center m-4 gap-2">
          <img
            className=" w-[15%]"
            src="https://t3.ftcdn.net/jpg/04/17/41/92/360_F_417419275_y8vQY8TXGRpQGpsgkkqihUaWpmtukRhY.jpg"
            alt=""
          />
          <p className=" font-bold cursor-pointer" onClick={() => route.push("/currency")}>
            Түр хүлээнэ үү...
          </p>
        </div>
      </div>
    </div>
  );
}
