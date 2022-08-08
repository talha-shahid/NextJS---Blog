import * as fs from 'fs';

// Rading "blogData", and displaying it

export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogData");
    let myFile;
    let allBlogs= [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        // console.log(item);
        myFile = await fs.promises.readFile(("blogData/" + item), "utf-8")
        // console.log(myFile)
        allBlogs.push(JSON.parse(myFile))
    }
    // fs.readdir("blogData", "utf-8", (err, data)=>{
        // let allBlogs = [];
        // console.log("type of data " + typeof data)
        // data.forEach((item)=>{
        //     console.log(item)
            // fs.readFile(('blogdata/', + item), (d)=>{
            //     allBlogs.push(d);
            // })
        // })
        // res.status(200).json(allBlogs);
    // })
    // console.log(res);
    res.status(200).json(allBlogs)
  }