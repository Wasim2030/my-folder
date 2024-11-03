# https://tailblocks.cc/ => tailwind templates

# nodejs has a package called expreess -> with this we can make a server -> can serve html with this and also can run our own js code in backend

#

app.get("/", (req, res) => {
res.send("Hello World!");
});

req object and res object
req object me se kaafi cheejain nikaal sakte hai

#

explain request object, also explain its important frequent used properties and its use

In your code, the request (or req) object in Node.js and Express represents the HTTP request received by the server. It contains all the information about the client’s request, including parameters, headers, cookies, and more. Here’s a breakdown of its commonly used properties and their uses:

1. req.url
   Description: Contains the full URL path of the request.
   Use: Useful for routing and checking the path the client is accessing.
   Example

- code
  app.get("/", (req, res) => {
  console.log(req.url); // Outputs: "/"
  res.send("Hello World!");
  });

2. req.method
   Description: Specifies the HTTP method of the request (e.g., GET, POST, PUT, etc.).
   Use: Useful for handling different request methods in the same route.
   Example

- code
  app.all("/example", (req, res) => {
  if (req.method === "POST") {
  res.send("This is a POST request");
  } else {
  res.send("This is not a POST request");
  }
  });

3. req.params
   Description: Contains route parameters defined in the URL (e.g., :id in /users/:id).
   Use: Often used to retrieve dynamic data in RESTful APIs.
   Example:

- code
  app.get("/user/:id", (req, res) => {
  res.send(`User ID is: ${req.params.id}`);
  });

4. req.query
   Description: Contains query parameters from the URL, often used for filtering or searching.
   Use: Useful for retrieving optional data from the URL.
   Example

- code
  app.get("/search", (req, res) => {
  res.send(`You searched for: ${req.query.term}`);
  });
  // Example URL: /search?term=JavaScript

5. req.body
   Description: Contains data sent in the request body (e.g., form data, JSON data).
   Use: Essential for handling POST, PUT, or PATCH requests where data is sent from the client.
   Example

- code
  app.post("/submit", (req, res) => {
  res.send(`Data received: ${req.body.name}`);
  });
  Note: Requires middleware like express.json() to parse JSON data.

6. req.headers
   Description: Contains metadata about the request, such as content type and authorization tokens.
   Use: Often used for authentication or content negotiation.
   Example

- code
  app.get("/info", (req, res) => {
  const userAgent = req.headers["user-agent"];
  res.send(`Your user agent is: ${userAgent}`);
  });

These properties make the request object versatile, helping handle client interactions by providing route parameters, request bodies, query parameters, and much more.
