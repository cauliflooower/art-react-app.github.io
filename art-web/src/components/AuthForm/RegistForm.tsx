import { Link } from "react-router-dom";
import Button from "../Button/Button"
import classes from "./AuthForm.module.scss"
import Header from "../Header/Header";


const RegistForm: React.FC = () => {
  
  const arr = ["Имя", "Фамилия", "Номер телефона", "Эл. почта", "Логин", "Пароль"];

  return (
    <div className={classes.auth}>
        <Header/>
        <div className={classes.container}>
            <div className={classes.authInner}>
                <h2>Регистрация</h2>
                <div className={classes.authInputs}>
                    {arr.map((e, i) => (
                        <div key={i} className={classes.authItem}>
                            <label htmlFor="">{e}</label>
                            <input type="text" />
                        </div>
                    ))}
                </div>
                <div className={classes.borderForm}>
                    <Button name="Зарегистрироваться"/>
                </div>
                <Link to="/auth" className={classes.text}>Если у вас есть профиль, то войдите!</Link>
            </div>
        </div>
    </div>
  )
}

export default RegistForm