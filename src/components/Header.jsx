import styles from './Header.module.css'
function Header(props){
    return (
        <nav className={styles.navWrapp}>
            <ul>
                <li>Seu nome é: {props.nome}</li>
            </ul>
        </nav>
    )
}
export default Header