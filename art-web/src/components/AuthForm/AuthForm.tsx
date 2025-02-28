import { Link } from "react-router-dom";
import Button from "../Button/Button"
import classes from "./AuthForm.module.scss"
import Header from "../Header/Header";


const AuthForm: React.FC = () => {
  
  const arr = ["Логин", "Пароль"];

  return (
    <div className={classes.auth}>
        <Header/>
        <div className={classes.container}>
            <div className={classes.authInner}>
                <h2>Авторизация</h2>
                <div className={classes.authInputs}>
                    {arr.map((e, i) => (
                        <div key={i} className={classes.authItem}>
                            <label htmlFor="">{e}</label>
                            <input type="text" />
                        </div>
                    ))}
                </div>
                <div className={classes.borderForm}>
                    <Button name="Войти"/>
                </div>
                <Link to="/regist" className={classes.text}>Нет профиля? Зарегистрируйтесь!</Link>
            </div>
        </div>
    </div>
  )
}

export default AuthForm