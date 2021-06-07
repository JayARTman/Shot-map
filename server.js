const { response } = require('express');
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const { Posts, Users, Cities} = require('./models')



const app = express();
const PORT = process.env.PORT || 3008

app.use(express.static('index.js'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listenging on ${PORT}`)
    })
});
