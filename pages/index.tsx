import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <h2>Made with GraphQL, Apollo, NextJS, TypeScript, TailWind CSS</h2>
    </div>
  );
};

export default Home;
