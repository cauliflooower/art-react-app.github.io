import classes from "./Header.module.scss"
import GeoSvg from "../../assets/svg/GeoSvg"
import ProfileSvg from "../../assets/svg/ProfileSvg"
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./Logo";

function Header() {

    return (
      <div className={classes.header}>
        <div className={classes.container}>
            <div className={classes.headerInner}>
                <Logo/>
                <div className={classes.list}>
                        <Link
                            className={classes.link}
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Главная
                        </Link>
                        <Link
                            className={classes.link}
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Работы
                        </Link>
                        <Link
                            className={classes.link}
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Магазин</Link>
                        <Link
                            className={classes.link}
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Контакты
                        </Link>
                </div>
                <div className={classes.closet}>
                    <div className={classes.city}>
                        <GeoSvg/>
                        <p>Минск</p>
                    </div>
                    <div className={classes.logout}>
                        <ProfileSvg/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

  export default Header