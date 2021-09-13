import { createContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AppReducer from './AppReducer';
//Initial State 
const initialState = {
    users:[
        { id: uuid(),name:'Sumit Saha'},
        { id: uuid(),name:'Freelancer Nasim'},
        { id: uuid(),name:'Jhankar Mahbub'},
        { id: uuid(),name:'Anisul Islam'},
        { id: uuid(),name:'Khalid Saifullah'},
    ]
}

//create context 
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children }) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions 

    //remove user
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload:id
        })
    }

    //add user
    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload:user
        })
    }

    //add user
    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload:user
        })
    }


    return(
        <GlobalContext.Provider value={{
            users: state.users , 
            removeUser,
            addUser,
            editUser
        }}>
            {children }
        </GlobalContext.Provider>
    )
}
