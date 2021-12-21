module.exports = (sequelize, Sequelize) =>{
    const Comments = sequelize.define("comments", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      text: {
            type: Sequelize.STRING
          }
    })
    Comments.sync().then(() => {
      console.log('table Comments created')
    })
    return Comments
  }
  //{force: true}
    