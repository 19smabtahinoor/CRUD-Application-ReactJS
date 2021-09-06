import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State 
const initialState = {
    users:[
        {id:1,name:'Abtahi Noor'},
        {id:2,name:'Freelancer Nasim'},
        {id:3,name:'Jhankar Mahbub'},
        {id:4,name:'Hero Balam'},
        {id:5,name:'Ratan'},
    ]
}

//create context 
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({childern}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions 
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload:id
        })
    }

    return(
        <GlobalContext.Provider value={{
            users: state.users , 
            removeUser
        }}>
            {childern}
        </GlobalContext.Provider>
    )
}