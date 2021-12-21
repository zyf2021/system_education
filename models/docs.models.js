module.exports = (sequelize, Sequelize) =>{
    const Docs = sequelize.define("docs", {
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
      file: {
            type: Sequelize.BLOB
          }
    })
    Docs.sync().then(() => {
      console.log('table Docs created')
    })
    return Docs
  }
  //{force: true}
    