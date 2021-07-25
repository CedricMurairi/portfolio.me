import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Message = sequelize.define('message', {
    message_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    sender: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'messages',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
            { name: "message_id" }
        ]
    }]
});

export default Message;