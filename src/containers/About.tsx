import { Divider } from "../components/ui/Divider";

export function About() {
  return (
    <div>
      <div className="bg-white dark:bg-slate-800 m-2 p-4 rounded-2xl shadow-xl text-center">
        <h1 className="text-slate-900 dark:text-white">About us</h1>
        <Divider />
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm mb-2">
          Under development by one of the two heads of O2 solutions
        </p>
      </div>
    </div>
  );
}
