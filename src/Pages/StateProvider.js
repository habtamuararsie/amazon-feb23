import React, {createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";

// prepare the data layer
export const StateContext = createContext();
 
//wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull and push information from the data layer

 export const useStateValue = () =>{
    return useContext(StateContext)
 } ;
