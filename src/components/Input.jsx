import styles from './Input.module.css'

function Input({label, id, type, placeholder, value, name, handleOnChange }) {
    return (
        <div className={styles.InputBox}>
            <label className={styles.InputLabel} htmlFor={id}>
                {label}
            </label>
            
            <input id={id} className={styles.Input}
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={handleOnChange}
            />
        </div>
    )
}


export default Input