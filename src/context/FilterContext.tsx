
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
    activeSkill: string | null;
    setActiveSkill: (skill: string | null) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    return (
        <FilterContext.Provider value={{ activeSkill, setActiveSkill }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilter must be used within a FilterProvider");
    return context;
};
