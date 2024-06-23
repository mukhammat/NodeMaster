const express = require('express');
const app = express();

const projects = require('./routes/projects');
const connectDB = require('./db/connect');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//app.use(express.static('./public'));
app.use(express.json());
app.use('/', projects);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
