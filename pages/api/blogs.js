import * as fs from 'fs';

export default async function handler(req, res) {

    //read "blogData" directory ... and store the contents in "data"
    // "data" contains all the names of files in "blogData" in array format

    let data = await fs.promises.readdir("blogData");

    // console.log(data);
    // console.log(typeof data);

    let myFile;
    // initialize "allBlogs" with an empty array
    let allBlogs= [];

    for (let index = 0; index < data.length; index++) {

        // take individual elements from "data" and store them in "item"
        const item = data[index];

        // console.log(item);

        //read the contents of individual files inside "blogData" and store them inside "myFile"
        myFile = await fs.promises.readFile(("blogData/" + item), "utf-8")

        // console.log(myFile)
        // console.log(typeof myFile) //--> "string"


        //As "myFile" is string, convert it into JS object and push them inside "allBlogs"
        allBlogs.push(JSON.parse(myFile))
    }

    res.status(200).json(allBlogs)
  }