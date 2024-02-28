"use client";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <ol>
        <li>Collect a users 3 top favorite foods and colors.</li>
        <li>You must use a form.</li>
        <li>The form must only have two inputs, one for color, and one for food.</li>
        <li>You must use the useReducer hook.</li>
        <li>Display the output in a list</li>
      </ol>
      <code>
        <ul style={{ marginTop: 32 }}>
          <p>Example output</p>
          <p>Favorite foods</p>
          <li>Food: pizza</li>
          <li>Food: tacos</li>
          <li>Food: sushi</li>
          <p>Favorite colors</p>
          <li>Color: blue</li>
          <li>Color: red</li>
          <li>Color: green</li>
        </ul>
      </code>
    </main>
  )
}
