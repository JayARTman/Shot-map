const router = require('express').Router();
const { Users } = require('../../models');


const passwordVerify = function(userName, password) {
    router.get('/', (req, res) => {
        Users.findOne({ 
            where: [{ 
                user_name: userName, 
                password: password 
            }]
        })
    })
    .then(dbUserData => {
        if(!dbUserData) {
            console.log('Incorrect password!');
            return false;
        }
        else {
            return true;
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}
module.exports = passwordVerify;
