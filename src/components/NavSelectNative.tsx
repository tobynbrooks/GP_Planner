'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export type NavItem = {
  label: string;
  value: string;
  href: string;
};

export function NavSelectNative({
  items,
  placeholder = 'Go to another branch',
  label,
  className,
}: {
  items: NavItem[];
  placeholder?: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState('');

  return (
    <div className={className}>
      {label ? <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label> : null}
      <select
        className="w-[220px] rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => {
          const nextValue = e.target.value;
          setValue(nextValue);
          const destination = items.find((i) => i.value === nextValue)?.href;
          if (destination) {
            router.push(destination);
          }
        }}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}


