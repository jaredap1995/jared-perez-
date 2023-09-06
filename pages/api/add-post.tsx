import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, author, content } = req.body;
        const description = content.substring(0,100) + (content.length >100 ? '. . . ' : '');
    

        const mdxContent = `---
        title: ${title}
        author: ${author}
        description: ${description}
        created: ${new Date().toISOString()}
----

        ${content}
        `;

        const filePath = path.join(process.cwd(), '_blog-posts', `${title.replace(/ /g, '-').toLowerCase()}.mdx`);
        fs.writeFileSync(filePath, mdxContent);

        res.status(200).json({ message: 'Post Save Success!' });
    } else {
        res.status(405).end();
    }
}