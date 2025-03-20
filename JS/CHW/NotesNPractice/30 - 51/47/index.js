let a = document.getElementsByClassName("container")[0];

// console.log(a);

/**
 * If onclick is embedded in html element - also in js file
 * then js onclick will work
 */
a.onclick = () => {
  a.innerHTML = "It is handled through the onclick property";
};
