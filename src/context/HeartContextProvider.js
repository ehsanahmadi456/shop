import React, { useReducer, createContext } from 'react';

const initialState = {
    selectedItems: [],
    clear: false,
    clicked: 0,
}

const heartReducer = (state, action) => {
    console.log(state);
    switch(action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }
    }
}

export const HeartContext = createContext();

const HeartContextProvider = ({children}) => {

    const [state2, dispatch2] = useReducer(heartReducer, initialState);

    return (
        <HeartContext.Provider value={{state2, dispatch2}}>
            {children}
        </HeartContext.Provider>
    );
};

export default HeartContextProvider;