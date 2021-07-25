import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const User = sequelize.define('user', {
    user_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    password: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
            { name: "user_id" }
        ]
    }]
});

export default User;