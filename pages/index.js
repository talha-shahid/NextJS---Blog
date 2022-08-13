import Head from "next/head";
import { useState } from "react"; // import Script from "next/script";
import styles from "../styles/Main.module.css";
import Link from "next/link";

export default function Home(props) {
  const [blog, setblog] = useState(props.allBlogs);
  return (
    <div className={styles.container}>
      <Head>
        <title>Talha's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        <Link href="/"><span className={styles.talha}>Talha's</span></Link>{" "}
            Blog
        </h1>

        <p className={styles.description}>
          A place to learn
        </p>
        <h2 className={styles.latest}>Latest Posts</h2>
        <br />

        <div className={styles.grid}>
          {blog.map((blogitems, index) => {
            return (
              index < 3 && (
                <div key={blogitems.slug}>
                  <Link href={`/blogpost/${blogitems.slug}`}>
                    <a className={styles.card}>
                      <h2>{blogitems.title} &rarr;</h2>
                      <p>{blogitems.metadisc.substr(0, 400)}</p>
                    </a>
                  </Link>
                </div>
              )
            );
          })}
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}