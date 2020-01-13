
const initialLoginState = {
    role:"Not Connected",
    uid:0,
    lastname:"",
    firstname:"",
    phoneno:null,
    email:"",
    address:[]

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
            case "SET_LN":
            return {
                ...state,
                lastname: action.lastname
            }
            case "SET_FN":
            return {
                ...state,
                firstname: action.firstname
            }
            case "SET_PN":
            return {
                ...state,
                phoneno: action.phoneno
            }
            case "SET_EMAIL":
            return {
                ...state,
                email: action.email
            }
            case "SET_ADDRESS":
            return {
                ...state,
                address: action.address
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