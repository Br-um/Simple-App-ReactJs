import styles from './Button.module.css'

function Button({ type, wt, value }) {
    return (
        <button className={styles.Button}
            type={type}
            style=
            {{
                width: wt
            }}
        >
            {value}
        </button>
    )
}

export default Button