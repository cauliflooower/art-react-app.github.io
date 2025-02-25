import classes from "./Header.module.scss"
import GeoSvg from "../../assets/svg/GeoSvg"
import ProfileSvg from "../../assets/svg/ProfileSvg"

function Header() {

    return (
      <div className={classes.header}>
        <div className={classes.container}>
            <div className={classes.headerInner}>
                <h1 className={classes.logo}>ART HISTORY</h1>
                <div className={classes.list}>
                    <ul>
                        <li>Главная</li>
                        <li>Работы</li>
                        <li>Магазин</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className={classes.closet}>
                    <div className={classes.city}>
                        <GeoSvg/>
                        <p>Минск</p>
                    </div>
                    <div className={classes.logout}>
                        <ProfileSvg/>
                        <p>Профиль</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

  export default Header