db.createUser({
  user: "movie",
  pwd: "1234",
  roles: [
    {
      role: "readWrite",
      db: "moviedb",
    },
  ],
});
