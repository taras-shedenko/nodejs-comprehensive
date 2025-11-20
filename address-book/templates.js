import { addresses } from "./data.js";

export const getList = () =>
  `<!DOCTYPE html>
    <html>
      <head>
        <title>Address Book</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/styles.css"/>
      <head>
      <body>
        <h1>Address Book</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Street</th>
              <th>City</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            ${addresses
              .map(
                (addr) =>
                  `<tr>
                    <td>${addr.id}</td>
                    <td>${
                      addr.file ? `<img src="/uploads/${addr.file}">` : ""
                    }</td>
                    <td>${addr.firstname ?? ""}</td>
                    <td>${addr.lastname ?? ""}</td>
                    <td>${addr.street ?? ""}</td>
                    <td>${addr.city ?? ""}</td>
                    <td>${addr.country ?? ""}</td>
                    <td><a href="/edit/${addr.id}">edit</a></td>
                    <td><a href="/delete/${addr.id}">delete</a></td>
                  </tr>`
              )
              .join("\n")}
          <tbody>
        </table>
        <a href="/new">New</a>
      </body>
    </html>`;

export const getForm = (id) => {
  const address = id
    ? addresses.find((addr) => addr.id == id)
    : { firstname: "", lastname: "", street: "", city: "", country: "" };

  return `<!DOCTYPE html>
    <html>
      <head>
        <title>${id ? "Edit" : "Create"} Address</title>
        <meta charset="utf-8">
      </head>
      <body>
        <form action="/save" method="POST" enctype="multipart/form-data">
          <input type="hidden" id="id" name="id" value="${id || ""}">
          <div>
            <label for="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" value="${
              address.firstname
            }"/>
          </div>
          <div>
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" value="${
              address.lastname
            }"/>
          </div>
          <div>
            <label for="street">Street</label>
            <input type="text" id="street" name="street" value="${
              address.street
            }"/>
          </div>
          <div>
            <label for="city">City</label>
            <input type="text" id="city" name="city" value="${address.city}"/>
          </div>
          <div>
            <label for="country">Country</label>
            <input type="text" id="country" name="country" value="${
              address.country
            }"/>
          </div>
          <div>
            <label for="file">File</label>
            <input type="file" id="file" name="file"/>
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </body>
    </html>`;
};
