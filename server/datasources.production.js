module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  greyMatterBackendDb: {
    name: "greyMatterBackendDb",
    connector: "mongodb",
    url : "mongodb://" + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" + process.env.OPENSHIFT_MONGODB_DB_HOST + ":" + process.env.OPENSHIFT_MONGODB_DB_PORT + "/greymattersloopbackapi"
  },
  emailDs: {
    name: "emailDs",
    connector: "mail",
    transports: [
      {
        type: "smtp",
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        tls: {
          rejectUnauthorized: false
        },
        auth: {
          user: "ErinEland168@gmail.com",
          pass: "hfmlmujdxdmaepuf"
        }
      }
    ]
  }
};
