interface PopoverProps {
  trigger: React.ReactNode;
  items: React.ReactNode[];
}
export function Popover({ trigger, items }: PopoverProps) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        {trigger}
      </div>
      <div
        tabIndex={0}
        className="mt-3 dropdown-content menu rounded-box shadow z-[1] bg-gray-100 dark:bg-gray-800 max-w-fit min-w-32"
      >
        {items}
      </div>
    </div>
  );
}
