import CodeAnt from "@/assets/Icons/codeAnt_Icon";
import { ChevronDownIcon } from "lucide-react";
import { menu } from "@/lib/menu_options";
import { useState } from "react";
import { Sandwich } from "@/assets/Icons/Sandwich";
import { Cross } from "@/assets/Icons/Cross";

export const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const [showOptions, setShowOptions] = useState(false); // Default to hidden on smaller devices

  return (
    <div className="relative bg-white col-span-1 lg:p-4 flex flex-col items-center lg:items-stretch justify-between">
      {/* Header Section */}
      <div className="relative h-24 flex flex-col w-full border-b lg:border-0 border-gray-300 lg:p-0 lg:w-full justify-between">
        <div className="flex justify-between p-6 lg:p-0 lg:justify-start items-center">
          <div className="flex gap-4 ">
            <CodeAnt />
            <div className="font-satoshi text-3xl">CodeAnt AI</div>
          </div>
          <button
            onClick={() => setShowOptions((prev) => !prev)}
            className="block lg:hidden"
          >
            {showOptions ? <Cross /> : <Sandwich />}
          </button>
        </div>
        {/* Profile Section (Smaller Devices) */}
        <div
          className={`relative -top-24 bg-white shadow-lg border-b border-gray-300  p-4 transition-transform transform ${
            showOptions ? "translate-y-20" : "-translate-y-full"
          } lg:hidden z-50`}
        >
          <div className="flex p-2 font-inter font-medium justify-between border border-gray-300 rounded-lg">
            <p>Trishank Kaushik</p>
            <ChevronDownIcon />
          </div>
          <div className="mt-4 flex flex-col">
            {menu.map((item, index) => (
              <div
                key={index}
                className={`flex justify-start gap-2 p-2 rounded-lg hover:cursor-pointer ${
                  selected === index ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => {
                  setSelected(index);
                  setShowOptions(false); // Close menu after selecting
                }}
              >
                {selected === index ? item.icon2 : item.icon}
                <p className={`font-bold font-inter text-base`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Section (Larger Devices) */}
      <div className="hidden lg:flex flex-col flex-1 py-4">
        {menu.slice(0, -2).map((item, index) => (
          <div
            key={index}
            className={`flex justify-start gap-2 p-2 rounded-lg hover:cursor-pointer ${
              selected === index ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setSelected(index)}
          >
            {selected === index ? item.icon2 : item.icon}
            <p className={`font-bold font-inter text-base`}>
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Section (Larger Devices) */}
      <div className="hidden lg:block py-4">
        {menu.slice(-2).map((item, index) => {
          const actualIndex = menu.length - 2 + index;
          return (
            <div
              key={actualIndex}
              className="flex justify-start gap-2 p-2 rounded-lg hover:cursor-pointer"
              onClick={() => setSelected(actualIndex)}
            >
              {item.icon}
              <p className="font-bold font-inter text-base">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
