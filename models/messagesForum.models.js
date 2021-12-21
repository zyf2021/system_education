module.exports = (sequelize, Sequelize) =>{
    const MessagesForum = sequelize.define("messages_forum", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      text: {
            type: Sequelize.TEXT
          },
       application:{
           type:Sequelize.BLOB
       }   
    })
    MessagesForum.sync().then(() => {
      console.log('table MessagesForum created')
    })
    return MessagesForum
  }
  //{force: true}