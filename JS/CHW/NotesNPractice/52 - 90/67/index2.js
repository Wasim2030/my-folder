const createToDo = async () => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      // posting this to this url - https://jsonplaceholder.typicode.com/posts
      title: "harry",
      body: "bhai",
      userId: 1,
    }),
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const mainFunc = async () => {
  let todo = await createToDo();
  console.log(todo);
};

mainFunc();
