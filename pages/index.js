import Head from "next/head";
import Outline from "../components/Outline";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-200">
        <Outline />
      </div>
    </div>
  );
}
