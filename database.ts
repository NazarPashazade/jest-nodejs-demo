const DB = {
  databaseInitialized: () => console.warn("Database Initiliazing..."),
  databaseClosed: () =>
    console.warn("All tests finished..., Database Closing...")
};

module.exports = DB;
