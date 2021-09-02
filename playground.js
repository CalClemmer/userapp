const { User, Pet, Toy } = require('./models');
const user = require('./models/user');

async function createNewPet(name, species, description) {

    try {
    const user1 = await User.findOne({
        where: {id: 1},
        include: [Pet]

    })
    console.log(user1.toJSON());

    const newPet = await user1.createPet({name, species, description})
    console.log(newPet.toJSON());

    } catch (error) {
        console.log(error);
    }
}

//createNewPet('Ocasio', 'dog', 'Coolest dog ever', 1);

async function makeOneToy(type, color) {
    const newToy = await Toy.create({ type, color });
    console.log(newToy.toJSON());
}

//makeOneToy('ball', 'blue');

async function addToyToPet() {
    // get the first pet
    const foundPet = await Pet.findOne({
        where: { id: 1 },
        include: [Toy]
    });
    console.log(foundPet.toJSON());
    
    // get the first toy
    const foundToy = await Toy.findOne({
        where: { id: 1 },
    });
    console.log(foundToy.toJSON());
    
    // add a toy to a pet (toy -> pet)
    let result = await foundPet.addToy(foundToy); // because of the association
    console.log(result);
}

addToyToPet();

// Exercise: to find the first pet and include the toy model 

async function findFirstPetWithToy() {
    try {
        const foundPet = await Pet.findOne({
            where: { Toys }
        });
        console.log(foundPet.toJSON());
    } catch (err) {
        console.log(err);
    }
} 

findFirstPetWithToy();

// Exercise: 