import { Link } from "react-router-dom"


function ProfileSvg() {
    const flexing = {
        display: 'flex',
        columnGap: 20,
        alignItems: 'center',
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <Link style={flexing} to="/auth">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M5.83337 26.25C5.83337 24.7029 6.44796 23.2192 7.54192 22.1252C8.63588 21.0312 10.1196 20.4167 11.6667 20.4167H23.3334C24.8805 20.4167 26.3642 21.0312 27.4582 22.1252C28.5521 23.2192 29.1667 24.7029 29.1667 26.25C29.1667 27.0235 28.8594 27.7654 28.3124 28.3124C27.7655 28.8594 27.0236 29.1667 26.25 29.1667H8.75004C7.97649 29.1667 7.23463 28.8594 6.68765 28.3124C6.14066 27.7654 5.83337 27.0235 5.83337 26.25Z" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M17.5 14.5833C19.9162 14.5833 21.875 12.6246 21.875 10.2083C21.875 7.79209 19.9162 5.83333 17.5 5.83333C15.0838 5.83333 13.125 7.79209 13.125 10.2083C13.125 12.6246 15.0838 14.5833 17.5 14.5833Z" strokeWidth="1.5"/>
            </svg>
            <p>Профиль</p>
        </Link>
    )
  }
  
  export default ProfileSvg