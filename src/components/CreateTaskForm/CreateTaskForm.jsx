import { useState } from "react"


const CreateTaskForm = () => {

  const [title,setTitle]=useState("")
  const [date,setDate]=useState("")
  const [assignTo,setAssignTo]=useState("")
  const [category,setCategory]=useState("")
  const [description,setDescription]=useState("")
  
  const [newTask , setNewTask]=useState({})


  const submitHnadler =(e)=>{
    e.preventDefault()
    setNewTask(
      {
      title,date,
      category,description,
      active:false,
      new_task:true,
      fail:false,
      completed:false}
    )

    const data = JSON.parse(localStorage.getItem("employees"))
    console.log("data",data)

    data.forEach(element => {

      if(assignTo ==element.name){
        console.log(element)
        element.tasks.push(newTask)
      }
      
    });

    setTitle("")
    setAssignTo("")
    setDate("")
    setCategory("")
    setDescription("")
  }

  return (
    <div className="px-10 py-5 bg-[#1c1c1c] mt-7 rounded">
    <form onSubmit={submitHnadler}
    className="flex flex-wrap items-center justify-between" >
        <div className="w-1/2">

        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
        <input type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="text-sm px-2 py-1 rounded outline-none bg-transparent
        border-[1px] border-gray-400 mb-4 w-[80%]"
        placeholder="Task Title" />       

        <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
        <input type="date" 
         value={date}
         onChange={(e)=>setDate(e.target.value)}
        name="" id="" 
        className="text-sm px-2 py-1 rounded outline-none bg-transparent
        border-[1px] border-gray-400 mb-4 w-[80%]"
        />
        </div>
      
         <div>
         <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
        <input type="text" 
         value={assignTo}
         onChange={(e)=>setAssignTo(e.target.value)}
        placeholder="Employee Name" className="text-sm px-2 py-1 rounded outline-none bg-transparent
        border-[1px] border-gray-400 mb-4 w-[80%]"
        />
         </div>
        
        <div className="text-sm text-gray-300 mb-0.5">
        <h3>Category</h3>
        <input 
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        type="text" 
        placeholder="UI dev etc" 
        className="text-sm px-2 py-1 rounded outline-none bg-transparent
        border-[1px] border-gray-400 mb-4 w-[80%]"
        />
        </div>
        
        </div>
        
        <div className="w-2/5 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
         name="" id="" cols="30" rows="10"
        className="w-full h-44 text-sm px-2 py-1 rounded outline-none bg-transparent
        border-[1px] border-gray-400 mb-4 "
        ></textarea>
        <button className="bg-emerald-500 hover:bg-emerald-500
        px-5 rounded text-sm mt-4 w-full h-8
        ">Create Task</button>
        </div>
        

        
       
      
    </form>
</div>)
}

export default CreateTaskForm