import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/localStorage"


export const AuthContext = createContext()

const AuthProvider = ({children}) => { 
  
  const[userData , setUserData] = useState(null)
  const {employees,admin} =getLocalStorage()
  useEffect(()=>{
    setUserData({employees,admin})
  },[])
   return (
    <AuthContext.Provider value={userData}>
     {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider 