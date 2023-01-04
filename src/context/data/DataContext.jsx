import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const DataContext = createContext();

import data from '../../db/data.json'

export const DataContextProvider = ({children}) => {
    


    return (
    <DataContext.Provider 
        value={{
            data,
        }}
    >
        {children}
    </DataContext.Provider>
  )
}
