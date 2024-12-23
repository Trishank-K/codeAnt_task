import { Repos } from "@/components/Repos";
import { SideBar } from "@/components/sideBar";

export const Repo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 relative h-screen w-full bg-[#fafafa]">
      <SideBar />
      <Repos/>
    </div>
  );
};
