import React, { ReactNode } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ 
  children, 
  className, 
  style 
}) => {
  return (
    <div 
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

export default ClientWrapper;