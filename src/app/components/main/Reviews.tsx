"use client";
import { useState } from "react";
import styles from "./Reviews.module.css";
import { slider } from "@/app/data/slider";
import Image from "next/image";

function ReviewSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 2 >= slider.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 2 < 0 ? slider.length - 2 : prev - 2));
  };
  console.log("slider", slider.slice(index, index + 2));

  return (
    <section className={styles.slider}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.reviews}>
        {slider.slice(index, index + 2).map((review) => (
          <blockquote key={review.id} className={styles.review}>
            <p>{review.text}</p>
            <cite>{review.user}</cite>
            <Image
              width={62}
              alt="quote"
              height={43}
              src={"images/quote.svg"}
              className={styles.quote}
            />
          </blockquote>
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide}>
        <span className={styles.arrow}>←</span>
      </button>
      <button className={styles.next} onClick={nextSlide}>
        <span className={styles.arrow}>→</span>
      </button>
    </section>
  );
}

export default ReviewSlider;
