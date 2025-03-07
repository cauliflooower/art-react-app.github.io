import Header from "../../components/Header/Header"
import classes from "../AdminPanel/AdminPanel.module.scss"
import { Link } from "react-router-dom"



const AdminPanel: React.FC = () => {

  return (
    <div className={classes.panel}>
        <Header/>
        <div className={classes.container}>
          <div className={classes.panelInner}>
            <div className={classes.panelLeft}>
              <h2>Angelina Orlova</h2>
              <ul>
                <li>
                  <Link className={classes.link} to="/table/users">Пользователи</Link>
                </li>
                <li>
                  <Link className={classes.link} to="/table/users">Курсы</Link>
                </li>
                <li>
                  <Link className={classes.link} to="/table/users">Мастер-классы</Link>
                </li>
                <li>
                  <Link className={classes.link} to="/table/users">Сертификаты о прохождении курса</Link>
                </li>
                <li>
                  <Link className={classes.link} to="/table/users">Подарочные сертификаты на курсы, мастер-классы</Link>
                </li>
                <li>
                  <Link className={classes.link} to="/table/users">Работы</Link>
                </li>
                <li>
                  <Link className={classes.link} to="/table/users">Настройка профиля</Link>
                </li>
              </ul>
            </div>
            <div className={classes.panelRight}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Номер телефона</th>
                    <th>Эл. почта</th>
                    <th>Логин</th>
                    <th>Пароль</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gloria</td>
                    <td>Reeves</td>
                    <td>67439</td>
                    <td>10/18/1985</td>
                    <td>4</td>
                    <td>0.1</td>
                  </tr>
                  <tr>
                    <td>Graham</td>
                    <td>Bonner</td>
                    <td>90727</td>
                    <td>12/07/1983</td>
                    <td>4</td>
                    <td>0.9</td>
                  </tr>
                  <tr>
                    <td>Warren</td>
                    <td>Wheeler</td>
                    <td>99134</td>
                    <td>11/11/1984</td>
                    <td>2</td>
                    <td>0.7</td>
                  </tr>
                  <tr>
                    <td>Zena</td>
                    <td>Hale</td>
                    <td>19803</td>
                    <td>06/17/1987</td>
                    <td>9</td>
                    <td>0.3</td>
                  </tr>
                  <tr>
                    <td>Julia</td>
                    <td>Haupt</td>
                    <td>24116</td>
                    <td>03/15/1991</td>
                    <td>10</td>
                    <td>1.0</td>
                  </tr>
                  <tr>
                    <td>Rachel</td>
                    <td>English</td>
                    <td>58951</td>
                    <td>02/25/1982</td>
                    <td>7</td>
                    <td>0.3</td>
                  </tr>
                  <tr>
                    <td>Lionel</td>
                    <td>Barry</td>
                    <td>65036</td>
                    <td>02/17/1980</td>
                    <td>7</td>
                    <td>0.5</td>
                  </tr>
                  <tr>
                    <td>Zena</td>
                    <td>Spears</td>
                    <td>16874</td>
                    <td>12/13/1981</td>
                    <td>5</td>
                    <td>0.6</td>
                  </tr>
                  <tr>
                    <td>Dillon</td>
                    <td>Bradford</td>
                    <td>91543</td>
                    <td>01/20/1985</td>
                    <td>7</td>
                    <td>0.4</td>
                  </tr>
                  <tr>
                    <td>Haley</td>
                    <td>Mcleod</td>
                    <td>99321</td>
                    <td>04/12/1980</td>
                    <td>4</td>
                    <td>0.1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminPanel