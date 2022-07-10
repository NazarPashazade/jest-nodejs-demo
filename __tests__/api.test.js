const getUser = require("../api");
const mockAxios = require("axios");

// 2.way (without __mocks__ folder)

// jest.mock("axios");
// mockAxios.get.mockImplementation(() =>  Promise.resolve({ data: { id: 1, username: "Bret" } }) );

describe("api functionalities ", () => {

  afterEach(jest.clearAllMocks);

  test("username equals to 'Bret': ", async () => {
    const user = await getUser();
    expect(user.username).toBe("Bret");
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  test("userId equals to 1: ", async () => {
    const user = await getUser();
    expect(user.id).toBe(1);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
