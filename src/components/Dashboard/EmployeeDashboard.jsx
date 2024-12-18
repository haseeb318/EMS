import Header from "../Header/Header"
import { TaskList } from "../TaskList/TaskList"
import TaskListNumber from "../TaskListNumber/TaskListNumber"
const EmployeeDashboard = (props) => {
  // console.log("Data",props.data.name)
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
          <Header changeUser={props.changeUser}  data={props.data}/>
          <TaskListNumber data={props.data}/>
          <TaskList data={props.data}/>

    </div>
  )
}

export default EmployeeDashboard