import styles from './Button.module.css'

function Button(props) {
    return (
        <button className={styles.Button}
            value={props.value}
            type={props.type}
            style=
            {{
                width: props.wt
            }}
        />
    )
}

export default Button