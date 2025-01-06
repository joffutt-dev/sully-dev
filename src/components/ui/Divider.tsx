interface DividerProps {
  extraClassNames?: React.ComponentProps<"div">["className"];
}
export function Divider({ extraClassNames }: DividerProps) {
  return (
    <div
      className={`divider dark:before:bg-gray-200 dark:after:bg-gray-200 ${extraClassNames}`}
    />
  );
}
