// passing to do object

const createToDo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getTodo = async (id) => {
  // let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  let r = await response.json();
  return r;
};

const mainFunc = async () => {
  let todo = {
    title: "harry2",
    body: "bhai2",
    userId: 1,
  };
  let todoRes = await createToDo(todo);
  console.log(todoRes);
  // console.log(await getTodo(567));
  console.log(await getTodo(5));
};

mainFunc();
