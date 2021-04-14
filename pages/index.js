import Head from "next/head";
import Outline from "../components/Outline";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="p-4 h-screen bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Outline />
      </div>
    </div>
  );
}
