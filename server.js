
const path = require('path')
const express = require('express');
const session = require('express-session');
const multer = require('multer');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3008

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret cookies',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));
//set storage engine


const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/assets')));

app.use(require('./controllers'));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listenging on ${PORT}`)
    })
});
