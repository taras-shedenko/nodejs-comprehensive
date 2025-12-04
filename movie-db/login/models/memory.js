const users = [{ id: 1, username: "user", name: "User", password: '1234' }];

export const getById = async (id) => users.find((u) => u.id === id);

export const getByUsername = async (username) =>
  users.find((u) => u.username === username);
