"use client";

import Navbar from "./components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import { useGetImage } from "./context/imageContext";
import PageNo from "./components/PageNo";
import { useEffect } from "react";

export default function Home() {
  const { imageDetails, getImage } = useGetImage();

  if (imageDetails == []) {
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div
          className={`${styles.container} ${styles.grid} ${styles.fourColumn}`}
        >
          {imageDetails.map((e) => {
            return (
              <a key={e.id} href={e.largeImageURL} target="_blank">
                <Image
                  src={e.webformatURL}
                  alt="searched_images"
                  height={e.webformatHeight}
                  width={e.webformatWidth}
                  className={styles.img}
                  priority
                />
              </a>
            );
          })}
        </div>
        <PageNo />
      </main>
    </>
  );
}
