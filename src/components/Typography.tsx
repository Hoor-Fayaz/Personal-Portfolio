import { ReactNode } from 'react';

interface DisplayTextProps {
  children: ReactNode;
  size?: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  className?: string;
}

export function DisplayText({ children, size = '4xl', className = '' }: DisplayTextProps) {
  const sizeClasses = {
    xl: 'text-2xl sm:text-3xl md:text-4xl',
    '2xl': 'text-3xl sm:text-4xl md:text-5xl',
    '3xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    '4xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    '5xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem]',
    '6xl': 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
  };

  return (
    <h1 className={`display-text ${sizeClasses[size]} font-bold tracking-tight leading-[1.08] ${className}`}>
      {children}
    </h1>
  );
}

interface BodyTextProps {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
}

export function BodyText({ children, size = 'base', className = '' }: BodyTextProps) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <p className={`text-[#888888] ${sizeClasses[size]} leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

interface MonoTextProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base';
  className?: string;
}

export function MonoText({ children, size = 'sm', className = '' }: MonoTextProps) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
  };

  return (
    <span className={`mono-text text-[#666666] ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
}