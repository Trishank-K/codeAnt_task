import image from "@/assets/signIn_Left.png";
import CodeAnt from "@/assets/codeAnt_Icon";
import { Button } from "@/components/ui/button";
import { Saas } from "@/components/Saas";
import { useState } from "react";
import { SelfHosted } from "@/components/SelfHosted";
export default function SignIn() {
  const [state, setState] = useState(0);
  return (
    <div className="grid grid-cols-2 bg-[#FAFAFA] items-center">
      <div className="col-span-1">
        <img src={image} className="object-fill " alt="img" />
      </div>
      <div className="flex flex-col px-6 col-span-1 gap-8">
        <div className=" bg-white border border-gray-200 rounded-xl shadow-sm shadow-gray-300">
          <div className="w-full flex flex-col px-6 justify-center items-center py-9">
            <div className="flex justify-center items-center mb-9">
              <CodeAnt />{" "}
              <div className=" font-satoshi text-3xl">CodeAnt AI</div>
            </div>
            <div className="font-inter font-semibold text-5xl mb-5">
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
          <div className="flex flex-col items-center gap-4 border-t py-6 min-h-[340px] border-gray-200">
            {state == 0 && <Saas />}
            {state == 1 && <SelfHosted />}
          </div>
        </div>
        <p className="flex justify-center">
          By signing up you agree to the <span className="font-bold">&nbsp;Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
