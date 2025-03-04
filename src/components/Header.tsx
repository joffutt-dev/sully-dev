import { useNavigate } from "react-router";
import { Button } from "./ui/Button";
import { ThemeController } from "./ui/ThemeControllers";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Popover } from "./ui/Popover";
import { Divider } from "./ui/Divider";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-500 dark:bg-slate-800 text-slate-900 dark:text-white font-medium flex p-2 shadow-md">
      <Button onClick={() => navigate("/home")}>Home</Button>
      <div className="ml-auto flex">
        <Button onClick={() => navigate("/sully")} extraClassNames="mr-1">
          See Sully
        </Button>
        <Button onClick={() => navigate("/sully-videos")} extraClassNames="mr-1">
          Videos
        </Button>
        <Button onClick={() => navigate("/about")} extraClassNames="mr-1">
          About
        </Button>
        <Popover
          trigger={<UserCircleIcon className="size-8" />}
          items={[
            <Button
              key="profile"
              onClick={() => navigate("/profile")}
              extraClassNames="btn-ghost"
            >
              Profile
            </Button>,
            <Divider key="divider" extraClassNames="mt-1 mb-1" />,
            <Button key="logout" extraClassNames="btn-ghost">
              Logout
            </Button>,
          ]}
        />
        <ThemeController />
      </div>
    </div>
  );
}
