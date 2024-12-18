import React from 'react'
import AcceptTask from '../../TaskList/AcceptTask'
import CompleteTask from '../../TaskList/CompleteTask'
import NewTask from '../../TaskList/NewTask'
import FailTask from '../../TaskList/FailTask'

export const TaskList = ({data}) => {
  // console.log(data)
  return (

    <div id="tasklist" className=' flex items-center justify-start 
    flex-nowrap gap-5 overflow-x-auto 
    h-[55%] w-full py-5 mt-10'>

         {data.tasks.map((elem,idx)=>{
          if(elem.active){
            console.log("Accepted")
            return <AcceptTask data ={elem} key={idx}/>
          }
          if(elem.new_task){
             console.log(" New Task ")
            return <NewTask data ={elem} key={idx} />
          }
          if(elem.completed){
            console.log("Completed ")
            return <CompleteTask data ={elem} key={idx}/>
          }
          if(elem.fail){
            console.log("fail ")
            return <FailTask  data ={elem} key={idx}/>
          }
            
         })}
           

    </div>
  )
}
