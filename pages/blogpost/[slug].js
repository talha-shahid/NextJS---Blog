import React , {useState, useEffect} from 'react'
import styles from "../../styles/Home.module.css"
import * as fs from 'fs';


const Slug = (props) => {

  function createMarkup(c) {
    return {__html: c};
  }

  const [blog, setBlog] = useState(props.myBlog);
  return (

        <div className={styles.container}>
            <div className={styles.main}>
            <div><h3>{blog && blog.title}</h3></div>
                    {blog && <div dangerouslySetInnerHTML= {createMarkup(blog.content)}/>}
            </div>
        </div>

  )
}

// export async function getServerSideProps(context) {
//       const {slug} = context.query;
      
//       let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
//       let myBlog = await data.json()

//   return {
//     props: {myBlog}, 
//   }
// }

export async function getStaticPaths() {
  return {
    paths: [{ params: {slug:'learn-flask' } }, { params: {slug:'learn-javascript' } }, { params: {slug:'learn-python' } }],
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  console.log(context);
  const {slug} = context.params;

    let myBlog =  await  fs.promises.readFile(`blogData/${slug}.json`, 'utf-8')
  return {
    props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
  }

}


export default Slug;