import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function CardGrid({ meals }) {
  return (
    <div className={styles.grid}>
      {meals.map(({ idMeal, strMeal, strMealThumb }) => (
        <a href="#" key={idMeal} className={styles.card}>
          <Image src={strMealThumb} width={220} height={220} alt={strMeal} />
          <h2>{strMeal}</h2>
        </a>
      ))}
    </div>
  );
}
