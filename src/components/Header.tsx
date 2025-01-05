import { useNavigate } from "react-router";
import { Button } from "./ui/Button";
import { ThemeController } from "./ui/ThemeControllers";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-500 dark:bg-slate-800 text-slate-900 dark:text-white font-medium flex p-2 shadow-md">
      <Button onClick={() => navigate("/home")}>Home</Button>
      <div className="ml-auto flex">
        <Button onClick={() => navigate("/sully")} extraClassNames="mr-1">
          See Sully
        </Button>
        <Button onClick={() => navigate("/about")} extraClassNames="mr-1">
          About
        </Button>
        <ThemeController />
      </div>
    </div>
  );
}
