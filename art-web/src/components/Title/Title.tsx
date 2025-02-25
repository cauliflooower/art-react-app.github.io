import classes from "../../components/Title/Title.module.scss"


function Title(props: any) {

  return (
    <div className={classes.mainTitle}>
        <div className={classes.container}>
            <h3>{props.name}</h3>
        </div>
    </div>
  )
}

export default Title
