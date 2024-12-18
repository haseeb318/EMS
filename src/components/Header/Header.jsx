
const Header = (props) => {
  // console.log("props", props.changeUser)
  
  const logOutUser=()=>{
    localStorage.setItem("loggedInUser","")
    props.changeUser("")
  }

  return (
    <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">Hello <br />
        <span className="text-3xl font-semibold">
          {/* {data.name} */} UserName 
          </span></h1>
        <button 
        onClick={logOutUser}
        className="bg-red-500 font-medium text-lg
         text-white px-5 py-2 rounded-sm">Log Out</button>
    </div>
  )
}

export default Header