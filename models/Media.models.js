module.exports = (sequelize, Sequelize) =>{
    const Media = sequelize.define("media", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      file: {
            type: Sequelize.BLOB
          }
    })
    Media.sync().then(() => {
      console.log('table Media created')
    })
    return Media
  }
  //{force: true}