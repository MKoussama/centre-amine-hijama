import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm ${className}`}
    >
      {children}
    </span>
  );
};
