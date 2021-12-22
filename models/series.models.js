module.exports = (sequelize, Sequelize) =>{
    const Series = sequelize.define("series", {
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
    Series.sync().then(() => {
      console.log('table Series created')
    })
    return Series
  }
  //{force: true}