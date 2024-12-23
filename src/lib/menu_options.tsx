import { Repos } from "@/assets/Icons/Repos";
import { Code } from "@/assets/Icons/Code";
import { Cloud } from "@/assets/Icons/cloud";
import { Guide } from "@/assets/Icons/Guide";
import { Settings } from "@/assets/Icons/Settings";
import { Logout } from "@/assets/Icons/Logout";
import { Support } from "@/assets/Icons/Support";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  icon2: JSX.Element;
}

export const menu: MenuItem[] = [
  {
    name: "Repositories",
    icon: <Repos />,
    icon2: <Repos selected={true} />,
  },
  { name: "AI Code Review", icon: <Code />, icon2: <Code selected={true} /> },
  { name: "Cloud Security", icon: <Cloud />, icon2: <Cloud selected={true} /> },
  { name: "How to Use", icon: <Guide />, icon2: <Guide selected={true} /> },
  { name: "Settings", icon: <Settings />, icon2: <Settings selected={true} /> },
  { name: "Support", icon: <Support />, icon2: <Support selected={true} /> },
  { name: "Logout", icon: <Logout />, icon2: <Logout selected={true} /> },
];
