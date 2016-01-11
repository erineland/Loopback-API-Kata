module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  greyMatterBackendDb: {
    name: "greyMatterBackendDb",
    connector: "mongodb",
    database: "greymattersloopbackapi",
    url : "mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/",
    username: "admin",
    password: "YDVvspjeRMyV"
  }
};
