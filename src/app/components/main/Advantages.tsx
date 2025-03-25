import cards from "@/app/data/cards";
import Image from "next/image";
import styles from "./Advantages.module.css";
import clsx from "clsx";

function Advantages() {
  return (
    <section className={clsx(styles.cards, "container")}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <Image
            width={113}
            height={113}
            src={card.icon}
            alt={card.title}
            className={styles.icon}
          />
          <div className={styles.content}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Advantages;
