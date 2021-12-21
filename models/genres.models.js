module.exports = (sequelize, Sequelize) =>{
    const Genres = sequelize.define("genres", {
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
    Genres.sync().then(() => {
      console.log('table Genres created')
    })
    return Genres
  }
  //{force: true}
    