import style from './Nav.module.css'
import { Link } from 'react-router-dom'
function Nav(props) {

    return (
        <nav className={style.Nav}>
            <ul>
                <li>
                    <Link to='/'>
                        <p>HOME</p>
                    </Link>
                </li>
                <li>
                    <Link to='/postar'>
                        <p>POSTAR</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav