const { User, Pet } = require('./models');
const user = require('./models/user');

async function createNewPet(name, species, description) {
    // 1 Create a pet
    // try {
    // const userOne = await User.findOne({
    //     where: { id: 1}
    // }); 

    // //createModel
    // userOne.createPet(name, species, description, userId);

    //     const newPet = Pet.create({name, species, description, userId});
    //     console.log('RAW', newPet);

    //     const pet = newPet.toJSON();
    //     console.log('CLEAN DATA', pet);

    // } catch (error) {
    //     console.log(error)
    // }
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

createNewPet('Ocasio', 'dog', 'Coolest dog ever', 1);
