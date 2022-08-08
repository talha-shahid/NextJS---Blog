import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate through them and display them

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("UseEffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

  return (
    <>
      {/* <style jsx>{`
        .blogWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style> */}
      <div className={styles.container}>
        <div className={styles.main}>
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug}>
                <Link href={`/blogpost/${blogItem.slug}`} className={styles.card}>
                  <h2>{blogItem.title}</h2>
                </Link>
                <p>{blogItem.content.substr(0, 400)}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="blogWrapper">
      <div className={styles.blogplace}> */}
      {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div> */}
      {/* </div>
      </div> */}

      {/* <div className="blogWrapper">
      <div className={styles.blogplace}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </div>
      </div> */}
    </>
  );
};

export default Blog;
