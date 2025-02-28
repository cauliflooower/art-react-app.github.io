import Heart from "../../assets/svg/Heart"
import Logo from "../Header/Logo"
import classes from "./Footer.module.scss"

function Footer() {

    return (
      <div className={classes.footer}>
        <div className={classes.container}>
            <div className={classes.footerInner}>
                <Logo/>
                <div className={classes.textCreated}>
                    <Heart/>
                    <p>Design by @cauliflooower_</p>
                </div>
                <div className={classes.text}>
                    <p>2025 © All rights reserved</p>
                </div>
            </div>
        </div>
      </div>
    )
  }

  export default Footer