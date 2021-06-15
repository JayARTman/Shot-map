const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const sequelize = require('../../config/connection');
const { Images } = require('../../models');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname + '../../../assets/uploads'))},
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });

  console.log(storage)
  
const upload = multer({
    storage: storage
}).single('image');

router.get('/', (req, res) => {
    Images.findAll()
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})
router.post('/', (req, res) => {
    
    upload(req, res, (err) => {
        
        if(err) {
            res.status(500).json(err);
            console.log(err);
        }
        else {
            Images.create({
                original_name: req.file.originalname,
                savedAs_name: req.file.filename,
                path: req.file.path
            })
            .then(imageData => res.json(imageData))
            .catch((err) => {
                res.status(500).json(err);
                console.log(err)
            })    
        }
    })
    
    
})

// const { Posts, Users, Cities, Images} = require('../../models')


module.exports = router