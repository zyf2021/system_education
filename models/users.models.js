module.exports = (sequelize, Sequelize) =>{
  const Users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    first_name: {
          type: Sequelize.STRING
        },
    last_name: {
          type: Sequelize.STRING
        },
    middle_name: {
          type: Sequelize.STRING
        },
    date_birth: {
          type: Sequelize.DATEONLY

        },
    email: {
          type: Sequelize.STRING,
          unique:true
        },
    password: {
          type: Sequelize.STRING
        },
    role: {
          type: Sequelize.STRING
        },
    dateLastEnter:{
      type: Sequelize.DATE
    }
  })
  Users.sync().then(() => {
    console.log('table Users created')
  })
  return Users
}
//{force: true}
  