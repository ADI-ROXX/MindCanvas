"use client";

// This will contain the context api pertaining to the values of username to the whole app 
import { createContext,useState } from "react";

export const DataContext =   createContext(null);

const DataProvider=({children,isAuthenticated,setAuthenticated})=>{
    const [account,setAccount] = useState('');

    return(
        <DataContext.Provider value={{account,setAccount,isAuthenticated,setAuthenticated}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider;
