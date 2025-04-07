import express from 'express';

const app = express();

const articleInfo = [
    { name: 'learn-node', upvotes: 0, comment: [] },
    { name: 'learn-react', upvotes: 0, comment: [] },
    { name: 'mongodb', upvotes: 0, comment: [] },
]
// Corrected: express.json() needs to be invoked as middleware
app.use(express.json());  // This will parse incoming JSON requests

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articleInfo.find(a => a.name === req.params.name);
    article.upvotes += 1;

    res.json(article);

});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = articleInfo / find(a => a.name === name);

    article.comment.push({
        postedBy,
        text,
    });
    req.json({ article });


});

// Start the server
app.listen(8000, function () {
    console.log('Server is up and running on port 8000');
});
