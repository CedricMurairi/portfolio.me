import Message from '../models/message.model';

export default async function getMessages () {
    let messages = await Message.findAll();
}