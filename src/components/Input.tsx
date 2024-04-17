import styles from "./Input.module.css";

export function Input() {
  return (
    <div className={styles.InputWrapper}>
      <input type="text" className={styles.Input} />
      <button className={styles.Button}>
        Criar <img src="/plus.png" />
      </button>
    </div>
  );
}
