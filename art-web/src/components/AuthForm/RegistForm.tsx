import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form"
import classes from "./AuthForm.module.scss"
import Header from "../Header/Header";
import { IForm } from "../../Intarfaces/IForm";
import Button from "../Button/Button";


const RegistForm: React.FC = () => {
  
  const {register, handleSubmit, formState} = useForm<IForm>({
    mode: 'onChange'
  })

  const emailError = formState.errors['e-mail']?.message
  const phoneError = formState.errors['phone']?.message
  const passwordError = formState.errors['password']?.message
  const loginError = formState.errors['login']?.message


  const onSubmit:SubmitHandler<IForm> = (data) => {
    console.log(data)
  }

  return (
    <div className={classes.auth}>
        <Header/>
        <div className={classes.container}>
            <div className={classes.authInner}>
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.registInputs}>
                    <div className={classes.registItems}>
                        <div className={classes.authItem}>
                            <label htmlFor="">Имя</label>
                            <input
                                placeholder="Введите имя:"
                                {...register('name', {
                                    required: 'Это поле пустое',
                                })}
                                type="text"
                            />
                        </div>
                        <div className={classes.authItem}>
                            <label htmlFor="">Номер телефона</label>
                            <input
                                placeholder="Введите номер телефона:"
                                {...register('phone', {
                                    required: 'Это поле пустое',
                                    pattern: {
                                        value: /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/u,
                                        message: 'Некорректный номер телефона'
                                    }
                                })}
                                type="text"
                            />
                            {phoneError && <p
                                style={{
                                    color: 'red',
                                    margin: 0,
                                }}>
                            {phoneError}
                            </p>}
                        </div>
                        <div className={classes.authItem}>
                            <label htmlFor="">Эл.почта</label>
                            <input
                                placeholder="Введите адресс эл.почты:"
                                {...register('e-mail', {
                                    required: 'Это поле пустое',
                                    pattern: {
                                        value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                                        message: 'Некорректный e-mail адресс'
                                    }
                                })}
                                type="text"
                            />
                            {emailError && <p
                                style={{
                                    color: 'red',
                                    margin: 0,
                                }}>
                                {emailError}
                            </p>}
                        </div>
                        <div className={classes.authItem}>
                            <label htmlFor="">Логин</label>
                            <input
                                placeholder="Введите логин:"
                                {...register('login', {
                                    required: 'Это поле пустое',
                                })}
                                type="text"
                            />
                            {loginError && <p
                                style={{
                                    color: 'red',
                                    margin: 0,
                                }}>
                                {loginError}
                            </p>}
                        </div>
                        <div className={classes.authItem + ' ' + classes.item5}>
                            <label htmlFor="">Пароль</label>
                            <input
                                placeholder="Введите пароль:"
                                {...register('password', {
                                    required: 'Это поле пустое',
                                    pattern: {
                                        value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                        message: 'Надёжный пароль от 6 символов с использованием цифр, спец. символов, латиницы, строчных и прописных букв.'
                                    }
                                })}
                                type="password"
                            />
                            {passwordError && <p
                                style={{
                                    fontSize: '14px',
                                    color: 'red',
                                    margin: 0,
                                }}>
                                {passwordError}
                            </p>}
                        </div>
                    </div>
                    <Button name="Зарегистрироваться"/>
                </form>
                <Link to="/auth" className={classes.text}>Если у вас есть профиль, то войдите!</Link>
            </div>
        </div>
    </div>
  )
}

export default RegistForm