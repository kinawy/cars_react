const db = require('./models')

// // db.user.create({
// //     firstName: 'Sameh',
// //     lastName: 'Kinawy',
// //     email: 'samehkinawy@runner.com',
// //     age: '500'
// // })
// // .then(response => {
// //     console.log(response.get())
// // })
// // .catch(error => {
// //     console.log(error)
// // })

// const sameh = {
//     where: {id: 2}
// }

// // db.user.findOne(sameh)
// // .then(oneUser => {
// //     oneUser.getPets()
// //     .then(response => {
// //         for (let i = 0; i < response.length; i ++) {
// //             let eachPet = response[i].get()
// //             console.log(eachPet)
// //         }
// //     })
// //     .catch(error => {
// //         console.log(error)
// //     })
// // })
// // .catch(error => {
// //     console.log(error)
// // })

// db.pet.findOrCreate({
//     where: { name: 'Tyson' },
//     defaults: { species: 'boxer', description: 'Knock out king!'}
// })
// .then(([createdPet, created]) => {
//     console.log(`This pet was created: ${created}.`)
//     console.log(createdPet.get())

//     db.user.findOne(sameh)
//     .then(userFromDB => {
//         userFromDB.addPet(createdPet)
//     })
//     .catch(error => {
//         console.log(error, "errors")
//     })
// })
// .catch(error => {
//     console.log(error, "errors")
// })

// db.pet.findOrCreate({
//     where: { name: 'Tyson'},
//     defaults: { species: 'Rottweiler', description: 'Knock out king!'}
// })
// .then(([pet, created]) => {
//     console.log(`This was created: ${created}`)
//     db.toy.findOrCreate({
//         where: { type: 'boxing mat', color: 'green'}
//     })
//     .then(([toy, created]) => {
//         console.log(`This was created: ${created}`)
//         pet.addToy(toy)
//         .then(relationInfo => {
//             console.log(toy.type, "added to", pet.name)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     })
//     .catch(error => {
//         console.log(error)
//     })
// })
// .catch(error => {
//     console.log(error)
// })

// db.toy.findAll()
// .then(response => {
//     console.log(response)
// })
// .catch(error => {
//     console.log(error)
// })

db.artist.findOrCreate({
    where: { name: 'Drake'},
    defaults: { city: 'Toronto', description: 'Self-centered douchebag'}
})
.then(([artist, created]) => {
    console.log(created)

    db.album.findOrCreate({
        where: { title: 'Dark Lane Demo Tape'},
        defaults: { year: 2020, genre: 'Shitty-Hip-Hop'}
    })
    .then(([album, created]) => {
        console.log(created)
        artist.addAlbum(album)
        .then(relationInfo => {
            console.log(relationInfo[0].get())
        })
        .catch(error => {
            console.log(error)
        })
    })
    .catch(error => {
        console.log(error)
    })
})
.catch(error => {
    console.log(error)
})