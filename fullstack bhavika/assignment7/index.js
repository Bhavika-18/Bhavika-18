const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const HttpError = require('./utils/http-error');

// Configuration statements
const port = 3000;
app.use(bodyParser.json());


// Routing
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);


// Error Handling
app.use((req, res, next) => {
    const error = new HttpError('Page not found', 404);
    throw error;
});

app.use((error, req, res, next) => {
    res.status(error.code);
    res.json({ message: error.message || 'Unknown error occured', code: error.code });
});



//  Methods
//  app.get('/about', (req, res) => {
//    res.send(JSON.stringify({page: "About", message: "This is the about page"}));
//  });

//  app.post('/login',(req, res) => {
//    res.send({page: "Login", message: "Please submit your credentials!!"});
//  });

mongoose.connect('mongodb+srv://bhavikamamnani:9982251920@cluster0.0dfsk.mongodb.net/myAssignment?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    app.listen(port, () => {
        console.log(`App running on port ${port}`)
    });
}).catch(err => {
    console.log(err);
});