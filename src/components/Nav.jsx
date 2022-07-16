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
                    <Link to='/post' className={style.Item}>
                        ADD POST
                    </Link>
                </li>
                <li>
                    <Link to='/posts' className={style.Item}>
                        POSTS
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav