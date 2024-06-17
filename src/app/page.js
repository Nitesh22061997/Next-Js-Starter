import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="Nitesh Kr Singh" />
      <User name="Annu" />
      <User name="Chotu" />
      <User name="bhawani" />
      <h1>HomePage</h1>
    </main>
  );
}


const User = ({ name }) => {
  return (
    <div>
      <h2>User name is {name}</h2>
    </div>
  )
}
