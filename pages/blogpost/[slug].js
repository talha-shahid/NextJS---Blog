import React from 'react'
import {useRouter} from 'next/router'
import styles from "../../styles/Home.module.css"
import Head from "next/head"

//Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;


  return (
    <>
    <style jsx>{`
    .w-container{
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }

    .wordWrapper {
        background: blue;
        width: 90vw;
        font-size: 30px;
        padding: 30px;
        border-radius: 10px;

    }
    .title{

    }
  `}</style>

    <div>
        <div className={styles.container}>
            <Head>
                <title>For More</title>
            </Head>
            <div className={`title ${styles.title}`}><h3>{slug}</h3></div>
            {/* <div className={styles.main}> */}
                {/* <h1 className={styles.title}>Search <a href={`https://stackoverflow.com/search?q=${slug}`}>{slug}</a> Here</h1> */}
                <div className="w-container">
                <div className="wordWrapper">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dignissimos eligendi doloribus quaerat fugiat. Unde, aperiam nulla. Ipsum, praesentium cumque facilis corporis rem cum odit odio, quae eaque ut delectus magnam animi mollitia nemo!
                </div>
                </div>

            {/* </div> */}
        </div>
    </div>
    </>
  )
}

export default slug;