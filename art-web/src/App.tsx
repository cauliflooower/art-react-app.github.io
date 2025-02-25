import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Title from "./components/Title/Title"
import Gallery from "./components/Gallery/Galllery"
import "./App.css"
import Shop from "./components/Shop/Shop"
import Contact from "./components/Contact/Contact"


function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Title name="Работы наших учеников"/>
    <Gallery/>
    <Title name="Наш магазин"/>
    <Shop/>
    <Title name="Давай сделаем это!"/>
    <Contact/>
    </>
  )
}

export default App
