
const initialLoginState = {
    role:"Not Connected",
    uid:0
}

const loginReducer = (state= initialLoginState, action) => {
    
    switch (action.type) {
        case "SET_ROLE":
            return {
                ...state,
                role: action.role
            }
            case "SET_UID":
            return {
                ...state,
                uid: action.uid
            }
            case "LOGOUT":
            return {
                ...initialLoginState
            }

        default:
            return state;
    }
}

export default loginReducer