import React, {useState} from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as fs from "fs"; 


const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (

    <>
      <div className={styles.container}>
        <div className={styles.main}>
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug}>
                <Link href={`/blogpost/${blogItem.slug}`} className={styles.card}>
                  <h2>{blogItem.title}</h2>
                </Link>
                <p>{blogItem.metadisc.substr(0, 400)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allBlogs = await data.json()
//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

export async function getStaticProps(context) {

  let data = await fs.promises.readdir("blogData");
  let myFile;
  let allBlogs = [];

  for(let index = 0 ; index < data.length; index++){
    const item = data[index];
    console.log(item);
    myFile = await fs.promises.readFile(("blogData/" + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}


export default Blog;
