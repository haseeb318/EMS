import AllTask from "../AllTask/AllTask"
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm"
import Header from "../Header/Header"

const AdminDashboard = (props) => {

  return (
    <div className="h-screen w-full p-10">
        <Header changeUser={props.changeUser}/>
        <CreateTaskForm/>
        <AllTask/>

    </div>
  )
}

export default AdminDashboard