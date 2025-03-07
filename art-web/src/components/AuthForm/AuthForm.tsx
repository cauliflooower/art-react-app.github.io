import { Link } from "react-router-dom";
import Button from "../Button/Button"
import classes from "./AuthForm.module.scss"
import Header from "../Header/Header";
import { useForm } from "react-hook-form"


const AuthForm: React.FC = () => {
  
  const {register} = useForm()

  return (
    <div className={classes.auth}>
        <Header/>
        <div className={classes.container}>
            <div className={classes.authInner}>
                <h2>Авторизация</h2>
                <form className={classes.authInputs}>
                        <div className={classes.authItem}>
                            <label htmlFor="">Логин</label>
                            <input type="text" />
                        </div>
                        <div className={classes.authItem}>
                            <label htmlFor="">Пароль</label>
                            <input type="text" />
                        </div>
                    <div className={classes.borderForm}>
                        <Button name="Войти"/>
                    </div>
                </form>
                <Link to="/regist" className={classes.text}>Нет профиля? Зарегистрируйтесь!</Link>
            </div>
        </div>
    </div>
  )
}

export default AuthForm