import express from 'express';

const PORT = 5050;

const app = express();

app.get('/', (req, res) => {
    res.send('Bydlo' + ` PORT ${PORT}`);
})

app.listen(PORT, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log(`Server working on port ${PORT}`)
})