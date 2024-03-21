import React, { useEffect, useState } from "react";
import styles from "@/app/components/Loading/Loading.module.css";
import WebsiteNavBar from "../NavBar/NavBar";

const sentences = [
  "Global Giant: PwC operates in over 150 countries, exemplifying its extensive reach.",
  "Historic Merger: The 1998 formation from merging Price Waterhouse and Coopers & Lybrand signifies a pivotal moment.",
  "Fortune 500 Favorite: Providing services to 84% of the Global Fortune 500 companies, PwC is a top choice.",
  "Oscars Accountant: With over 80 years managing the Academy Awards voting, PwC plays a key role in entertainment.",
  "Sustainability Champion: Aiming for carbon neutrality, PwC highlights its environmental commitment.",
  "Innovation Leader: PwC invests heavily in cutting-edge technology, establishing itself as a leader in innovation.",
  "Global Workforce: Employing over 250,000 professionals worldwide, PwC boasts a diverse and skilled global workforce.",
  "Industry Pioneer: PwC has a long history of setting benchmarks in the accounting and consulting industries, pioneering new standards.",
  "Community Contributor: PwC is committed to giving back to the community, demonstrating its dedication to social responsibility.",
  "Digital Transformation: PwC is at the forefront of digital transformation, helping businesses navigate the complexities of the digital age.",
];

export default function Loading() {
  const [currentSentence, setCurrentSentence] = useState(() =>
    Math.floor(Math.random() * sentences.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence(Math.floor(Math.random() * sentences.length));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <WebsiteNavBar />
      <main className="flex flex-col min-h-screen items-center justify-center p-24">
        <div className="text-colorNine flex flex-col items-center justify-center mt-20">
          <div className={styles.banterLoader}>
            <div className={styles.banterLoaderBox}></div>
            <div className={styles.banterLoaderBox}></div>
            <div className={styles.banterLoaderBox}></div>
            <div className={styles.banterLoaderBox}></div>
            <div className={styles.banterLoaderBox}></div>
            <div className={styles.banterLoaderBox}></div>
            <div className={styles.banterLoaderBox}></div>
            <div className={styles.banterLoaderBox}></div>
            <div className={styles.banterLoaderBox}></div>
          </div>
          <div className="mb-20"></div>
          <div className="mt-20 text-xl font-customFont text-center animate-bounce">
            {sentences[currentSentence]}
          </div>
        </div>
      </main>
    </>
  );
}
