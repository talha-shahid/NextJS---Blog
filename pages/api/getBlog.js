import * as fs from 'fs';

// Taking a file (specific file depends upon the name you put into address bar after "blogData")
// from "blogData", reading it, and displaying it

export default function handler(req, res) {
    fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (err, data)=>{
        console.log(typeof data);
        console.log(data);
        if(err){
            res.status(500).json({error: "No such blog found"})
        }

        // console.log(data);
        const test = res.status(200).json(JSON.parse(data));
        // console.log(typeof test)
    })
    // console.log(res);

  }