import Login from "./components/Auth/Login"
import {useContext, useEffect, useState}from "react"
import {setLocalStorage,getLocalStorage} from "./utils/localStorage.jsx"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider.jsx"

function App() {
  setLocalStorage()
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState({})
  const authData =useContext(AuthContext)
  console.log("authdata",authData)


 useEffect(()=>{
  const loggedInUser = localStorage.getItem("loggedInUser")
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }

 },[])

  const handlerLogin =(email,password)=>{
     console.log("HandlerLogin")
    if(email=="admin@example.com" && password =="1223"){
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }
    else if(authData){
      const employee = authData.employees.find((e)=> email == e.email && password == e.password)
      if(employee){
        setLoggedInUserData(employee)
        setUser("employee")
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
      }
      else{
        alert("Invaild credential")  
      }
    }
    else{
      alert("Invaild credential")  
    }

  }


  return (
    <>
    {!user&&<Login handlerLogin={handlerLogin}/>}
    {user==="admin"&&<AdminDashboard changeUser={setUser}/> }
    {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>

  )
}

export default App
