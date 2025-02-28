import classes from "./Contact.module.scss"
import about from "../../assets/avatar.png"
import Insta from "../../assets/svg/Insta"
import Youtube from "../../assets/svg/Youtube"
import Telegram from "../../assets/svg/Telegram"
import Linkedin from "../../assets/svg/Linkedin"

function Contact() {

  return (
    <div id="section4" className={classes.contact}>
        <div className={classes.container}>
            <div className={classes.contactInner}>
                <div className={classes.contactInfo}>
                    <div className={classes.contactBlock}>
                        <div className={classes.contactItem}>
                            <h5>Телефон</h5>
                            <p>+375 (12) 455-56-92</p>
                        </div>
                        <div className={classes.contactItem}>
                            <h5>Почта</h5>
                            <p>aaarthistory@gmail.com</p>
                        </div>
                        <div className={classes.contactItem}>
                            <h5>Соцсети</h5>
                            <div className={classes.contactSocial}>
                                <Insta/>
                                <Youtube/>
                                <Telegram/>
                                <Linkedin/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.contactText}>
                        <h4>Нам следует получше узнать друг друга.</h4>
                        <p>Наша цель – помочь вам раскрыть свой творческий потенциал,
                            независимо от вашего уровня подготовки. Мы предлагаем широкий
                            спектр занятий: от базовых техник рисования карандашом до
                            мастер-классов по живописи маслом и акварелью. Опытные преподаватели,
                            увлеченные своим делом, создадут для вас комфортную и вдохновляющую атмосферу.<br/>
                            Помимо регулярных курсов, мы проводим разнообразные творческие мероприятия:
                            тематические вечера рисования, пленэры на свежем воздухе, арт-терапевтические сессии
                            и выставки работ наших учеников. Чтобы быть всегда в курсе дела, советуем подписаться
                            на наши соцсети, там всегда найдётся что-то интересное или поучительное.<br/>
                            Присоединяйтесь к нашему дружному сообществу, где каждый может почувствовать себя творцом! 
                            Следите за расписанием и записывайтесь на занятия прямо сейчас! Откройте дверь в мир
                            искусства вместе с "Творческой мастерской"!
                        </p>
                    </div>
                </div>
                <div className={classes.borderContact}>
                    <img src={about} alt="icon"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
