module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  greyMatterBackendDb: {
    name: "greyMatterBackendDb",
    connector: "mongodb",
    database: "greymattersloopbackapi",
    url : "mongodb://$OPENSHIFT_MONGODB_HOST:$OPENSHIFT_MONGO_DB_PORT/",
    username: "admin",
    password: "YDVvspjeRMyV"
  }
};
