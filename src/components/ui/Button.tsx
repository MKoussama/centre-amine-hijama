import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', children, className = '', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      default: 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg hover:scale-105',
      outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50 hover:scale-105',
      ghost: 'text-teal-600 hover:bg-teal-50',
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
