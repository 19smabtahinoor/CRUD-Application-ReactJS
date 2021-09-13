import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State 
const initialState = {
    users:[
        {id:1,name:'Sumit Saha'},
        {id:2,name:'Freelancer Nasim'},
        {id:3,name:'Jhankar Mahbub'},
        {id:4,name:'Anisul Islam'},
        {id:5,name:'Khalid Saifullah'},
    ]
}

//create context 
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children }) => {
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
            {children }
        </GlobalContext.Provider>
    )
}
// export default GlobalProvider;