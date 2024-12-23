import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CodeAnt from "@/assets/Icons/codeAnt_Icon";
import { ChevronDownIcon } from "lucide-react";
import { menu } from "@/lib/menu_options";
import { useState } from "react";
import { Sandwich } from "@/assets/Icons/Sandwich";
import { Cross } from "@/assets/Icons/Cross";

export const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="bg-white col-span-1 lg:p-4 flex flex-col items-center lg:items-stretch justify-between">
      <div className="h-24 flex flex-col w-screen p-6 border-b lg:border-0 border-gray-300 lg:p-0 lg:w-full justify-between">
        <div className="flex justify-between lg:justify-start items-center">
          <div className="flex gap-2">
            <CodeAnt />
            <div className="font-satoshi text-3xl">CodeAnt AI</div>
          </div>
          <button onClick={()=> setShowOptions(()=>!showOptions)} className="block lg:hidden">
            {showOptions ? <Cross /> : <Sandwich />}
          </button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex p-2 border font-inter font-medium justify-between border-gray-300 rounded-lg">
              <p>Trishank Kaushik</p>
              <ChevronDownIcon />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full lg:hidden">
            {menu.slice(0, -2).map((item, index) => (
              <div
                key={index}
                className={`flex justify-start gap-2 p-2 rounded-lg hover:cursor-pointer ${
                  selected === index ? "bg-blue-500" : ""
                }`}
                onClick={() => setSelected(index)}
              >
                {selected === index ? item.icon2 : item.icon}
                <p
                  className={`font-bold font-inter text-base ${
                    selected === index ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </p>
              </div>
            ))}
            {menu.slice(-2).map((item, index) => {
              const actualIndex = menu.length - 2 + index;
              return (
                <div
                  key={actualIndex}
                  className={`flex justify-start gap-2 p-2 rounded-lg hover:cursor-pointer `}
                  onClick={() => setSelected(actualIndex)}
                >
                  {item.icon}
                  <p className={`font-bold font-inter text-base `}>
                    {item.name}
                  </p>
                </div>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="lg:flex hidden flex-col flex-1 py-4 ">
        {menu.slice(0, -2).map((item, index) => (
          <div
            key={index}
            className={`flex justify-start gap-2 p-2 rounded-lg hover:cursor-pointer ${
              selected === index ? "bg-blue-500" : ""
            }`}
            onClick={() => setSelected(index)}
          >
            {selected === index ? item.icon2 : item.icon}
            <p
              className={`font-bold font-inter text-base ${
                selected === index ? "text-white" : ""
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:block hidden py-4">
        {menu.slice(-2).map((item, index) => {
          const actualIndex = menu.length - 2 + index;
          return (
            <div
              key={actualIndex}
              className={`flex justify-start gap-2 p-2 rounded-lg hover:cursor-pointer `}
              onClick={() => setSelected(actualIndex)}
            >
              {item.icon}
              <p className={`font-bold font-inter text-base `}>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
