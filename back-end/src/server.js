import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
let db; // Declare db


app.use(express.json());

async function connectToDB() {
    const uri = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    await client.connect();
    db = client.db('full-stack-react-db');
}

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;
    const article = await db.collection('articles').findOne({ name });
    res.json(article);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;

    const result = await db.collection('articles').findOneAndUpdate(
        { name },
        { $inc: { upvotes: 1 } },
        { returnDocument: 'after' }
    );

    res.json(result.value);
});

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const newComment = { postedBy, text };

    const result = await db.collection('articles').findOneAndUpdate(
        { name },
        { $push: { comment: newComment } },
        { returnDocument: 'after' }
    );

    res.json(result.value);
});

async function start() {
    await connectToDB();
    app.listen(8000, function () {
        console.log('server is up and running on Port 8000');
    });
}

start();
