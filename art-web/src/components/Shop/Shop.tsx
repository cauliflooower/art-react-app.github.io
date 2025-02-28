import classes from "../Shop/Shop.module.scss"


function Shop() {

  const cards = ['Абонементы', 'Мастер-классы', 'Подарочные сертификаты', 'Картины', 'День рождения', 'Свидания, вечеринки']

  return (
    <div id="section3" className={classes.shop}>
        <div className={classes.container}>
            <div className={classes.shopInner}>
                {cards.map((e, i) => <div key={i} className={classes.card}>{e}</div>)}
            </div>
        </div>
    </div>
  )
}

export default Shop
