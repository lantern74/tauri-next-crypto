"use client";
import { createContext, useContext, useState } from "react";

// Create Sidebar Context
const SidebarContext = createContext({
  isOpen: true,
  toggleSidebar: () => {},
});

// Sidebar Provider to wrap around the app
export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use SidebarContext
export const useSidebar = () => useContext(SidebarContext);
