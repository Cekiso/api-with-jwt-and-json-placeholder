const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// enable the static folder...
app.use(express.static('public'));

app.post('/api/login', function(req, res) {
    const user = {
        username: "hello Nkulie"
    }
    jwt.sign({ user: user }, 'secretkey', (err, token) => {
        res.json({
            token: token
        })
    });
})
app.get('/api/posts', function(req, res) {
    res.json({
        message: 'garments added hello nkuli'

    })
})
const PORT = process.env.PORT || 4454;

// API routes to be added here

app.listen(PORT, function() {
    console.log(`App started on port ${PORT}`)
});