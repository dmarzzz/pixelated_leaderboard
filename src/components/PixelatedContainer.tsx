import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function PixelatedContainer({ children, className = '' }: Props) {
  return (
    <div className={`pixel-border bg-indigo-950 p-4 ${className}`}>
      {children}
    </div>
  );
}