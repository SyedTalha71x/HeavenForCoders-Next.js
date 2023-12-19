const fs = require('node:fs');


export default async function handler(req, res) {

    let data = await fs.promises.readdir("jsondata");
    let myfile;
    let allBlogs = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        myfile = await fs.promises.readFile(("jsondata/" + item), 'utf8');
        allBlogs.push(JSON.parse(myfile));
    }

    res.status(200).json(allBlogs);

}
