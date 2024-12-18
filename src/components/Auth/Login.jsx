import { useState } from "react"

const Login = ({handlerLogin}) => {
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const submitHandler =(e)=>{
        e.preventDefault()

        // console.log("Email: ", email)
        // console.log("password: ", password)

        handlerLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded-xl border-emerald-600 p-20 ">
            <form 
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center">

                <input type="email" required
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                className="border-2 text-xl outline-none bg-transparent
                 border-emerald-600 rounded-full py-4 px-5 text-white
                 placeholder:text-gray-400 w-full h-12"
                 placeholder="Enter Your Email" />

                <input type="Password" required
                value={password}
                onChange={(e)=>{
                    setPassword
                    (e.target.value)
                }}
                className="border-2 text-xl outline-none bg-transparent
                border-emerald-600 rounded-full py-4 px-5 text-white
                placeholder:text-gray-400 mt-5 w-full h-12"
                placeholder="Enter Your Password" />

                <button type="submit"
                className=" text-white  text-xl outline-none 
                bg-emerald-600 rounded-full p-4 m-5 w-full h-12"
                >
                 Log in
                </button>
            </form>

        </div>

    </div>
  )
}

export default Login