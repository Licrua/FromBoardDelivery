import Image from "next/image";
import Button from "../general/container/Button";
import clsx from "clsx";
import styles from "./Calculator.module.css";

function Calculator() {
  return (
    <>
      <main className={clsx("container", styles.main)}>
        <section className={styles.section}>
          <h2 className="visuallyHidden">Рабочий процесс</h2>
          <div className={styles.deliveryContainer}>
            <h3 className={styles.header}>
              Без проблемная доставка купленных вещей из США, Европы и Азии
              в Россию
            </h3>
            <p className={styles.paragraph}>
              Сэкономьте на покупках и наслаждайтесь мировыми брендами —
              наш сервис позволяет вам легко и удобно заказывать товары со всего
              мира и получать их в России
            </p>
            <Image
              className={styles.img}
              src="/images/workProcess.png"
              alt="workingProcess"
              width={756}
              height={352}
            />
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formText}>
              <h3 className={styles.formHeader}>Калькулятор доставки</h3>
              <p className={styles.formParagraph}>
                Посчитайте, сколько будет стоить перевозка покупки из зарубежа
              </p>
            </div>
            <form className={styles.form}>
              <label className={styles.label}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Введите имя"
                />
              </label>
              <div className={styles.grid}>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Введите почту"
                  />
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    placeholder="Введите телефон"
                  />
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    type="number"
                    name="area"
                    placeholder="Введите площадь"
                  />
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    type="number"
                    name="weight"
                    placeholder="Введите вес"
                  />
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    type="text"
                    name="purchaseCountry"
                    placeholder="Введите страну"
                  />
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    type="text"
                    name="purchaseCity"
                    placeholder="Введите город"
                  />
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    type="text"
                    name="deliveryRegion"
                    placeholder="Введите область"
                  />
                </label>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    type="text"
                    name="deliveryCity"
                    placeholder="Введите город"
                  />
                </label>
              </div>
              <Button type="button" text=" Заказать расчет" />
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Calculator;
