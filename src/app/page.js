"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [name, setName] = useState("Amul")

  const apple = (item) => {
    // alert(item)
    setName("Biswas")
  }

  const Innercomp = () => {
    return (
      <h1>Inner Component</h1>
    )
  }

  return (
    <main className={styles.main}>
      <h1>Event, functions and state {name}</h1>
      <button onClick={apple}>Click Me</button>
      <Innercomp />
    </main>
  );
}


