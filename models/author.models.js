module.exports = (sequelize, Sequelize) =>{
    const Authors = sequelize.define("authors", {
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
      email: {
            type: Sequelize.STRING,
            unique:true
          },
      date_birth: {
            type: Sequelize.DATEONLY

          }
    })
    Authors.sync().then(() => {
      console.log('table Authors created')
    })
    return Authors
  }
  //{force: true}
    