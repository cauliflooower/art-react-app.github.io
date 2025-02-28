import Header from "../../components/Header/Header"
import classes from "../AdminPanel/AdminPanel.module.scss"



const AdminPanel: React.FC = () => {

  return (
    <div className={classes.panel}>
        <Header/>
        <div className={classes.container}>

        </div>
    </div>
  )
}

export default AdminPanel