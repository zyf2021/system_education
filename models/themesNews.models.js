module.exports = (sequelize, Sequelize) =>{
    const themesNews = sequelize.define("themes_news", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
            type: Sequelize.STRING,
            unique:true
          }
    })
    themesNews.sync().then(() => {
      console.log('table themesNews created')
    })
    return themesNews
  }
  //{force: true}