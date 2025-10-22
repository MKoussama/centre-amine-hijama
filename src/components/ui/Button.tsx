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
      default: 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg hover:scale-105',
      outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50 hover:scale-105',
      ghost: 'text-green-600 hover:bg-green-50',
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
