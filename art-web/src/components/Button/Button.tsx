import classes from "./Button.module.scss"

function Button(props: any) {

    return (
        <>
        <div className={classes.border}>
            <button className={classes.button}>
                {props.name}
            </button>
        </div>
        </>
    )
  }
  
  export default Button