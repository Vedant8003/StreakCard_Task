import React, {createContext,useContext} from "react";
const storeContext = createContext()
export const StoreProvider = ({children}) => {
    const key = 'PZAVLN7V2TRMPIST'
    return(
        <storeContext.Provider value={key}>
            {children}
        </storeContext.Provider>
    )
}

export default storeContext;