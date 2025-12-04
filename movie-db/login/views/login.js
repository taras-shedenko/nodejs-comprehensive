export default () => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
  </head>
  <body>
    <form action="/login" method="POST">
      <div>
        <label for="username">Username: </label>
        <input id="username" type="text" name="username"/>
      </div>
      <div>
        <label for="password">password: </label>
        <input id="password" type="password" name="password"/>
      </div>
      <input type="submit" value="Login"/>
    </form>
  </body>
</html>`;
