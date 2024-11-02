let options = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    // posting this to this url - https://jsonplaceholder.typicode.com/posts
    title: "foo",
    body: "bar",
    userId: 1,
  }),
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((response) => response.json())
  .then((json) => console.log(json));
