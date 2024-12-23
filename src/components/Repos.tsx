import { useState } from "react";
import { Add } from "@/assets/Icons/Add";
import { DatabaseCustomIcon } from "@/assets/Icons/Database";
import { Refresh } from "@/assets/Icons/Refresh";
import { Search } from "@/assets/Icons/Search";
import { RepoList } from "@/lib/repos_list";

export const Repos = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredRepos = RepoList.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="col-span-1 relative 0 lg:col-span-5 lg:p-6 h-screen flex flex-col justify-between">
      <div className="flex flex-col bg-white h-screen w-full lg:rounded-lg border border-r-gray-300">
        <div className="flex flex-col w-full lg:justify-between  lg:flex-row p-6">
          <div className="gap-6">
            <h2 className="text-2xl font-semibold font-inter">Repositories</h2>
            <p className="text-[#414651] text-sm font-normal">
              {filteredRepos.length} Total Repositories
            </p>
          </div>
          <div className="relative top-4 lg:top-0 flex gap-2 lg:pt-0 ">
            <button className="border-[2px] flex py-2 lg:py-0 items-center gap-2 border-gray-300 rounded-lg px-4 lg:px-8">
              <Refresh />
              <p>Refresh All</p>
            </button>
            <button className="bg-blue-600 flex items-center gap-2 text-white rounded-lg px-2 lg:px-4">
              <Add />
              <p>Add Repository</p>
            </button>
          </div>
        </div>

        <div className="relative mt-4 lg:w-1/3 px-6">
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search repositories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full border border-gray-300 rounded-lg py-2 text-sm placeholder:font-inter placeholder:text-[#414651] placeholder:h-4"
          />
        </div>

        <div className="h-[70vh] overflow-y-auto scrollbar-none mt-6 pb-6 border-t-[2px] border-gray-300">
          {filteredRepos.map((repo, index) => (
            <div key={index} className="p-6 border-b-[1px] border-gray-300 hover:bg-[#f5f5f5]">
              <div className="flex gap-2 items-center">
                <h2 className="font-medium text-lg lg:text-xl font-inter">{repo.name}</h2>
                <div className="text-sm text-[#175CD3] rounded-full bg-[#eff8ff] border border-gray-300 font-inter px-2">
                  {repo.Privacy}
                </div>
              </div>
              <div className="flex gap-10 font-inter lg:text-base text-sm">
                <div className="flex gap-2 items-center">
                  <div>{repo.TechStack}</div>
                  <div className="w-2 h-2 rounded items-center bg-[#1570EF]"></div>
                </div>
                <div className="flex gap-2 items-center">
                  <DatabaseCustomIcon />
                  <div>{repo.Storage}</div>
                  <p>KB</p>
                </div>
                <div> Updated {repo.LastUpdated} days ago</div>
              </div>
            </div>
          ))}
          {filteredRepos.length === 0 && (
            <div className="text-center text-gray-500 mt-10">
              No repositories found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
