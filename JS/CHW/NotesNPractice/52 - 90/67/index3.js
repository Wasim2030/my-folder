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

const mainFunc = async () => {
  let todo = {
    title: "harry2",
    body: "bhai2",
    userId: 1,
  };
  let todoRes = await createToDo(todo);
  console.log(todoRes);
};

mainFunc();
