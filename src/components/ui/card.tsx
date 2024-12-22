import { ReactNode } from "react";

const Card = ({ icon, text }: { icon?: ReactNode; text: string }) => {
  return (
    <div className="flex p-4 gap-4 border w-3/4 items-center justify-center border-gray-300 rounded-lg">
      {icon}
      <div className="font-inter font-semibold text-base">{text}</div>
    </div>
  );
};

export { Card };
