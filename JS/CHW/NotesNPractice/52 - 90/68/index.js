console.log(document.cookie);

document.cookie = "name=harry123434";
document.cookie = "name1=harry1";
document.cookie = "name2=harry2";
document.cookie = "name=harry"; // same key, will replace older

console.log(document.cookie);
