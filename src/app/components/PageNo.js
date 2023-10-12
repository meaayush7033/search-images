import React from "react";
import { useGetImage } from "../context/imageContext";
import styles from "@/app/components/components.module.css";

function PageNo() {
  const { totalpages, page, query, getImageWithQuery } = useGetImage();

  const pages = Array.from({ length: totalpages }, (_, i) => i + 1);

  function nextPage() {
    if (page < totalpages) {
      getImageWithQuery(query, page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      getImageWithQuery(query, page - 1);
    }
  }

  return (
    <div className={styles.pagination}>
      <a onClick={prevPage}>&laquo;</a>
      {pages.map((e) => {
        return (
          <a
            className={e === page ? styles.active : ""}
            key={e}
            onClick={() => getImageWithQuery(query, e)}
          >
            {e}
          </a>
        );
      })}
      <a onClick={nextPage}>&raquo;</a>
    </div>
  );
}

export default PageNo;
