import { sequelize } from '../database/db.js';
import { DataTypes } from "sequelize";

const Usuario = sequelize.define('Usuario', {

    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true

    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'usuario'
})

export default Usuario;
