export default (movie, username) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Movies</title>
    <link rel="stylesheet" href="/style.css"/>
  </head>
  <body>
    <h4 class="username">Hello, ${username}!</h4>
    <form action="/movie/save" method="POST">
      <input type="hidden" name="id" value="${movie.id}"/>
      <div>
        <label for="title">Title: </label>
        <input id="title" type="text" name="title" value="${movie.title}"/>
      </div>
      <div>
        <label for="year">Year: </label>
        <input id="year" type="text" name="year" value="${movie.year}"/>
      </div>
      <div>
        <label for="ispublic">Public?: </label>
        <input id="ispublic" type="checkbox" name="ispublic" ${
          movie.ispublic ? "checked" : ""
        }/>
      </div>
      <input type="submit" value="Save"/>
    </form>
    <a href="/logout">logout</a>
    <p style="color:red; position:absolute; right:0; bottom:0; margin:8px">custom</p>
  </body>
</html>`;
