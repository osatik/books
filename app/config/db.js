const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true, // SSL gereksinimini ayarlayın
        rejectUnauthorized: false // Sertifikayı doğrulamayın
      }
    },
    dialectModule: require('pg'),
  })

module.exports = sequelize;