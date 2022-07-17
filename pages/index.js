import styles from "../styles/Home.module.css";
import Head from "next/head";
import Featured from "../components/Featured";

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in New York</title>
        <meta name="description" content="Best Pizza Shop in town!" />
      </Head>
      <Featured />
    </div>
  );
}
