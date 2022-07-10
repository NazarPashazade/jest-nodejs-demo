const DB = require("../database");

beforeAll(() => DB.databaseInitialized());

afterAll(() => DB.databaseClosed());
