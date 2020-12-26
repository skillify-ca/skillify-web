import Head from "next/head";
import styles from "../styles/Home.module.css";
import Outline from "../components/Outline";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="p-4">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Outline />
      </div>
    </div>
  );
}
