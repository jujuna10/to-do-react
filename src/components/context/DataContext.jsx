import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [xpScore,setXpScore] = useState(0)

    const handleAdd = (newData) => {
        setData((prev) => [...prev,newData])
    }

    const handleXpPlus = (xpData) => {
        setXpScore((prev) => prev + 10)
    }

    const handleXpMinus = (xpData2) => {
        setXpScore((prev) => prev - 20)
    }

    
    return (
        <DataContext.Provider value={{ data, setData, handleAdd,handleXpPlus, handleXpMinus, xpScore }}>
            {children}
        </DataContext.Provider>
    );
};
