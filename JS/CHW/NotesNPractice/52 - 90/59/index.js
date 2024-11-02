async function harry() {
  return 5;
}

console.log(harry());

harry().then((x) => {
  console.log(x);
});
