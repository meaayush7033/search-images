"use client";

import React, { useState } from "react";
import styles from "@/app/components/components.module.css";
import { useGetImage } from "../context/imageContext";
import Link from "next/link";

function Navbar() {
  const [search, setSearch] = useState("");
  const { searchImages } = useGetImage();
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} href="/">Image Search</Link>
      <div className={styles.searchInput}>
        <input
          type="text"
          className={styles.navInput}
          placeholder="Search your image"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={styles.btn}
          onClick={() => searchImages(search, 1)}
        >
          search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
