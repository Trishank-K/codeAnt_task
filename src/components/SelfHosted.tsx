import { Card } from "./ui/card";
import { GitLab } from "@/assets/gitLab";
import { SSO } from "@/assets/SSO";

export const SelfHosted = () => {
  return (
    <>
      <button className="w-full flex justify-center">
        <Card icon=<GitLab /> text="Sign In with GitLab" />
      </button>
      <button className="w-full flex justify-center">
        <Card icon=<SSO /> text="Sign In with SSO" />
      </button>
    </>
  );
};
