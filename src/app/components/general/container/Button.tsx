import styles from "./Button.module.css";
function Button({
  type,
  text,
}: {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
}) {
  return (
    <button type={type} className={styles.button}>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}

export default Button;
