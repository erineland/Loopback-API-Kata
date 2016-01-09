module.exports = {
  "db": {
    "name": "db",
    "connector": "memory"
  },
  greyMatterBackendDb: {
    name: "greyMatterBackendDb",
    connector: "mongodb",
    host: "mongodb://$OPENSHIFT_MONGODB_DB_HOST",
    port: "$OPENSHIFT_MONGODB_DB_PORT",
    database: 'greymattersloopbackapi',
    username: 'admin',
    password: 'YDVvspjeRMyV'
  }
};
