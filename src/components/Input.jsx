import styles from './Input.module.css'

function Input(props) {
    return (
        <div className={styles.InputBox}>
            <label className={styles.InputLabel} htmlFor={props.id}>
                {props.label}
            </label>
            
            <input id={props.id} className={styles.Input}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
            />
        </div>
    )
}


export default Input