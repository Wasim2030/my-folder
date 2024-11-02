window.onstorage = (e) => {
  alert("changed");
  console.log(e);
};

localStorage.setItem("name", "harry");

localStorage.setItem("name", "harry2");
