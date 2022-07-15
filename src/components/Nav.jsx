import style from './Nav.module.css'
import { Link } from 'react-router-dom'
function Nav(props) {

    return (
        <nav className={style.Nav}>
            <ul>
                <li>
                    <Link to='/' className={style.Item}>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to='/postar' className={style.Item}>
                        POSTAR
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav