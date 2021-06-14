const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const { Posts, Users, Cities} = require('./models')


const app = express();
const PORT = process.env.PORT || 3008

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listenging on ${PORT}`)
    })
});
