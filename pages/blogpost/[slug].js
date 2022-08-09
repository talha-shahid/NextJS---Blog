import React , {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styles from "../../styles/Home.module.css"
import Head from "next/head"

//Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const slug = () => {
    const [blog, setBlog] = useState();
    const router = useRouter();
    useEffect(()=>{
        if(!router.isReady) return;
        const {slug} = router.query;
        fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
        .then((a) => {
          return a.json();
        })
        .then((parsed) => {
          setBlog(parsed);
        });
    }, [router.isReady])




  return (

        <div className={styles.container}>
            <div className={styles.main}>
            <div><h3>{blog && blog.title}</h3></div>
                    {blog && blog.content}
            </div>
        </div>

  )
}

export default slug;