The response (or res) object in Express is used to send data back to the client in response to their request. It provides several methods and properties that control what data is returned and how it's formatted. Here’s a breakdown of some commonly used response object properties and methods:

1. res.send()
   Description: Sends a response to the client with the specified content.
   Use: A versatile method that can send text, JSON objects, arrays, etc.
   Example:

- code
  app.get("/", (req, res) => {
  res.send("Hello, World!"); // Sends a text response
  });

2. res.json()
   Description: Sends a JSON response to the client.
   Use: Commonly used in APIs to return JSON-formatted data.
   Example

- code
  app.get("/user", (req, res) => {
  res.json({ name: "John Doe", age: 30 });
  });

3. res.status()
   Description: Sets the HTTP status code for the response.
   Use: Useful for indicating the result of the request, such as success (200), not found (404), unauthorized (401), etc.
   Example

- code
  app.get("/not-found", (req, res) => {
  res.status(404).send("Page not found");
  });

4. res.redirect()
   Description: Redirects the client to a different URL.
   Use: Useful for rerouting the client to a different endpoint.
   Example

- code
  app.get("/old-page", (req, res) => {
  res.redirect("/new-page");
  });

5. res.sendFile()
   Description: Sends a file as a response to the client.
   Use: Commonly used to serve static files, like HTML, images, PDFs, etc.
   Example

- code

app.get("/file", (req, res) => {
res.sendFile("/path/to/file.pdf", { root: \_\_dirname });
});

6. res.set()
   Description: Sets HTTP response headers.
   Use: Useful for controlling cache, content type, and other metadata in the headers.
   Example

- code
  app.get("/data", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send({ message: "Headers set!" });
  });

7. res.cookie()
   Description: Sets a cookie on the client.
   Use: Often used to store session data, authentication tokens, or user preferences.
   Example:

- code
  app.get("/set-cookie", (req, res) => {
  res.cookie("name", "value", { httpOnly: true });
  res.send("Cookie set!");
  });

8. res.clearCookie()
   Description: Clears a cookie previously set on the client.
   Use: Useful for logging users out or clearing session data.
   Example

- code
  app.get("/logout", (req, res) => {
  res.clearCookie("name");
  res.send("Logged out and cookie cleared!");
  });

9. res.end()
   Description: Ends the response process.
   Use: Can be used to end a response without sending any data (often unnecessary since send(), json(), etc., call end() internally).
   Example

- code
  app.get("/done", (req, res) => {
  res.write("Partial response...");
  res.end(); // Completes the response
  });

These properties and methods allow you to format the response, set headers, manage cookies, and control HTTP status codes, making the response object essential for interacting with clients in Express applications.
