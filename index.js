const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5501;

app.use(cors());
app.options('*', cors());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
"Check request"
})

app.listen(PORT, () => {
    console.log(`server is run on port:${PORT}`)
})