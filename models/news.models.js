module.exports = (sequelize, Sequelize) =>{
    const News = sequelize.define("news", {
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
       text:{
           type: Sequelize.TEXT
       } 
    })
    News.sync().then(() => {
      console.log('table News created')
    })
    return News
  }
  //{force: true}