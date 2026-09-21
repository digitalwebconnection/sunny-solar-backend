import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent-green' | 'solar-blue' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm active:scale-[0.98] min-h-[44px] lg:min-h-0';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide gap-1.5',
    md: 'px-5 py-2.5 text-sm tracking-wide gap-2',
    lg: 'px-7 py-3.5 text-base tracking-wide gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-[#2B3CB8] text-white hover:bg-[#2433A1] focus:ring-[#2B3CB8] shadow-[#2B3CB8]/25 hover:shadow-lg hover:shadow-[#2B3CB8]/35 border border-[#2B3CB8]',
    secondary: 'bg-[#0C123E] text-white hover:bg-[#151E64] focus:ring-[#0C123E] shadow-[#0C123E]/20 hover:shadow-lg hover:shadow-[#0C123E]/30 border border-[#0C123E]',
    'accent-green': 'bg-[#2B3CB8] text-white hover:bg-[#2433A1] focus:ring-[#2B3CB8] shadow-[#2B3CB8]/25 hover:shadow-lg hover:shadow-[#2B3CB8]/35 border border-[#2B3CB8]',
    'solar-blue': 'bg-[#2B3CB8] text-white hover:bg-[#2433A1] focus:ring-[#2B3CB8] shadow-[#2B3CB8]/25 hover:shadow-lg hover:shadow-[#2B3CB8]/35 border border-[#6F8EE7]/40',
    outline: 'border-2 border-[#D1DCF8] text-[#1D2984] hover:border-[#2B3CB8] hover:text-[#2B3CB8] hover:bg-[#F5F7FD] bg-transparent focus:ring-[#2B3CB8]',
    ghost: 'text-[#1D2984] hover:text-[#2B3CB8] hover:bg-[#E8EDFB] bg-transparent focus:ring-[#6F8EE7] shadow-none',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
