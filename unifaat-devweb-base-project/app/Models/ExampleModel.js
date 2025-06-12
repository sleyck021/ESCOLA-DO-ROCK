import sequelize from '../../config/sequelize.js';
import { DataTypes } from 'sequelize';

export default (function () {

    return sequelize.define(
        "ExampleModel",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            esta_ativo: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            egay: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            }
        },
        {
            tableName: "tabela_exemplo",
            timestamps: false
        }
    );

})();
