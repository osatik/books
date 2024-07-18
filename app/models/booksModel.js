const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')

const Book = sequelize.define('books', {
    title:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    author:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    isbn:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    genre:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
})

const syncBooks = async ()=>{
    await sequelize.sync()
}
module.exports = {Book, syncBooks}