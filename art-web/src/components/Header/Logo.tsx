import { Link } from "react-router-dom"


function Logo() {
    const flexing = {
        textDecoration: 'none',
        color: 'black',
        fontWight: 'bold',
    }
    const logo = {
        fontSize: 15
    }

    return (
        <Link style={flexing} to="/">
            <h1 style={logo}>ART HISTORY</h1>
        </Link>
    )
  }
  
  export default Logo