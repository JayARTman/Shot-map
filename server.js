
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

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, path.join(__dirname + '../../../assets/uploads'))},
//   filename: function(req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// });

// // console.log(storage)

// const upload = multer({
//   storage: storage
// }).single('postImage');

// app.post('/api/upload', upload, (req, res) => {
//   upload(req, res, (err) => {
//     console.log()
//     if(err) {
//         res.status(500).json(err);
//         console.log(err);
//     }
//     else {
//       console.log(req.body)
//     }
//   })
// })
app.use(express.static(path.join(__dirname, '/assets')));

app.use(require('./controllers'));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listenging on ${PORT}`)
    })
});
