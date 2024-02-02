'use client'

import React from "react"
import cn from 'clsx'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: React.ReactNode;
  classname?: string;
} & React.ComponentProps<'button'>  // this is a type that allows us to pass any props that a button can take;

export default function Button({ className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge('hover:bg-slate-500 border border-slate-100 text-white rounded transition-all py-2 px-4', className)} 
      {...props}
    >
      {children}
    </button>
  );
}