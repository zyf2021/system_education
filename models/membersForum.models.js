module.exports = (sequelize, Sequelize) =>{
    const MembersForum = sequelize.define("members_forum", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      role: {
            type: Sequelize.STRING
          },
      check: {
            type: Sequelize.BOOLEAN
          }
    })
    MembersForum.sync().then(() => {
      console.log('table MembersForum created')
    })
    return MembersForum
  }
  //{force: true}
    