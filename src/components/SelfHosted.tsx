import { GitLab } from "@/assets/Icons/gitLab";
import { SSO } from "@/assets/Icons/SSO";

export const SelfHosted = () => {
  return (
    <>
      <button className=" w-2/3 p-4 flex border border-gray-300 gap-4 justify-center rounded-lg">
        <GitLab />
        <div className="font-inter font-semibold text-base">
          Sign In with GitLab
        </div>
      </button>
      <button className=" w-2/3 p-4 flex border border-gray-300 gap-4 justify-center rounded-lg">
        <SSO />
        <div className="font-inter font-semibold text-base">
          Sign In with SSO
        </div>
      </button>
    </>
  );
};
