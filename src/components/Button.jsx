import styles from './Button.module.css'

function Button(props) {
    return (
        <button className={styles.Button}
            type={props.type}
            style=
            {{
                width: props.wt
            }}
        >
            {props.value}
        </button>
    )
}

export default Button