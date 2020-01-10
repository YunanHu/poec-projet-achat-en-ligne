// Action creator

export const setRole = (role) => {
    
   return{
        type: "SET_ROLE", 
        role: role
   }
}

export const setUid = (uid) => {
    
    return{
         type: "SET_UID", 
         uid: uid
    }
 }