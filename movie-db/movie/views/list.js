export default (movies, username) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Movies</title>
    <link rel="stylesheet" href="/style.css"/>
  </head>
  <body>
    <h4 class="username">Hello, ${username}!</h4>
    <table>
      <thead>
        <tr>
          <th>Title</th><th>Year</th><th>Public</th><th>Edit</th><th>Delete</th>
        </tr>
      </thead>
      <tbody>
        ${movies
          .map(
            (movie) =>
              `<tr>
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.ispublic ? "yes" : "no"}</td>
                <td><a href="/movie/form/${movie.id}">edit</a></td>
                <td><a href="/movie/delete/${movie.id}">delete</a></td>
              </tr>`
          )
          .join("\n")}
      </tbody>
    </table>
    <a href="/logout">logout</a>
    <br>
    <a href="/movie/form">new</a>
    <p style="color:red; position:absolute; right:0; bottom:0; margin:8px">custom</p>
  </body>
</html>`;
