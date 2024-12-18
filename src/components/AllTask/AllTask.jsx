import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"


const AllTask = () => {
    const authData =useContext(AuthContext)
    console.log(authData.employees)
  return (

    <div className="bg-[#1c1c1c] p-5 mt-5 h-48">
        <div className="bg-red-400 py-2 px-4 flex 
        justify-between rounded mb-2">
            <h2 className="text-lg font-medium w-1/5">Name</h2> 
            <h3 className="text-lg font-medium w-1/5"> New Task</h3>
            <h3 className="text-lg font-medium w-1/5">Active</h3>
            <h3 className="text-lg font-medium w-1/5">Completed</h3>
            <h3 className="text-lg font-medium w-1/5">Fail</h3>
        </div>
        
        <div className="overflow-auto">
        {authData.employees.map((elem)=>{
            return <div 
            key={elem.id}
            className=" border-2
             border-emerald-500 py-2 px-4 flex 
            justify-between rounded mb-2">
                <h3 className=" text-lg font-medium w-1/5">{elem.name}</h3> 
                <h3  className="text-lg font-medium w-1/5 text-blue-600">{elem.task_count.new_task}</h3> 
                <h3  className="text-lg font-medium w-1/5 text-pink-600">{elem.task_count.active}</h3> 
                <h3  className="text-lg font-medium w-1/5 text-orange-400">{elem.task_count.completed}</h3> 
                <h3  className="text-lg font-medium w-1/5 text-red-600">{elem.task_count.fail}</h3>  
            </div>
        })}
        </div>

       

      

    </div>
  )
}

export default AllTask