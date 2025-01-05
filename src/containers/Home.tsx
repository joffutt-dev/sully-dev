import { Divider } from "../components/ui/Divider";

export function Home() {
  return (
    <div>
      <div className="bg-white dark:bg-slate-800 m-2 p-4 rounded-2xl shadow-xl text-center">
        <h1 className="text-slate-900 dark:text-white">Welcome to Sully Net</h1>
        <Divider />
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm mb-2">
          A website engineered to show off the cutest pup in the world
        </p>
        <img src="/src/images/sullytoy.png" alt="sully coot" />
      </div>
    </div>
  );
}
