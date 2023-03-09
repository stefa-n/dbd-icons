import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/PackCard.module.css";

export default function PackCard({ title, author, preview, download }) {
  return (
    <>
      <Link href={download}>
        <div className={styles.card}>
          <Image
            src={require(`../public${preview}`)}
            alt="Preview"
            width={512}
            height={128}
            style={{ width: "91%", height: 'auto' }}
          />
          <br />
          <h1 style={{ fontFamily: "Arial", fontSize: '1.7vw' }}>{title}</h1>
          <h2 style={{ fontFamily: "Arial", fontSize: '1.5vw' }}>Author: {author}</h2>
        </div>
      </Link>
    </>
  );
}
