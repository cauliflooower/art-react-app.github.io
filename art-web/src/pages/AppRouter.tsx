import { Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import AuthForm from '../components/AuthForm/AuthForm'
import RegistForm from '../components/AuthForm/RegistForm'
import AdminPanel from './AdminPanel/AdminPanel'

const AppRouter = () => {
    // const {user} = useContext(Context)

    return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/auth" element={<AuthForm/>}></Route>
        <Route path="/regist" element={<RegistForm/>}></Route>
        <Route path="/admin" element={<AdminPanel/>}></Route>
      </Routes>
    )
}

export default AppRouter