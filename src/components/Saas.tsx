import { Github } from "@/assets/gitHub";
import { Card } from "./ui/card";
import { BitBucket } from "@/assets/bitBucket";
import { Azure } from "@/assets/azure_devops";
import { GitLab } from "@/assets/gitLab";

export const Saas = () => {
  return (
    <>
      <button className="w-full flex justify-center">
        <Card icon=<Github /> text="Sign In with Github" />
      </button>
      <button className="w-full flex justify-center">
        <Card icon=<BitBucket /> text="Sign In with Bitbucket" />
      </button>
      <button className="w-full flex justify-center">
        <Card icon=<Azure /> text="Sign In with Azure Devops" />
      </button>
      <button className="w-full flex justify-center">
        <Card icon=<GitLab /> text="Sign In with GitLab" />
      </button>
    </>
  );
};
