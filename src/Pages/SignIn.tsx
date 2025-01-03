import image from "@/assets/signIn_Left.png";
import CodeAnt from "@/assets/Icons/codeAnt_Icon";
import { Button } from "@/components/ui/button";
import { Saas } from "@/components/Saas";
import { useState } from "react";
import { SelfHosted } from "@/components/SelfHosted";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [state, setState] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-screen  bg-[#FAFAFA] items-center justify-center">
      <button
        className=" border fixed top-4 p-2 rounded-lg"
        onClick={() => navigate("/repo")}
      >
        Repo Page
      </button>
      <div className="hidden lg:block col-span-1">
        <img src={image} className="object-contain" alt="img" />
      </div>
      <div className="flex flex-col items-center justify-center p-6 col-span-1 gap-8">
        <div className=" bg-white border border-gray-200 rounded-xl shadow-sm shadow-gray-300">
          <div className="w-full flex flex-col px-6 justify-center items-center py-9">
            <div className="flex justify-center items-center mb-9">
              <CodeAnt />
              <div className=" font-satoshi text-3xl">CodeAnt AI</div>
            </div>
            <div className="font-inter font-semibold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5">
              Welcome to CodeAnt AI
            </div>
            <div className="flex w-full">
              <Button
                size={"lg"}
                className="flex-1 rounded-[8px] p-8 text-xl font-inter font-semibold"
                variant={state == 0 ? "selected" : "default"}
                onClick={() => setState(0)}
              >
                SAAS
              </Button>
              <Button
                size={"lg"}
                className="flex-1 p-8 rounded-[8px] text-xl font-inter font-semibold"
                variant={state == 1 ? "selected" : "default"}
                onClick={() => setState(1)}
              >
                Self Hosted
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 border-t py-6 min-h-[330px] border-gray-200">
            {state == 0 && <Saas />}
            {state == 1 && <SelfHosted />}
          </div>
        </div>
        <p className="flex justify-center">
          By signing up you agree to the{" "}
          <span className="font-bold">&nbsp;Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
