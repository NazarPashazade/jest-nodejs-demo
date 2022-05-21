const DB = require("./database");

const Methods = require("./main");

beforeAll(() => DB.databaseInitialized());

afterAll(() => DB.databaseClosed());