import User from '../models/user.model.js';

export async function getUsers () {
    let users = await User.findAll();
    return users;
}

export async function getUserByEmail (email) {
    let user = await User.findOne({where: {email: email}});
    if(user){return user}
    return null;
}

export async function getUserById (id) {
    let user = await User.findOne({where: {user_id: id}});
    if(user){return user}
    return null;
}