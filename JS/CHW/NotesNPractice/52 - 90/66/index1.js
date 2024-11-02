let p = fetch("https://dummyjson.com/todos", {
  headers: {
    authentication: "secret",
    name: "waism",
  },
});

p.then((response) => {
  console.log(response.headers);

  return response.json();
}).then((response) => {
  console.log(response);
  console.log(response.todos);
});
