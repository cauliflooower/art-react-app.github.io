import women from "../../assets/women.png"
import flower from "../../assets/flower.jpg"
import classes from "./Hero.module.scss"
import Button from "../Button/Button"

function Hero() {

  return (
    <div id="section1" className={classes.hero}>
        <div className={classes.container}>
            <div className={classes.heroInner}>
                <div className={classes.heroInfo}>
                    <h2>Творческая мастерская</h2>
                    <div>
                        <h3>запечатлей момент</h3>
                        <p className={classes.heroText}>
                            Добро пожаловать в "ART HISTORY"!
                            Здесь рождается вдохновение,
                            а обычные люди открывают в себе художников.
                        </p>
                        <Button name="Записаться"/>
                    </div>
                </div>
                <div className={classes.heroImg}>
                    <img className={classes.iconWomen} src={women} alt="icon"/>
                    <div>
                        <img className={classes.iconFlower} src={flower} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
