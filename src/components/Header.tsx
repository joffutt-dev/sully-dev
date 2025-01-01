import { useNavigate } from "react-router";
import { Button } from "./ui/Button";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium flex p-3">
      <Button onClick={() => navigate("/home")}>Home</Button>
      <div className="ml-auto flex">
        <Button onClick={() => navigate("/sully")} extraClassNames="mr-1">
          See Sully
        </Button>
        <Button onClick={() => navigate("/about")}>About</Button>
      </div>
    </div>
  );
}
