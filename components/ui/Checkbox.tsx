// components/ui/Checkbox.tsx

import React from "react";

export function Checkbox({
  label,
  checked,
  onChange,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { label: string, checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className={"flex items-center gap-2"} {...props} onClick={onChange}>
      <input type="checkbox" className="cursor-pointer" checked={checked} />
      <label className="cursor-pointer">{label}</label>
    </div>
  );
}