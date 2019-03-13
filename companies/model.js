const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('companies', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  foundingYear: {
    type: Sequelize.STRING,
    field: 'founding_year',
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    field: 'description',
    allowNull: false
  }
})

module.exports = Company