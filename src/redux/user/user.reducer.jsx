const INITIAL_STATE = {
    currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
            case 'SET_CURRENT_USER2':
            console.log('SET_CURRENT_USER2');
            return {
                ...state,
                currentUser: action.payload
            };
        default: return state;
    }
};
export default userReducer;
