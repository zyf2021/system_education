const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    define: {
      timestamps: true
    }
  })



sequelize.Users = require("./users.models.js")(sequelize, Sequelize)
sequelize.Authors = require("./author.models.js")(sequelize, Sequelize)
sequelize.Bookmarks = require("./bookmarks.models")(sequelize, Sequelize)
sequelize.Books = require("./books.models")(sequelize, Sequelize)
sequelize.Collections = require("./collections.models")(sequelize, Sequelize)
sequelize.CollectionBooks = require("./collectionBooks.models")(sequelize, Sequelize)
sequelize.Comments = require("./comments.models")(sequelize, Sequelize)
sequelize.Docs = require("./docs.models")(sequelize, Sequelize)
sequelize.Events = require("./events.models")(sequelize, Sequelize)
sequelize.Forums = require("./Forums.models")(sequelize, Sequelize)
sequelize.Genres = require("./genres.models")(sequelize, Sequelize)
sequelize.GenresBook = require("./genresBook.models")(sequelize, Sequelize)
sequelize.MembersForum = require("./membersForum.models")(sequelize, Sequelize)
sequelize.MembersEvent = require("./membersEvent.models")(sequelize, Sequelize)
sequelize.MessagesForum = require("./messagesForum.models")(sequelize, Sequelize)
sequelize.News = require("./news.models")(sequelize, Sequelize)
sequelize.RaitingsBook = require("./raitingsBook.models")(sequelize, Sequelize)
sequelize.ReadBooksUser = require("./readBooksUser.models")(sequelize, Sequelize)
sequelize.Series = require("./series.models")(sequelize, Sequelize)
sequelize.SeriesBooks = require("./seriesBooks.models")(sequelize, Sequelize)
sequelize.Settings = require("./settings.models")(sequelize, Sequelize)
sequelize.StatusesBook = require("./statusesBook.models")(sequelize, Sequelize)
sequelize.StatusesEvent = require("./statusesEvent.models")(sequelize, Sequelize)
sequelize.Tegs = require("./tegs.models")(sequelize, Sequelize)
sequelize.TegsBook = require("./tegsBook.model")(sequelize, Sequelize)
sequelize.ThemesDocs = require("./themesDocs.models")(sequelize, Sequelize)
sequelize.ThemesNews = require("./themesNews.models")(sequelize, Sequelize)
sequelize.TypesEvent = require("./typesEvent.models")(sequelize, Sequelize)
sequelize.Media = require("./Media.models")(sequelize, Sequelize)

const Users = sequelize.Users
const Authors = sequelize.Authors
const Bookmarks = sequelize.Bookmarks
const Books = sequelize.Books
const Collections = sequelize.Collections
const CollectionBooks = sequelize.CollectionBooks
const Comments = sequelize.Comments
const Docs = sequelize.Docs
const Events = sequelize.Events
const Forums = sequelize.Forums
const Genres = sequelize.Genres
const GenresBook = sequelize.GenresBook
const Media = sequelize.Media
const MembersForum = sequelize.MembersForum
const MembersEvent = sequelize.MembersEvent
const MessagesForum = sequelize.MessagesForum
const News = sequelize.News
const RaitingsBook = sequelize.RaitingsBook
const ReadBooksUser = sequelize.ReadBooksUser
const Series = sequelize.Series
const SeriesBooks = sequelize.SeriesBooks
const Settings = sequelize.Settings
const StatusesBook = sequelize.StatusesBook
const StatusesEvent = sequelize.StatusesEvent
const Tegs = sequelize.Tegs
const TegsBook = sequelize.TegsBook
const ThemesDocs = sequelize.ThemesDocs
const ThemesNews = sequelize.ThemesNews
const TypesEvent = sequelize.TypesEvent

Users.hasMany(MessagesForum)
Users.hasMany(Settings)
Users.hasMany(Bookmarks)
Users.hasMany(Comments)
Users.hasMany(Collections)

TypesEvent.hasMany(Events)
StatusesEvent.hasMany(Events)

News.hasMany(Media)
News.hasMany(Comments)
ThemesNews.hasMany(News)

ThemesDocs.hasMany(Docs)

Authors.hasMany(Books)

Books.hasMany(Bookmarks)
Books.hasOne(Settings)

StatusesBook.hasMany(ReadBooksUser)
RaitingsBook.hasMany(ReadBooksUser)

Forums.hasMany(MessagesForum)

Users.belongsToMany(Books, {through:ReadBooksUser})
Books.belongsToMany(Users, {through:ReadBooksUser})

Users.belongsToMany(Forums, {through:MembersForum})
Forums.belongsToMany(Users, {through:MembersForum})

Users.belongsToMany(Events, {through:MembersEvent})
Events.belongsToMany(Users, {through:MembersEvent})

Collections.belongsToMany(Books, {through:CollectionBooks})
Books.belongsToMany(Collections, {through:CollectionBooks})

Series.belongsToMany(Books, {through:SeriesBooks})
Books.belongsToMany(Series, {through:SeriesBooks})

Books.belongsToMany(Genres, {through:GenresBook})
Genres.belongsToMany(Books, {through:GenresBook})

Books.belongsToMany(Tegs, {through:TegsBook})
Tegs.belongsToMany(Books, {through:TegsBook})

//const User = db.users
//const Request_User = db.request_user

//User.hasMany(Request_User)*/

sequelize.sync({force:true}).then(()=>{
 
  console.log("Tables have been created")
}).catch(err=>console.log(err))


module.exports = sequelize