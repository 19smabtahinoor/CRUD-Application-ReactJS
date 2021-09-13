// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => {
                    return user.id !== action.payload;
                })
            }

        case 'ADD_USER':
            return {
                users:[action.payload,...state.users]
            }

        case 'EDIT_USER':
            const updatedUser = action.payload;

            const updateUsers = state.users.map(user => {
                if (user.id === updatedUser.id ){
                    return updatedUser;
                }
                return user;
            })
            return {
                users: updateUsers
            }
        default: 
            return state;
    }
}