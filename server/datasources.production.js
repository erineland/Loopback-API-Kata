module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  greyMatterBackendDb: {
    name: "greyMatterBackendDb",
    connector: "mongodb",
    database: "greymattersloopbackapi",
    host: "mongodb://$OPENSHIFT_MONGODB_DB_HOST",
    port: "$OPENSHIFT_MONGO_DB_PORT",
    //url : "mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/",
    username: "admin",
    password: "YDVvspjeRMyV"
  }
};
