    // Conexão com o banco de dados
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize({
        host:'localhost',
        dialect: 'sqlite',
        storage: './models/database.db'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}