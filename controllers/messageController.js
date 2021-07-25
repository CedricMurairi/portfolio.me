import Message from '../models/message.model.js';

export async function getMessages () {
    try {
        let messages = await Message.findAll();
        return messages;
    }catch (e) {
        console.log(e)
        return false
    }
}

export async function saveMessage (data) {
    try {
        let message = await Message.create({ 
            sender: data.name,
            email: data.email,
            subject: data.title,
            text: data.message
        });
        if (message) { return true };
        return false;
    }catch (e) {
        console.log(e);
        return false
    }
}