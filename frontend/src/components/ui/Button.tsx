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
    primary: 'bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304] text-white hover:from-[#c84300] hover:to-[#ed5001] focus:ring-[#ed5001] shadow-[#ed5001]/25 hover:shadow-lg hover:shadow-[#ed5001]/35 border border-[#f4a304]/20',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 shadow-slate-900/20 hover:shadow-lg hover:shadow-slate-900/30 border border-slate-800',
    'accent-green': 'bg-[#265e11] text-white hover:bg-[#1c470d] focus:ring-[#265e11] shadow-[#265e11]/25 hover:shadow-lg hover:shadow-[#265e11]/35 border border-[#265e11]/20',
    'solar-blue': 'bg-linear-to-r from-[#1d4ed8] via-[#2563eb] to-[#0284c7] text-white hover:from-[#1e40af] hover:to-[#1d4ed8] focus:ring-[#2563eb] shadow-[#1d4ed8]/25 hover:shadow-lg hover:shadow-[#1d4ed8]/35 border border-[#3b82f6]/30',
    outline: 'border-2 border-slate-300 text-slate-700 hover:border-[#ed5001] hover:text-[#ed5001] bg-transparent focus:ring-[#ed5001]',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-transparent focus:ring-slate-400 shadow-none',
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
