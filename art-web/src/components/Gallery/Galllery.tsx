import classes from "../Gallery/Gallery.module.scss"
import portrait1 from "../../assets/portrait1.png"
import portrait2 from "../../assets/portrait2.png"
import portrait3 from "../../assets/portrait3.png"
import portrait4 from "../../assets/portrait4.png"
import portrait5 from "../../assets/portrait5.png"
import portrait6 from "../../assets/portrait6.png"
import done from "../../assets/Vector.png"
import Button from "../Button/Button"


function Gallery() {

  const imgs = [portrait1, portrait2, portrait3, portrait4, portrait5, portrait6]

  return (
    <div className={classes.gallery}>
      <div className={classes.container}>
        <div className={classes.galleryButtons}>
          <Button name="Портреты"/>
          <Button name="Натюрморты"/>
          <Button name="Пейзажи"/>
        </div>
        <div className={classes.galleryInner}>
          {imgs.map((a, index) => <img className={classes.galleryItem} src={a} alt="icon" key={index}></img>)}
        </div>
        <div className={classes.worksProcess}>
          <h4>Рабочий процесс</h4>
          <div className={classes.galleryLine}>
            <div className={classes.elipse}>1</div>
            <div className={classes.elipse}>2</div>
            <div className={classes.elipse}>3</div>
            <div className={classes.elipse + " " + classes.active}>
              <img src={done} alt="icon"/>
            </div>
            <div className={classes.line}></div>
          </div>
        </div>
        <div className={classes.worksText}>
          <div className={classes.worksItem}>
            <h5>Желание</h5>
            <p>Давно зреющее желание выплеснулось в спонтанную
              запись на мастер-класс по акрилу. Первая встреча – 
              запах красок, холсты, кисти разных размеров – опьянила. 
              Художник-ведущий объяснил основы композиции, 
              смешивания цветов, показал базовые техники.
            </p>
          </div>
          <div className={classes.worksItem}>
            <h5>Борьба с белым полотном</h5>
            <p>Эскиз на бумаге, перенос его на холст. Борьба 
              с белым полотном, где каждое прикосновение кисти оставляет след 
              навсегда. Первый слой – подмалевок, задающий тон и настроение 
              будущей картины. Постепенно наносятся детали, слои краски 
              наслаиваются друг на друга, образуя объем и глубину.
            </p>
          </div>
          <div className={classes.worksItem}>
            <h5>Частичка души</h5>
            <p>Самый волнительный момент – финальные штрихи, 
              расстановка акцентов. Отходишь на шаг, смотришь 
              издалека. Добавляешь свет, тень, еще немного цвета. 
              И вот – картина ожила. От осознания того, что она 
              создана твоими руками, захватывает дух. Отныне это 
              не просто полотно с краской, а частичка души, 
              запечатленная на холсте.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery