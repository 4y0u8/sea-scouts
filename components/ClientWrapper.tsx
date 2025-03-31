'use client';

import React, { createContext, useState, ReactNode } from 'react';

// Define the type for the context value
interface StateContextType {
  state: any; // Replace 'any' with a more specific type if needed
  setState: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context with a default value of 'null'
const StateContext = createContext<StateContextType | null>(null);

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  const [state, setState] = useState<any>(null); // Adjust 'any' to your required state type

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

export default ClientWrapper;
