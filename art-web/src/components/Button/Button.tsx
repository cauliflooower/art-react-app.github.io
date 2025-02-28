import classes from "./Button.module.scss"

function Button(props: any) {

    return (
        <>
        <div className={classes.border}>
            <div className={classes.button}>
                <p className={classes.buttonText}>{props.name}</p>
            </div>
        </div>
        </>
    )
  }
  
  export default Button