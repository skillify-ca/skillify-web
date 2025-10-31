import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

type CheckboxFormProps = {
  items: { label: string; required: boolean }[];
  url: string;
  title: string | undefined;
};

export default function CheckboxForm({ items, url, title }: CheckboxFormProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const isDisabled = items.some((item) => item.required && !checkedItems.includes(item.label));
  
  const onChange = (label: string) => {
    if (checkedItems.includes(label)) {
      setCheckedItems(checkedItems.filter((item) => item !== label));
    } else {
    setCheckedItems([...checkedItems, label]);
    }
  };

  return (
    <div>
      {title && <h1 className="font-bold mb-4">{title}</h1>}
      {items.map((item) => (
        <Checkbox label={item.label} onChange={(e) => onChange(item.label)} checked={checkedItems.includes(item.label)} />
      ))}
      <div className="mt-4">
        <Link href={url}> <Button label="Continue" disabled={isDisabled} /></Link>
      </div>
    </div>
    );
}
 