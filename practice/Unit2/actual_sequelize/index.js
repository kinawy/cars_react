const db = require('./models');

db.user.findAll().then(users => {
    users.forEach(user => {
        console.log(user.dataValues)
    })
})

