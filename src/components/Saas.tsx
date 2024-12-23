import { Github } from "@/assets/Icons/gitHub";
import { BitBucket } from "@/assets/Icons/bitBucket";
import { Azure } from "@/assets/Icons/azure_devops";
import { GitLab } from "@/assets/Icons/gitLab";

export const Saas = () => {
  return (
    <>
      <button className=" w-2/3 p-4 flex border border-gray-300 gap-4 justify-center rounded-lg">
        <Github />
        <div className="font-inter font-semibold text-base">
          Sign In To Github
        </div>
      </button>
      <button className=" w-2/3 p-4 flex border border-gray-300 gap-4 justify-center rounded-lg">
        <BitBucket />
        <div className="font-inter font-semibold text-base">
          Sign In with Bitbucket
        </div>
      </button>
      <button className=" w-2/3 p-4 flex border border-gray-300 gap-4 justify-center rounded-lg">
        <Azure />
        <div className="font-inter font-semibold text-base">
          Sign In with Azure Devops
        </div>
      </button>
      <button className=" w-2/3 p-4 flex border border-gray-300 gap-4 justify-center rounded-lg">
        <GitLab />
        <div className="font-inter font-semibold text-base">
          Sign In with GitLab
        </div>
      </button>
    </>
  );
};
