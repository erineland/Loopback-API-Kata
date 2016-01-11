module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  greyMatterBackendDb: {
    name: "greyMatterBackendDb",
    connector: "mongodb",
    url : "mongodb://" + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" + process.env.OPENSHIFT_MONGODB_DB_HOST + ":" + process.env.OPENSHIFT_MONGODB_DB_PORT + "/greymattersloopbackapi"
  }
};
