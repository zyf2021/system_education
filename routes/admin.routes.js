const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const bcrypt = require('bcryptjs')

const AdminJSSequelize = require('@adminjs/sequelize')


const config = require('config')
const db = require('../models/index')
const { Books, Bookmarks, Collections, CollectionBooks, Forums, Genres, 
        GenresBook, RaitingsBook, Tegs, TegsBook, Users} = require('../models/index')

AdminJS.registerAdapter(AdminJSSequelize)


const forumsParent = {
    name: 'Forums',
    icon: 'Forum',
  }

  const booksParent = {
    name: 'Books',
    icon: 'Book',
  }

const adminJs = new AdminJS({
  databases: [db],
  rootPath: '/admin',
  branding: {
    companyName: 'Elibrary',
  },
  resources: [
    { resource: Forums, options: { parent: forumsParent }},
    { resource: db.MembersForum, options: { parent: forumsParent }},
    { resource: db.MessagesForum, options: { parent: forumsParent }},
    { resource: Books, options: { parent: booksParent }},
    { resource: Bookmarks, options: { parent: booksParent }},
    { resource: GenresBook, options: { parent: booksParent }},
    { resource: TegsBook, options: { parent: booksParent }},
    { resource: CollectionBooks, options: { parent: booksParent }},
  ],
  locale: { 
      language:'rus',
      translations: { 
        resources: { 
            Forums: {
                   name: 'Форумы'
                }
            }
        }
    }
})

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs,{
    authenticate: async (email, password) => {
        const user = await Users.findOne({where:{email:email}})
        if (user) {
          const a_pass = user.password
          console.log('AuthAdmin', a_pass)
          const matched = await bcrypt.compare(password, user.password)
          if (matched) {
            return user
          }
        }
        return false
      },
    cookiePassword: 'some-secret-password-used-to-secure-cookie' 
})

//app.listen(8080, () => console.log('AdminJS is running under localhost:8080/admin'))

module.exports = router