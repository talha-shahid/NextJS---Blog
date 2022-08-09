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
        setBlogs(parsed);
      });

  }, []);
  
  // By the end of day, "blogs" will conntain all the "blogData" in object form
  // console.log(typeof blogs)
  // console.log(blogs )

  return (

    <>

      <div className={styles.container}>
        <div className={styles.main}>
          {/*  */}
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

    </>
  );
};

export default Blog;
