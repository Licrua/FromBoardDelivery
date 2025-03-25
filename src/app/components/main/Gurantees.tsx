import diplomas from "@/app/data/diplomas";
import Image from "next/image";
import styles from "./Gurantees.module.css";
import Button from "../general/container/Button";
import clsx from "clsx";

function Gurantees() {
  return (
    <section className={clsx(styles.container, "container")}>
      <div className={styles.text}>
        <h2 className={styles.title}>Гарантии качества</h2>
        <p className={styles.description}>
          Наши гарантии качества включают в себя полный спектр документов,
          необходимых для ввоза и вывоза товаров, а также для успешного бизнеса
          на мировом рынке. Мы предоставляем вам надёжность и уверенность
        </p>
      </div>
      <div className={styles.diplomas}>
        {diplomas.map((item) => (
          <figure key={item.title} className={styles.diploma}>
            <Image
              width={366}
              height={366}
              src={item.image}
              alt={item.title}
              className={styles.image}
            />
            <figcaption className={styles.caption}>{item.title}</figcaption>
          </figure>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button type="button" text="Показать больше документов" />
      </div>
    </section>
  );
}

export default Gurantees;
