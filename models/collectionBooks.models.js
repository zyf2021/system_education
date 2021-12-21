module.exports = (sequelize, Sequelize) =>{
    const CollectionBooks = sequelize.define("collection_books", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }
    })
    CollectionBooks.sync().then(() => {
      console.log('table CollectionBooks created')
    })
    return CollectionBooks
  }
  //{force: true}
    