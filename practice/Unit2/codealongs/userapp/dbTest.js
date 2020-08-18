// import our database models
const db = require("./models");
const user = require("./models/user");

db.user.findOrCreate({
  where: {
    firstName: "Sameh",
  },
  default: {
    lastName: "Kinawy",
    age: 31,
    email: "sameh.yasser.kinawy@gmail.com",
  },
});
// .then(([user, created]) => {

// })

// db.user.findAll()
// .then(users=> {
//     user.forEach(user=> {
//         console.log(user.get())
//     })
// })
// finds and creates a pet by my name
// db.user.findOne({
//     where: {
//     firstName: 'Sameh'
// }
// })
// .then(foundUser=> {
//     foundUser.createPet({
//         name:'Kitty',
//         description: 'Chill Kitty'
//     })
//     .then(pet=> {
//         console.log('Created the following pet: ', pet.name)
//     })
// })
// finds by name using where key
// db.user.findOne({
//     where: {firstName: 'Sameh'}
// }).then(foundUser=> {
//     console.log(`I found ${foundUser.firstName}`)
//     foundUser.getPets().then(usersPets=> {
//         usersPets.forEach(pet=> {
//             console.log(pet.get())
//         })
//     })
// })
// finds by primary key
// db.user.findByPk(1).then(foundUser=> {
//     console.log(`I found ${foundUser.firstName}`)
//     foundUser.getPets().then(usersPets=> {
//         usersPets.forEach(pet=> {
//             console.log(pet.get())
//         })
//     })
// })

// db.user.findOne({
//     where: {
//         firstName: "Pete"
//     },
//     include: [{
//         model: db.pet
//     }]
// }).then(user => {
//     console.log("Pete and his Pets", user.get())
// })

// .then(user => {
//     user.createPet({
//         name:'Black Jesus',
//         description: 'Very Friendly Black Cat'
//     })
//     .then(pet => {
//         console.log('Created the following pet: ', pet.get())
//     })
//     .catch(error=> {
//         console.log(error)
//     })
// })
// .catch(error => {
//     console.log(error)
// })

db.user
  .findAll({
    include: [db.pet],
  })
  .then((users) => {
    users.forEach((user) => {
      console.log(`${user.firstName}'s Pets:`);
      user.pets.forEach((pet) => {
        console.log(pet.name);
      });
    });
  });
