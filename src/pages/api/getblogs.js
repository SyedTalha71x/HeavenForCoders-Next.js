
const fs = require('node:fs');


export default function handler(req, res) {
    fs.readFile(`jsondata/${req.query.slug}.json`, "utf-8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "No Blog Found" });
        }
        else {
            console.log(data);
            res.status(200).json(data);
        }
    });
}
