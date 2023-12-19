const fs = require('node:fs');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            let data = await fs.promises.readdir('contactdata');
            console.log(data);
            fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body));
            res.status(200).json(req);

        } catch (error) {
            console.error('Error processing POST request:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handle other HTTP methods
        res.status(405).json(["all blogs"]);
    }
}
