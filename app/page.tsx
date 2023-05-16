"use client";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Collect a users 3 top favorite foods, and 3 top favorite colors.</p>
      <p>Create a mini form that collects words and a 'type' to organize the words.</p>
      <p>Display it in a list.</p>
      <p>The list should tell us the word, and type the word is.</p>
      <p>You must use useReducer hook from react.</p>
      <code>
        <ul style={{ marginTop: 32 }}>
          <p>Example output</p>
          <li>Food: pizza</li>
          <li>Food: tacos</li>
          <li>Food: sushi</li>
          <li>Color: blue</li>
          <li>Color: red</li>
          <li>Color: green</li>
        </ul>
      </code>
    </main>
  )
}
