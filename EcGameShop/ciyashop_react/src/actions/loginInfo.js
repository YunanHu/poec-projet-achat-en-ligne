// Action creator

export const setRole = (role) => {

     return {
          type: "SET_ROLE",
          role: role
     }
}

export const setUid = (uid) => {

     return {
          type: "SET_UID",
          uid: uid
     }
}

export const setLN = (lastname) => {

     return {
          type: "SET_LN",
          lastname: lastname
     }
}

export const setFN = (firstname) => {

     return {
          type: "SET_FN",
          firstname: firstname
     }
}

export const setPN = (phoneno) => {

     return {
          type: "SET_PN",
          phoneno: phoneno
     }
}

export const setEmail = (email) => {

     return {
          type: "SET_EMAIL",
          email: email
     }
}

export const setAddress = (address) => {

     return {
          type: "SET_ADDRESS",
          address: address
     }
}

export const logout = () => {

     return {
          type: "LOGOUT",

     }
}