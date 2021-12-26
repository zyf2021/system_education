module.exports = (sequelize, Sequelize) =>{
    const Collections = sequelize.define("collections", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
            type: Sequelize.STRING,
            unique:true
          },
      description: {
            type: Sequelize.TEXT
          }
    })
    Collections.sync().then(() => {
      console.log('table Collections created')
    })
    return Collections
  }
  //{force: true}
    