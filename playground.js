const { User } = require('./models');

// CREATE, READ, UPDATE, DELETE

// CREATE
async function makeUser(firstName, lastName, age, email) {
    try {
        const newUser = await User.create({ firstName, lastName, age, email });
        console.log(newUser.toJSON());
    } catch (err) {
        console.log(err);
    }
} 

// makeUser('Rome', 'Bell', 33, 'rome.bell@ga.co');
// makeUser('Kasai', 'Avery', 18, 'rome.bell@ga.co')

async function fetchAllUsers() {
    try {
        const allUsers = await User.findAll({});
        
        const parsedUsers = allUsers.map(u => u.toJSON())
        console.log(parsedUsers);

        //resizeBy.render('users/index', {users: parsedUsers});
        
    } catch (err) {
        console.log(err);
    }
} 

//fetchAllUsers();

async function findOrCreateUser(firstName, lastName, age, email) {
    try {
        const [user, created] = await User.findOrCreate({
            where: { firstName, lastName },
            defaults: { age, email }
        });

        console.log('USER:', user.toJSON()); // object
        console.log('WAS CREATED:', created); // true, false

    } catch (error) {
        console.log(error);
    }
}

// findOrCreateUser('Cal', 'Clemmer', 24, 'cal@email.com');
// findOrCreateUser('Rome', 'Bell', 3000, 'romebell@me.com');


// READ
async function fetchUserByName(firstName, lastName) {
    try {
        const foundUser = await User.findOne({
            where: { firstName, lastName }
        });
        console.log(foundUser.toJSON());
    } catch (err) {
        console.log(err);
    }
} 
// fetchUserByName('Rome', 'Bell');

// UPDATE

async function  updateUser(firstName, lastName, age, email) {
    try {
        const [numberOfRowsUpdate] = await User.update({ email, age }, {
            where: { firstName, lastName}

        });
        console.log(numberOfRowsUpdate);
    } catch (err) {
        console.log(err);
    }
}

updateUser('Kasai', 'Avery', 300, 'rome@email.com')

//delete

// why would we ever even want to delete anything? Honestly, we wouldn't 
async function deleteUser(email) {
    try {
        let deleteUserData = await User.destroy({
            where: { email }
        });
        console.log(deleteUserData)
    } catch (error) {
        console.log(error);
    }
}

deleteUser('rome.bell@ga.co');