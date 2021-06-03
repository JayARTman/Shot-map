const sequelize = require('./config/connection');
const routes = require('./controllers');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listenging on ${PORT}`)
    });
});
