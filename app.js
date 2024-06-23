const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}`);
    }
});
