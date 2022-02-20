module.exports = {
    HOST: "localhost",
    USER: "mysql",
    PASSWORD: "mysql",
    DB: "db_sys_edu",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }