import Image from "next/image";
import styles from "./Header.module.css";
import clsx from "clsx";
import Button from "../general/container/Button";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* section Title */}
        <div className={styles.sectionTitle}>
          <Image
            width={50}
            height={74}
            className={styles.image}
            src="/images/Logo.svg"
            alt="Logo"
          />
          <h1 className={styles.title}>FromBoard Delivery</h1>
        </div>
        {/*  */}
        {/* sectionDetails */}
        <div className={styles.sectionInfo}>
          <div className={styles.infoChapter}>
            <p className={styles.infoText}>
              Доставляем товары из заграницы в Россию
            </p>
            <p className={styles.infoText}>Стоимость от 550 рублей за заказ</p>
            <p className={styles.infoText}>1$ = 93₽ | 1€ = 99₽ | 1¥ = 13₽</p>
          </div>
          <div className={styles.phoneChapter}>
            <a className={styles.phone} href="tel:+78001234567">
              +7 (800)123 45-67
            </a>
            <p className={styles.phoneDescription}>
              Звонки по России бесплатны
            </p>
          </div>
        </div>
      </div>
      {/*
       */}
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a
              href="/"
              className={clsx(styles.menuLink, styles.menuActiveLink)}
            >
              Калькулятор
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/" className={styles.menuLink}>
              О нас
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/" className={styles.menuLink}>
              Гарантия
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/" className={styles.menuLink}>
              Отзывы
            </a>
          </li>
        </ul>
        {/*  */}
        <Button type="button" text="Оставить заявку" />
      </nav>
    </div>
  );
};

export default Header;
