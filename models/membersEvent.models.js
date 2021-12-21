module.exports = (sequelize, Sequelize) =>{
    const MembersEvent = sequelize.define("members_event", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      }
    })
    MembersEvent.sync().then(() => {
      console.log('table MembersEvent created')
    })
    return MembersEvent
  }
  //{force: true}
    